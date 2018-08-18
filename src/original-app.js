import React, { Component } from 'react';
import './App.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow,  } from "react-google-maps"

const location = [
      {id: 1, name: "O'Briens Market", geoLoc: {lat: 37.699766, lng: -121.048312}, address: "4120 Dale Rd., Modesto, CA 95356", type: "Retail", zip: "95356"},
      {id: 2, name: "Stewart & Jasper", geoLoc: {lat: 37.668785, lng: -120.991311}, address: "1700 McHenry Ave, Modesto, CA 95350", type: "Retail", zip: "95350"},
      {id: 3, name: "Delicato Family Vineyards", geoLoc: {lat: 37.855187, lng: -121.219360}, address: "12001 CA-99, Manteca, CA 95336", type: "Winery", zip: "95336"},
      {id: 4, name: "Gnekow Family Winery", geoLoc: {lat: 37.892064, lng: -121.102680}, address: "17347 Gawne Rd, Stockton, CA 95215", type: "Winery", zip: "95215"},
      {id: 5, name: "Lucca Winery", geoLoc: {lat: 37.761774, lng: -121.111315}, address: "16265 E River Rd, Ripon, CA 95366", type: "Winery", zip: "95366"}
      ]






class App extends Component {
state = {
    markerList:[],
    openIndex: 0,
    weatherInfo:[]
  }

componentDidMount(){
      this.setState({ markerList:location });
  };

getWeather = (zip) => {
fetch("http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&units=imperial&APPID=57943fe2663985770cdc1277ab1ce789").then(response => response.json()).then((weather) => {
  this.setState({ weatherInfo: weather.main })
  //console.log(this.state.weatherInfo.main.temp)
}).catch(e => {console.log(e);});
};

allList = () => {
  this.setState({ markerList:location, openIndex: 0});
}

retailList = () => {
  var retail = [];
  retail = location.filter((r) => r.type === "Retail");
  this.setState({ markerList:retail, openIndex: 0});
}

wineryList = () => {
  var winery = [];
  winery = location.filter((w) => w.type === "Winery");
  this.setState({ markerList:winery, openIndex: 0});
}

openInfoWindow = (index, zip) => {
  this.setState({ openIndex: index});
  this.getWeather(zip);
}



  render() {

    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 37.639066, lng: -120.997329 }}>
          {this.state.markerList.map((l) =>  <Marker key={l.id}
                              position={l.geoLoc}
                              animation={window.google.maps.Animation.DROP}
                              title={l.name}
                              onClick={() => this.openInfoWindow(l.id, l.zip)}>
                                {this.state.openIndex === l.id &&
                              <InfoWindow>
                                <div className="card">
                                    <div className="card-header">
                                      {l.type}
                                    </div>
                                    <div className="card-body">
                                      <h5 className="card-title">{l.name}</h5>
                                      <p className="card-text">{l.address}</p>
                                      <p className="card-text">Today's Weater: {this.state.weatherInfo.temp} degrees</p>
                                    </div>
                                </div>
                              </InfoWindow>}
                          </Marker>)};
      </GoogleMap>
    ));



    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1 ">Central Valley Wine Drinkers</span>
    </nav>

    <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-sm-12 ">

<MyMapComponent
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCoSxjYIgPR6dMVv-RcfpDkMi5-sLnYro4"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: '700px' }} />}
  mapElement={<div style={{ height: `100%` }} />}

/>



          </div>
        </div>

              <div className="row no-gutters">
            <div className="col-sm-12">
              <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary" tabIndex="1" onClick={this.allList}>All</button>
                <button type="button" className="btn btn-secondary" tabIndex="2" onClick={this.wineryList}>Winery</button>
                <button type="button" className="btn btn-secondary" tabIndex="3" onClick={this.retailList}>Retail</button>
              </div>
            </div>
              </div>





    <div className="row">
      <div className="card-deck card-columns">

    {this.state.markerList.map((card, index) =>
      <div className="col-sm-12 col-lg-4" key={card.id}>
        <div className="card" key={card.id}>
            <h5 className="card-header">{card.type}</h5>
              <div className="card-body">
                <h5 className="card-title">{card.name}</h5>
                <p className="card-text">{card.address}</p>
                <button type="button" tabIndex={3 + index} className="btn btn-primary" onClick={() => this.openInfoWindow(card.id)}>More Information</button>
              </div>
          </div>
      </div>)}
      </div>


      </div>
    </div>















      </div>
    );
  }
}

export default App;

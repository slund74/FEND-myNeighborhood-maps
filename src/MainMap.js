import React, {Component} from 'react'
import './App.css'
import { withGoogleMap, GoogleMap, Marker, InfoWindow,  } from "react-google-maps"

class MainMap extends Component {

  render() {
    const MyMapComponent = (withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 37.639066, lng: -120.997329 }}>
          {this.props.markerList.map((l) =>  <Marker key={l.id}
                              position={l.geoLoc}
                              animation={window.google.maps.Animation.DROP}
                              title={l.name}
                              onClick={() => this.props.openInfoWindow(l.id, l.zip)}>
                                {this.props.openIndex === l.id &&
                              <InfoWindow>
                                <div className="card">
                                    <div className="card-header">
                                      {l.type}
                                    </div>
                                    <div className="card-body">
                                      <h5 className="card-title">{l.name}</h5>
                                      <p className="card-text">{l.address}</p>
                                      <p className="card-text">Today's Weater: {this.props.weather} degrees</p>
                                    </div>
                                </div>
                              </InfoWindow>}
                          </Marker>)};
      </GoogleMap>
))

    return (

      <div className="container-fluid">
      <div className="row no-gutters">
          <div className="col-sm-12 ">

        <MyMapComponent
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: '700px' }} />}
          mapElement={<div style={{ height: `100%` }} />}

        />

      </div>

        </div>
     </div>

    )
  }
}

export default MainMap
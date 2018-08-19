import React, {Component} from 'react'
import './App.css'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

  const MyMapComponent = (withGoogleMap((props) =>

    <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 37.639066, lng: -120.997329 }}>
          {props.myMarkers.map((l) =>
            <Marker key={l.id}
                position={l.geoLoc}
                animation={props.openIndex === l.id && window.google.maps.Animation.DROP}
                title={l.name}
                onClick={() => props.openInfoWindow(l.id, l.zip)}>
                  {props.openIndex === l.id &&
                <InfoWindow>
                  <div className="card">
                      <div className="card-header">
                        {l.type}
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{l.name}</h5>
                        <p className="card-text">{l.address}</p>
                        <p className="card-text">Today's Weater: {props.weather} degrees</p>
                      </div>
                  </div>
                </InfoWindow>}
            </Marker>)
          };
    </GoogleMap>
 ))

class MainMap extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-sm-12 ">
            <MyMapComponent
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: '700px' }} />}
              mapElement={<div style={{ height: `100%` }} />}
              myMarkers={this.props.markerList}
              openIndex={this.props.openIndex}
              openInfoWindow={this.props.openInfoWindow}
              weather={this.props.weather}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default MainMap
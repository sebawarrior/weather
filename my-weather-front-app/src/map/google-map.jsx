import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -33.95,
      lng: -70.33
    },
    zoom: 0
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onClick={(input) => {
              console.log(input);
              const {lat: newLat, lng: newLng} = input;
              this.props.setLat(newLat)
              this.props.setLng(newLng)
              this.props.setModalIsActive(true)
              }}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
 
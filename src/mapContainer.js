import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
    width: "700",
    height: "500"
};

export class MapContainer extends Component {
    render() {
        return (
            <Map
                className="map"
                google={this.props.google}
                zoom={14}
                width={mapStyles.width}
                height={mapStyles.height}
                initialCenter={{ lat: -1.2884, lng: 36.8233 }}
            >
                <Marker
                    className="map-marker"
                    onClick={this.onMarkerClick}
                    name={"Current location"}
                />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(MapContainer);

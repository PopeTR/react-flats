import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import FlatList from "./flat_list";
import Flats from "../data/flats";
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: Flats[0],
      Flats,
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: Flats[index] });
  };

  center() {
    const { selectedFlat } = this.state;
    return {
      lat: selectedFlat.lat,
      lng: selectedFlat.lng,
    };
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        <FlatList
          flats={this.state.Flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />

        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyD4YzAnkA1U44Sx9AD14UKbPp8R7OfDlWs",
            }}
            defaultCenter={this.center()}
            defaultZoom={12}
          >
            <Marker
              lat={this.state.selectedFlat.lat}
              lng={this.state.selectedFlat.lng}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;

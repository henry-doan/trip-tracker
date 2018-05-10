import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { GoogleMap, Marker } from "react-google-maps"
import ViewMap from './ViewMap';

class Home extends Component {
  state = {
    isMarkerShown: false,
    markers: []
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  getCoord = (e) => {
    const mapLat = e.lat
    const mapLng = e.lng
    console.log(mapLat + ',' + mapLng)
  }

  render() {
    return (
      <ViewMap
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default Home;

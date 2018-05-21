import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Card, Button, Dimmer, Loader } from 'semantic-ui-react';
import { getTrips } from '../actions/trip';
import TripCard from './TripCard';

class TripsList extends Component {
  state = { loaded: false }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getTrips(this.setLoaded))
  }
 
  setLoaded = () => this.setState({ loaded: true });

  render() {
    if (!this.state.loaded) {
      return (
        <div>
          <br />
          <Dimmer active inverted>
            <Loader inverted size='large'>Loading</Loader>
          </Dimmer>
        </div>
      );
    }

    const { trips } = this.props
    console.log(trips)
    
    return (
      trips.length > 0 ?
        trips.map(trip =>
          <TripCard info={trip} />
        )
        : null
    )
  }
}

const mapStateToProps = (state) => {
 return { trips: state.trips };
};

export default connect(mapStateToProps)(TripsList);

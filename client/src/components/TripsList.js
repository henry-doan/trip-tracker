import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Card, Button } from 'semantic-ui-react';
import { getTrips } from '../actions/trip';

class TripsList extends Component {
  state = { trips: [] }
  
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getTrips())
  }

 
  render() {
    const { trips } = this.props
    return (
      <Container>
        <Card>
          <Card.Content>
            <Card.Header>
              Steve Sanders
            </Card.Header>
            <Card.Meta>
              Friends of Elliot
            </Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>Approve</Button>
              <Button basic color='red'>Decline</Button>
            </div>
          </Card.Content>
        </Card>
      </Container>
    )
  }
}

const mapStateToProps = (store) => ({
  trips: store.trips
});

export default connect(mapStateToProps)(TripsList);

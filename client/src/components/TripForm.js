import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Dropdown, Button, Container } from 'semantic-ui-react';
import { addTrip } from '../actions/trip';
import { CountOptions } from './CountOptions';

class TripForm extends Component {
  state = { duration: '', longitude: '', latitude: '', count: 0}
  
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }


  handleSelect = (e, data) => {
    const { id, value } = data;
    this.setState({ [id]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, history } = this.props;
    dispatch(addTrip(this.state, history))
  }

  render() {
    let { duration, longitude, latitude, count } = this.state
    return (
      <Container>
        <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <label htmlFor='duration'><b>Trip Duration</b></label>
          <Form.Input placeholder='Duration' name='duration' value={duration} id='duration' />
          
          <label htmlFor='longitude'><b>Trip Longitude</b></label>
          <Form.Input placeholder='Longitude' name='longitude' value={longitude} id='longitude' />
          
          <label htmlFor='latitude'><b>Trip Latitude</b></label>
          <Form.Input placeholder='Latitude' name='latitude' value={latitude} id='latitude' />
          
          <label htmlFor='count'><b>Trip Count</b></label>
          <Dropdown 
            placeholder='Trip Count' 
            fluid 
            selection 
            options={CountOptions} 
            value={count} 
            id='count'
            onChange={this.handleSelect} 
          />
          <Button className="primary-button">Create Trip</Button>
        </Form>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  const { trip } = state;
  return { trip };
};

export default connect(mapStateToProps)(TripForm);

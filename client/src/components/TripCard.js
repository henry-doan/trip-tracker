import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';

class TripCard extends Component {

  render() {
    const { id, duration, count, longitude, latitude } = this.props.info
    return (
      <Card key={id}>
        <Card.Content>
          <Card.Header>
            trip# {id}
          </Card.Header>
          <Card.Meta>
            Count: {count}
          </Card.Meta>
          <Card.Description>
            Duration: {duration}
            <br/>
            Long: {longitude}
            <br/>
            Lat: {latitude}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='yellow'>Edit</Button>
            <Button basic color='red'>Delete</Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default TripCard;
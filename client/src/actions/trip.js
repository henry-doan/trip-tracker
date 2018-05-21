import React from 'react';
import axios from 'axios';
import { setFlash } from '../actions/flash';
import { setHeaders } from '../actions/headers';

export const TRIPS = "TRIPS";
export const NEW_TRIP = "NEW_TRIP";

export const addTrip = (trip, history) => {
  return dispatch => {
    axios.post('/api/trips', { trip })
      .then( ({ data, headers}) => {
        dispatch({ type: NEW_TRIP, trip: data, headers })
        history.push('/');
      })
      .catch(res => {
        const messages =
          res.response.data.errors.full_messages.map(message =>
            <div>{message}</div>);
        const { headers } = res;
        dispatch(setHeaders(headers));
        dispatch(setFlash(messages, 'red'));
      });
  };
};

export const getTrips = (cb) => {
  return dispatch => {
    axios.get('/api/trips')
      .then( ({ data, headers }) => {
        dispatch({ type: TRIPS, trips: data, headers })
        cb();
      })
      .catch(res => {
        const messages =
          res.response.data.errors.full_messages.map(message =>
            <div>{message}</div>);
        const { headers } = res;
        dispatch(setHeaders(headers));
        dispatch(setFlash(messages, 'red'));
      });
  }
}

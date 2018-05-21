import {
  NEW_TRIP,
  TRIPS
} from '../actions/trip'

const trips = (state = {}, action) => {
  switch (action.type) {
    case TRIPS:
      return action.trips
    case NEW_TRIP:
      return [...state, action.trip]
    default:
      return state;
  }
};

export default trips;

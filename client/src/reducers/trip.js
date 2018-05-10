import {
  NEW_TRIP,
  TRIPS
} from '../actions/trip'

const trip = (state = {}, action) => {
  switch (action.type) {
    case NEW_POST:
      return [...state, action.trip]
    case TRIPS:
      return action.trips
    default:
      return state;
  }
};

export default trip;

import {
  RECEIVE_EVENT,
    RECEIVE_EVENT_ERRORS
  } from '../actions/event_actions';
  
  export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_EVENT_ERRORS:
        return action.errors;
      case RECEIVE_EVENT:
        return [];
      default:
        return state;
    }
  };
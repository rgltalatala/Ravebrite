import { RECEIVE_BOOKMARK } from "../actions/bookmark_actions";
import { RECEIVE_EVENT, RECEIVE_EVENTS, REMOVE_EVENT } from "../actions/event_actions";

const EventsReducer = (initialState = {}, action) => {
  Object.freeze(initialState)
  switch (action.type) {
    case RECEIVE_EVENTS:
        return action.events
    case RECEIVE_EVENT:
        return Object.assign({}, initialState, {[action.event.id]: action.event})
    case REMOVE_EVENT:
        let newState = Object.assign({}, initialState)
        delete newState[action.eventId]
        return newState
    case RECEIVE_BOOKMARK:  
        return Object.assign({}, initialState, {[action.bookmark.id]: action.bookmark})
    default:
      return initialState
  }
}

export default EventsReducer
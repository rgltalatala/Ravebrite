import * as EventAPIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';
export const REMOVE_EVENT_ERRORS = 'REMOVE_EVENT_ERRORS'

export const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events
})

export const receiveEvent = event => ({
    type: RECEIVE_EVENT,
    event
})

export const removeEvent = eventId => ({
    type: REMOVE_EVENT,
    eventId
})

export const receiveEventErrors = errors => ({
    type: RECEIVE_EVENT_ERRORS,
    errors
})

export const removeEventErrors = () => {
    return {
      type: REMOVE_EVENT_ERRORS
    }
  }

export const fetchEvents = () => dispatch => {
    return EventAPIUtil.fetchEvents()
        .then(events => dispatch(receiveEvents(events)))
    }

export const fetchEvent = eventId => dispatch => {
    return EventAPIUtil.fetchEvent(eventId)
        .then(event => dispatch(receiveEvent(event)))
    }

export const createEvent = event => dispatch => {
    return EventAPIUtil.createEvent(event)
        .then(event => {dispatch(receiveEvent(event))
    }, err => (
        dispatch(receiveEventErrors(err.responseJSON))
      ))
}

export const updateEvent = event => dispatch => {
    return EventAPIUtil.createEvent(event)
        .then(event => {dispatch(receiveEvent(event))
    }, err => (
        dispatch(receiveEventErrors(err.responseJSON))
      ))
}

export const deleteEvent = eventId => dispatch => {
    return EventAPIUtil.deleteEvent(eventId)
        .then(() => dispatch(removeEvent(eventId)))
}

export const clearEventErrors = () => dispatch => {
    return dispatch(removeEventErrors())
  }
        
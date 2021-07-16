import { RECEIVE_REGISTRATION, RECEIVE_REGISTRATIONS, REMOVE_REGISTRATION } from "../actions/registration_actions"

const RegistrationsReducer = (initialState = {}, action) => {
    Object.freeze(initialState)
    switch (action.type) {
    case RECEIVE_REGISTRATIONS:
        return action.registrations
    case RECEIVE_REGISTRATION:
        return Object.assign({}, initialState, {[action.registration.id]: action.registration})
    case REMOVE_REGISTRATION:
        let newState = Object.assign({}, initialState)
        delete newState[action.registrationId]
        return newState
    default:
        return initialState
    }
}

export default RegistrationsReducer
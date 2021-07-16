import * as RegistrationAPIUtil from '../util/registration_api_util';
import {receiveEvents} from './event_actions'

export const RECEIVE_REGISTRATIONS = 'RECEIVE_REGISTRATIONS'
export const RECEIVE_REGISTRATION = 'RECEIVE_REGISTRATION'
export const REMOVE_REGISTRATION = 'REMOVE_REGISTRATION'

const receiveRegistrations = registrations => ({
    type: RECEIVE_REGISTRATIONS,
    registrations
})

const receiveRegistration = registration => ({
    type: RECEIVE_REGISTRATION,
    registration
})

const removeRegistration = registrationId => ({
    type: REMOVE_REGISTRATION,
    registrationId
})

export const fetchRegistrations = (userId) => dispatch => {
    return RegistrationAPIUtil.fetchRegistrations(userId)
        .then(registrations => dispatch(receiveRegistrations(registrations)))
}


export const createRegistration = (registration) => dispatch => {
    return RegistrationAPIUtil.createRegistration(registration)
        .then(registration => dispatch(receiveRegistration(registration)))
}

export const deleteRegistration = (registrationId) => dispatch => {
    return RegistrationAPIUtil.deleteRegistration(registrationId)
        .then(() => dispatch(removeRegistration(registrationId)))
}
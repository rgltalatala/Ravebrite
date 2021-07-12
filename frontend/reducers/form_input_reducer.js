import { RECEIVE_GENRES } from "../actions/event_actions";

const formInputReducer = (initialState = {}, action) => {
    Object.freeze(initialState)
    switch (action.type) {
        case RECEIVE_GENRES:
            return action.genres
        default:
            return initialState
    }
}

export default formInputReducer
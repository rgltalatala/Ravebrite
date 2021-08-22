import { connect } from "react-redux";
import { fetchHostedEvents, deleteEvent } from "../../../actions/event_actions";
import UserEvents from './user_events'

const mSTP = state => ({
    events: Object.values(state.entities.events),
    currentUserId: state.session.id
})

const mDTP = dispatch => ({
    fetchHostedEvents: (userId) => dispatch(fetchHostedEvents(userId)),
    deleteEvent: (eventId) => dispatch(deleteEvent(eventId))
})

export default connect(mSTP, mDTP)(UserEvents)
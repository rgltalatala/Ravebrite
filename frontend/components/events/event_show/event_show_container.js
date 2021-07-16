import { connect } from "react-redux";
import EventShow from "./event_show";
import { fetchEvent, deleteEvent } from "../../../actions/event_actions";
import { withRouter } from "react-router";
import { createRegistration } from "../../../actions/registration_actions";

const mSTP = (state, ownProps) => ({
    event: state.entities.events[ownProps.match.params.eventId],
    currentUser: state.session.id
})

const mDTP = dispatch => ({
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    createRegistration: registration => dispatch(createRegistration(registration))
})

export default withRouter(connect(mSTP, mDTP)(EventShow))
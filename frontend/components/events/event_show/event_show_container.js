import { connect } from "react-redux";
import EventShow from "./event_show";
import { fetchEvent, deleteEvent } from "../../../actions/event_actions";
import { withRouter } from "react-router";

const mSTP = (state, ownProps) => ({
    event: state.entities.events[ownProps.match.params.eventId]
})

const mDTP = dispatch => ({
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId))
})

export default withRouter(connect(mSTP, mDTP)(EventShow))
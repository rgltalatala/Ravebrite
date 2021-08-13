import { connect } from "react-redux";
import EventShow from "./event_show";
import { fetchEvent, deleteEvent } from "../../../actions/event_actions";
import { withRouter } from "react-router";
import { createRegistration } from "../../../actions/registration_actions";
import { createBookmark, deleteBookmark } from "../../../actions/bookmark_actions";

const mSTP = (state, ownProps) => ({
    event: state.entities.events[ownProps.match.params.eventId],
    currentUserId: state.session.id
})

const mDTP = dispatch => ({
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    createRegistration: registration => dispatch(createRegistration(registration)),
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    createBookmark: (bookmark) => dispatch(createBookmark(bookmark)),
    deleteBookmark: (bookmarkId) => dispatch(deleteBookmark(bookmarkId))
})

export default withRouter(connect(mSTP, mDTP)(EventShow))
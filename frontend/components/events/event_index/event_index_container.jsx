import { connect } from "react-redux";
import { fetchEvents, fetchEvent, deleteEvent } from "../../../actions/event_actions";
import EventIndex from "./event_index";
import { createBookmark, deleteBookmark } from "../../../actions/bookmark_actions";


const mSTP = state => {
    let bookmark = state.session.id ? state.entities.users[state.session.id].bookmark : []
    return {
        events: Object.values(state.entities.events),
        currentUserId: state.session.id,
        bookmark
    }
}

const mDTP = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents()),
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
    createBookmark: (bookmark) => dispatch(createBookmark(bookmark)),
    deleteBookmark: (bookmarkId) => dispatch(deleteBookmark(bookmarkId))
})

export default connect(mSTP, mDTP)(EventIndex)
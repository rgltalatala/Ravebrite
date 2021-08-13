import { connect } from "react-redux";
import { fetchBookmarks, deleteBookmark } from "../../actions/bookmark_actions";
import Bookmarks from './bookmarks'


const mSTP = state => ({
    bookmarks: Object.values(state.entities.bookmarks),
    currentUser: state.session.id
})

const mDTP = dispatch => ({
    fetchBookmarks: (userId) => dispatch(fetchBookmarks(userId)),
    deleteBookmark: (bookmarkId) => dispatch(deleteBookmark(bookmarkId))
})

export default connect(mSTP, mDTP)(Bookmarks)
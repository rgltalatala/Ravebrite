import { RECEIVE_BOOKMARK, RECEIVE_BOOKMARKS, REMOVE_BOOKMARK } from "../actions/bookmark_actions"

const BookmarksReducer = (initialState = {}, action) => {
    Object.freeze(initialState)
    switch (action.type) {
    case RECEIVE_BOOKMARKS:
        return action.bookmarks
    case RECEIVE_BOOKMARK:
        return Object.assign({}, initialState, {[action.bookmark.id]: action.bookmark})
    case REMOVE_BOOKMARK:
        let newState = Object.assign({}, initialState)
        delete newState[action.bookmarkId]
        return newState
    default:
        return initialState
    }
}

export default BookmarksReducer
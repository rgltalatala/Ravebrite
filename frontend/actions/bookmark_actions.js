import * as BookmarkAPIUtil from '../util/bookmark_api_util';

export const RECEIVE_BOOKMARKS = 'RECEIVE_BOOKMARKS'
export const RECEIVE_BOOKMARK = 'RECEIVE_BOOKMARK'
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK'

const receiveBookmarks = bookmarks => ({
    type: RECEIVE_BOOKMARKS,
    bookmarks
})

const receiveBookmark = (bookmark, eventId) => ({
    type: RECEIVE_BOOKMARK,
    bookmark,
    eventId
})

const removeBookmark = bookmarkId => ({
    type: REMOVE_BOOKMARK,
    bookmarkId
})

export const fetchBookmarks = (userId) => dispatch => {
    return BookmarkAPIUtil.fetchBookmarks(userId)
        .then(bookmarks => dispatch(receiveBookmarks(bookmarks)))
}

export const createBookmark = (bookmark) => dispatch => {
    return BookmarkAPIUtil.createBookmark(bookmark)
        .then(bookmark => dispatch(receiveBookmark(bookmark, bookmark.event_id)))
}

export const deleteBookmark = (bookmarkId) => dispatch => {
    return BookmarkAPIUtil.deleteBookmark(bookmarkId)
        .then(() => dispatch(removeBookmark(bookmarkId)))
}
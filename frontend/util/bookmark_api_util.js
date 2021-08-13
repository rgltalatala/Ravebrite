export const fetchBookmarks = (userId) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}/bookmarks`
    })
};

export const createBookmark = (bookmark) => {
    return $.ajax({
        method: "POST",
        url: `/api/events/${bookmark.event_id}/bookmarks`,
        data: {bookmark}
    })
}

export const deleteBookmark = (bookmarkId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/bookmarks/${bookmarkId}`
    })
}
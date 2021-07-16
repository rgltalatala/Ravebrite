export const fetchEvents = () => {
    return $.ajax({
        method: "GET",
        url: "/api/events",
    })
};

export const fetchEvent = (eventId) => {
    return $.ajax({
        method: "GET",
        url: `/api/events/${eventId}`,
    })
};

export const createEvent = (event) => {
    return $.ajax({
        method: "POST",
        url: `/api/events`,
        data: {event}
    })
}

export const updateEvent = (event) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/events/${event.id}`,
        data: {event}
    })
}

export const deleteEvent = (eventId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/events/${eventId}`
    })
}

export const fetchHostedEvents = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/events`
    })
};

export const fetchEventGenre = (genre) => {
    return $.ajax({
        method: 'GET',
        url: `/api/genres`,
        data: {genre}
    })
}
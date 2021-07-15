export const fetchRegistrations = (userId) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}/registrations`,
    })
};

export const createRegistration = (registration) => {
    return $.ajax({
        method: "POST",
        url: `/api/events/${registration.event_id}/registrations`,
        data: {registration}
    })
}

export const deleteRegistration = (registrationId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/registrations/${registrationId}`
    })
}
import React from 'react'

const EventIndexItem = props => {
    const {deleteEvent, event} = props
    
    return(
        <li>
            <h3>{event.title}</h3>
            <br />

            <label>Location: 
                {event.location}
            </label>
            <br />

            <label>Date(s): 
                {event.start_date} - {event.end_date}
            </label>
            <br />

            <label>Time: 
                {event.start_time} - {event.end_time}
            </label>
            <br />

            <p>{event.description}</p>
            <br />

            {event.category}

            <button onClick={() => deleteEvent(event.id)}></button>
        </li>
    )
}

export default EventIndexItem
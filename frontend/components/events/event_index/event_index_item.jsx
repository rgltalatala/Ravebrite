import React from 'react'
import { Link } from 'react-router-dom'



const EventIndexItem = props => {
    const {event} = props
    
    return(
        <li>
            <h3>
                <Link to={`/events/${event.id}`}>{event.title}</Link>
            </h3>
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

            
        </li>
    )
}

export default EventIndexItem
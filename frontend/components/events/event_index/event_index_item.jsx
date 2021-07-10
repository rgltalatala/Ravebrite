import React from 'react'
import { Link } from 'react-router-dom'



const EventIndexItem = props => {
    const {event} = props
    
    return(
        <div className="event-index-item-container">
            <li className="event-index-item">
                <h3 className="event-index-title">
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
        </div>
    )
}

export default EventIndexItem
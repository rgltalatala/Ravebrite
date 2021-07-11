import React from 'react'
import { Link } from 'react-router-dom'



const EventIndexItem = props => {
    const {event} = props
    
    return(
        <div className="event-index-item-container">
            <li className="event-index-item">
                <Link to={`/events/${event.id}`} className="card-image"></Link>

                <div className="bookmark-wrapper">
                    <i class="far fa-heart bookmark"></i>
                </div>
                <h2 className="event-index-title">
                    <Link to={`/events/${event.id}`}>{event.title}</Link>
                </h2>
                <br />


                <label className="card-date">
                    {event.start_date}, {event.start_time}
                </label>
                <br />

                <label className="card-location">  
                    {event.location}
                </label>
                <br />
                    
                <br />
            </li>
        </div>
    )
}

export default EventIndexItem
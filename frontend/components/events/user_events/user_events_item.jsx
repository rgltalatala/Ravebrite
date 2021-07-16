import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'


class UserEventsItem extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const {event} = this.props

        return(
            <div className="registration-card">
                <div className="registration-image"></div>
                <div className="registration-info">
                    {/* <Link to={`/events/${event.id}`} className="card-image"></Link> */}
                    <h2 className="registration-title">
                        {event.title}
                    </h2>
    
                    <div className="registration-date">
                        {moment(event.start_date).format("dddd, MMMM Do YYYY")}, {event.start_time}
                    </div>
                    <br />
    
                    <div className="registration-date">  
                        {event.location}
                    </div>
                </div>

                    <button 
                        onClick={() => this.props.deleteEvent(event.id)}
                        className="delete-registration"
                    >
                        Delete
                    </button>
            </div>
        )
    }
}

export default UserEventsItem
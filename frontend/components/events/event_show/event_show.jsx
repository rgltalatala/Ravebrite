import React from "react";
import {Link} from "react-router-dom"

class EventShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true
        };
    }

    componentDidMount(){
        this.props.fetchEvent(this.props.match.params.eventId).then(() => {
            this.setState({loading: false})
        })
    }

    render(){
        if (this.state.loading){
            return(
                <>
                    loading
                </>
            )
        } else {
            const {event, deleteEvent} = this.props
            return (
                <>
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
                    <Link to={`/events/${event.id}/edit`}>Edit Event</Link>
                    <button onClick={() => deleteEvent(event.id)}></button>
                </>
            )
        }

    }
}

export default EventShow
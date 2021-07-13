import React from "react";
import {Link, withRouter} from "react-router-dom"

class EventShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true
        };

        this.deleteEvent = this.deleteEvent.bind(this)
    }

    componentDidMount(){
        this.props.fetchEvent(this.props.match.params.eventId).then(() => {
            this.setState({loading: false})
        })
    }

    deleteEvent(eventId){
        this.props.deleteEvent(eventId)
        this.props.history.push('/')
    }

    render(){
        if (this.state.loading){
            return(
                <>
                    loading
                </>
            )
        } else {
            const {event, currentUser} = this.props
            const currUserButtons = () => {
                return (
                    <>
                        <Link to={`/events/${event.id}/edit`}>Edit Event</Link>
                        <br />
                        <button onClick={() => this.deleteEvent(event.id)}>Delete Event</button>
                    </>
                )
            }

            return (
                <div className="event-show-wrapper">
                    <div className="event-show-background"></div>
                    
                    <div className="event-show-card">
                        <div >
                            <img src={window.rave} alt="rave" className="event-show-image"/>
                        </div>

                        <div className="event-show-details">
                            <label className="event-details-child show-location"> 
                                {event.location}
                            </label>
                            <br />

                            <h3  className="event-details-child show-title">{event.title}</h3>
                            <br />

                            <p  className="event-details-child show-genre">{event.genre}</p>
                        </div>


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
        
                        {event.genre}
                        <br />

                        {currentUser === event.host_id ? currUserButtons() : ''}
                    </div>
                </div>
            )
        }

    }
}

export default withRouter(EventShow)
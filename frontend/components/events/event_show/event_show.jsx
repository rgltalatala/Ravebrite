import moment from "moment";
import React from "react";
import {Link, withRouter} from "react-router-dom"


class EventShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            bookmarked: false
        };

        this.deleteEvent = this.deleteEvent.bind(this)
        this.handleBookmark = this.handleBookmark.bind(this)
    }

    handleBookmark(e) {
        e.preventDefault()
        if (this.state.bookmarked === false){
            this.setState({bookmarked: true})
        } else {
            this.setState({bookmarked: false})
        }
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
                        <button className="user-button">
                            <Link to={`/events/${event.id}/edit`} className="edit">Edit Event</Link>
                        </button>
                        <br />
                        <button onClick={() => this.deleteEvent(event.id)} className="user-button">Delete Event</button>
                    </>
                )
            }

            const bookmarkEvent = () => {
                if (this.state.bookmarked === false){
                    return <i className="far fa-heart bookmark" ></i>
                } else { 
                    return <i className="fas fa-heart bookmark active"></i>
                }
            }

            return (
                <div className="event-show-wrapper">
                    <div className="event-show-background">
                        <img src={window.rave} alt="rave"/>
                    </div>
                    
                    <div className="event-show-card">
                        <div className="event-show-details">
                            <div>
                                <img src={window.rave} alt="rave" className="event-show-image"/>
                            </div>
                            <div className="event-basic-info">
                                <label className="event-details-child show-location">
                                        {moment(event.start_date).format("dddd, MMMM Do YYYY")}
                                </label>
                                <br />

                                <h3  className="event-details-child show-title">{event.title}</h3>
                                <br />

                                <p  className="event-details-child show-genre">{event.genre}</p>
                            </div>
                        </div>

                        <div className="event-show-func-buttons">
                            <div className="show-bookmark-wrapper">
                                <div className="bookmark-circle-show-like" onClick={this.handleBookmark} >
                                    {bookmarkEvent()}
                                </div>
                            </div>
                            <div className="button-wrapper">
                                <button className="purchase-button">
                                    Buy tickets
                                </button>
                            </div>
                        </div>

                        <div className="event-show-info">
                            <div className="event-show-info-left">
                                About this event
                                <br />
                                <p className="event-description">{event.description}</p>
                                <br />

                            </div>

                            <div className="event-show-info-right">

                                <label>Date and time
                                    <br />
                                    <p>
                                        {moment(event.start_date).format("dddd, MMMM Do YYYY")}, {event.start_time} - {moment(event.end_date).format("dddd, MMMM Do YYYY")}{event.end_time}
                                    </p>
                                </label>
                                <br />

                                <label>Location
                                    <br />  
                                    <p>
                                        {event.location}
                                    </p>
                                </label>
                                <br />

                                <div className="user-button-wrapper">
                                    {currentUser === event.host_id ? currUserButtons() : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

    }
}

export default withRouter(EventShow)
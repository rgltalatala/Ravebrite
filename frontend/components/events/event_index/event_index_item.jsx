import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class EventIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.handleBookmark = this.handleBookmark.bind(this)
    }

    handleBookmark(e) {
        e.preventDefault()

        if (this.props.currentUserId){
            const { currentUserId,
                    event,
                    deleteBookmark,
                    createBookmark,
                    fetchEvent,
                    } = this.props
            let bookmark = event.bookmark || {} ;

            if (bookmark.hasOwnProperty("user_id")){
                deleteBookmark(bookmark.id)
                .then(() => fetchEvent(event.id))
                // $( `#${event.id}` ).removeClass("active");
            } else {
                createBookmark({user_id: currentUserId, event_id: event.id})
                .then(() => fetchEvent(event.id))
                // $( `#${event.id}` ).addClass("active");
            }
        } else {
            this.props.history.push('/login');
        }
    }

    bookmarkEvent (){
        const {event, currentUserId, fetchEvent} = this.props

        let bookmark = event.bookmark || {};
        if (!bookmark.hasOwnProperty("user_id")){
            return <i className="far fa-heart bookmark" id={event.id}></i>
        } else { 
            return <i className="fas fa-heart bookmark active" id={event.id}></i>
        }
    }

    // componentDidUpdate(){
    //     this.props.fetchEvent(this.props.event.id)
    // }

    render(){
        const {event, currentUserId,} = this.props
        let bookmark = event.bookmark || {};
        return(
            <div className="event-index-item-container">
                <li className="event-index-item">
                    <Link to={`/events/${event.id}`} className="card-image-wrapper">
                        <img src={event.photoUrl} className="card-image" alt="rave"/>
                    </Link>

                    <div className="bookmark-wrapper">
                        <div className="bookmark-circle" onClick={this.handleBookmark} >
                            {this.bookmarkEvent()}
                        </div>
                    </div>
                    <div className="event-info-wrapper">
                        <h2 className="event-index-title">
                            <Link to={`/events/${event.id}`}>{event.title}</Link>
                        </h2>
                        <br />
        
                        <label className="card-date">
                            {moment(event.start_date).format("dddd, MMMM Do YYYY")}, {event.start_time}
                        </label>
                        <br />
        
                        <label className="card-location">  
                            {event.location}
                        </label>
                        <br />
                    </div>
                        
                    <br />
                </li>
            </div>
        )
    }
}

export default withRouter(EventIndexItem)
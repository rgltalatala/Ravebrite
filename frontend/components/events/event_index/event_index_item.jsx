import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class EventIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.handleBookmark = this.handleBookmark.bind(this)
        this.state = { bookmarked: false }
        let bookmarkLogo = function () {<i className="far fa-heart bookmark"></i>}
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
            console.log(bookmark)

            if (bookmark.hasOwnProperty("user_id")){
                deleteBookmark(bookmark.id)
                .then(() => fetchEvent(event.id));
                this.bookmarkEvent()
            } else {
                createBookmark({user_id: currentUserId, event_id: event.id})
                .then(() => fetchEvent(event.id));
                this.bookmarkEvent()
            }
        } else {
            this.props.history.push('/login');
        }
    }

    bookmarkEvent (){
        const {event, currentUserId} = this.props

        let bookmark = event.bookmark || {};

        if (!bookmark.hasOwnProperty("user_id")){
            return <i className="far fa-heart bookmark"></i>

        } else { 
            return <i className="fas fa-heart bookmark active"></i>
        }
    }

    render(){
        const {event, currentUserId,} = this.props
        let bookmark = event.bookmark || {};
        console.log(bookmark)
        // create a function to switch class name and respectively switch to solid heart
        return(
            <div className="event-index-item-container">
                <li className="event-index-item">
                    <Link to={`/events/${event.id}`} className="card-image-wrapper">
                        <img src={event.photoUrl} className="card-image" alt="rave"/>
                    </Link>

                    <div className="bookmark-wrapper">
                        <div className="bookmark-circle" onClick={this.handleBookmark} >
                            {this.bookmarkEvent()}
                            {/* {this.bookmarkLogo} */}
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
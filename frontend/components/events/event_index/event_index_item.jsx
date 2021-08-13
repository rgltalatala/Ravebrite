import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class EventIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.handleBookmark = this.handleBookmark.bind(this)
        this.state = { bookmarked: false }
    }
    
    handleBookmark(e) {
        e.preventDefault()

        if (this.props.currentUserId){
            const { currentUserId,
                    event,
                    deleteBookmark,
                    createBookmark,
                    fetchEvent,
                    id
                    } = this.props
            let bookmarks = event.bookmarks || {};
            let bookmark = bookmarks[currentUserId];
            let bookmarkLogo = document.getElementById(`${id}`)

            if (bookmarks.hasOwnProperty(currentUserId)){
                this.setState({bookmarked: false})
                deleteBookmark(bookmark.id)
                    .then(() => fetchEvent(event.id));
            } else {
                this.setState({bookmarked: true})
                createBookmark({user_id: currentUserId, event_id: event.id})
                    .then(() => fetchEvent(event.id));
            }
        } else {
            this.props.history.push('/login');
        }
    }

    bookmarkEvent (){
        const {event, currentUserId} = this.props

        let bookmarks = event.bookmarks || {};
        // const bookmark = this.state.bookmarked || bookmarks.hasOwnProperty(currentUserId) 

        if (!bookmarks.hasOwnProperty(currentUserId)){
            // debugger
            return <i className="far fa-heart bookmark" ></i>
        } else { 
            // debugger
            return <i className="fas fa-heart bookmark active"></i>
        }
    }

    render(){
        const {event, currentUserId} = this.props
        // create a function to switch class name and respectively switch to solid heart
        

        return(
            <div className="event-index-item-container">
                <li className="event-index-item">
                    <Link to={`/events/${event.id}`} className="card-image"></Link>

                    <div className="bookmark-wrapper">
                        <div className="bookmark-circle" onClick={this.handleBookmark} >
                            {this.bookmarkEvent()}
                        </div>
                    </div>
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
                        
                    <br />
                </li>
            </div>
        )
    }
}

export default withRouter(EventIndexItem)
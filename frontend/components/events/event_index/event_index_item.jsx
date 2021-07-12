import React from 'react'
import { Link } from 'react-router-dom'



class EventIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.handleBookmark = this.handleBookmark.bind(this)
        this.state = { bookmarked: false }
    }
    
    handleBookmark(e) {
        e.preventDefault()
        if (this.state.bookmarked === false){
            this.setState({bookmarked: true})
        } else {
            this.setState({bookmarked: false})
        }
    }

    render(){
        const {event} = this.props
        // create a function to switch class name and respectively switch to solid heart
        const bookmarkEvent = () => {
            if (this.state.bookmarked === false){
                return <i className="far fa-heart bookmark" ></i>
            } else { 
                return <i className="fas fa-heart bookmark active"></i>
            }
        }

        return(
            <div className="event-index-item-container">
                <li className="event-index-item">
                    <Link to={`/events/${event.id}`} className="card-image"></Link>
    
                    <div className="bookmark-wrapper">
                        <div className="bookmark-circle" onClick={this.handleBookmark} >
                            {bookmarkEvent()}
                        </div>
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
}

export default EventIndexItem
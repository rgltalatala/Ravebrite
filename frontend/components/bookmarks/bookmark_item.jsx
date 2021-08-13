import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'

class BookmarkItem extends React.Component {
    render(){
        const {bookmark, deleteBookmark} = this.props
        console.log(bookmark)

        return(
            <div className="registration-card">
                <div className="registration-image"></div>
                <div className="registration-info">
                    <h2 className="registration-title">
                        <Link to={`/events/${bookmark.event_id}`}>{bookmark.title}</Link>
                    </h2>
                    <div className="registration-date">
                        {moment(bookmark.start_date).format("dddd, MMMM Do YYYY")}
                    </div>
                </div>
                <button 
                    onClick={() => deleteBookmark(bookmark.id)}
                    className="delete-registration"
                >
                    Delete
                </button>
            </div>
        )
    }
}

export default BookmarkItem
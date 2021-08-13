import React from 'react'
import BookmarkItem from './bookmark_item'

class Bookmarks extends React.Component{
    componentDidMount(){
        this.props.fetchBookmarks(this.props.currentUser)
    }

    render(){
        const {bookmarks, deleteBookmark} = this.props
        
        const sortedBookmarks = Object.values(bookmarks).sort(function(a, b){
            return new Date(a.start_date) - new Date(b.start_date);
        });
    
        return (
            <div className="registration-index-wrapper">
                <h1> 
                    Bookmarked Events
                </h1>
                <ul className="registration-index">
                    {sortedBookmarks.map((bookmark, i) => (
                        <BookmarkItem
                        key={i}
                        bookmark={bookmark}
                        deleteBookmark={deleteBookmark}
                    />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Bookmarks
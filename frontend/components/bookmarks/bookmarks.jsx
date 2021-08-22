import React from 'react'
import { Link } from 'react-router-dom'
import BookmarkItem from './bookmark_item'

class Bookmarks extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: false
        }
    }

    componentDidMount(){
        let footer = document.getElementsByClassName('footer')[0]
        footer.removeAttribute("style")
        this.props.fetchBookmarks(this.props.currentUser).then(() => {
            this.setState({loading : false})
        })
    }

    componentDidUpdate(prevProps){
        const {bookmarks, fetchBookmarks, currentUserId} = this.props
        if (bookmarks.length !== prevProps.bookmarks.length) {
            fetchBookmarks(currentUserId);
        }
    }

    render(){
            if (!this.props.bookmarks.length){
                return (
                    <div className="registration-index-wrapper">
                            <h1> 
                                Bookmarked Events
                            </h1>
                            <div className="nothing-here">
                                <p>You currently don't have any bookmarks.</p>
                                <br />
                                <br />
                                <p>Bookmark some events <Link to='/'>here!</Link></p>
                            </div>
                        </div>
                )
            } else {
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
}

export default Bookmarks
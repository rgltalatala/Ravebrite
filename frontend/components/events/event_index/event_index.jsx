import React from 'react'
import { genres } from '../../../util/event_form_util'
import EventIndexItem from './event_index_item'

class EventIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            genre_idx: 0
        }

        this.selectGenre = this.selectGenre.bind(this)
    }
    //tabs into below func
    // componentDidUpdate to display filtered events by genre
    //fetchEventGenre to only fetch events we care about (ie specific genre)

    componentDidMount(){
        this.props.fetchEvents()
    }

    selectGenre(genre_idx) {
        this.setState({ genre_idx: genre_idx });
    }
    
    render(){
        const { currentUserId,
                events,
                fetchEvent,
                deleteEvent,
                deleteBookmark,
                createBookmark,
                bookmarks
                } = this.props

        const selected = this.state.genre_idx;
        const eventGenres = genres.map((genre, index) => {
            const eventGenre = genre;
            const selectedGenre = index === selected ? 'active' : '';

            return (
                <li key={index} className={selectedGenre} onClick={() => this.selectGenre(index)}>{eventGenre}</li>
            )
        })

        let filteredEvents 
        switch (this.state.genre_idx) {
            case 0:
                filteredEvents = events
                break;
            case 1:
                filteredEvents = events.filter(event => event.genre === "House")
                break;
            case 2:
                filteredEvents = events.filter(event => event.genre === "Techno")
                break;
            case 3:
                filteredEvents = events.filter(event => event.genre === "Dubstep")
                break;
            case 4:
                filteredEvents = events.filter(event => event.genre === "Trap")
                break;
            case 5:
                filteredEvents = events.filter(event => event.genre === "Trance")
                break;
            case 6:
                filteredEvents = events.filter(event => event.genre === "Future Bass")
                break;
            case 7:
                filteredEvents = events.filter(event => event.genre === "Ambient")
                break;
            case 8:
                filteredEvents = events.filter(event => event.genre === "Hardstyle")
                break;
            case 9:
                filteredEvents = events.filter(event => event.genre === "Drum and Bass")
                break;
            case 10:
                filteredEvents = events.filter(event => event.genre === "Garage")
                break;
            case 11:
                filteredEvents = events.filter(event => event.genre === "Multi-genre")
                break;
            default:
                break;
        }
        
        filteredEvents = filteredEvents.map((event, i) => (
                    <EventIndexItem 
                        key={event.id} 
                        event={event}
                        deleteEvent={deleteEvent}
                        currentUserId={currentUserId}
                        createBookmark={createBookmark}
                        deleteBookmark={deleteBookmark}
                        bookmarks={bookmarks}
                        fetchEvent={fetchEvent}
                    />
            )
        )

        return (
            <div className="splash-page">
                <div className="splash-header">
                    <img src={window.coachella} alt="coachella grounds" className="header"/>
                </div>
                <div className="landing">
                    <h1 className="landing-header">
                        Upcoming <span>events!</span>
                    </h1>
                    <div className="event-genres-wrapper">
                        <ul className='event-genres'>
                            {eventGenres}
                        </ul>
                    </div>
                    <br />
                    <div className="events-wrapper">
                        <ul className="event-index">
                            {filteredEvents}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventIndex
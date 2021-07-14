import React from 'react'

import EventIndexItem from './event_index_item'


class EventIndex extends React.Component{
    //tabs into below func
    // componentDidUpdate to display filtered events by genre
    //fetchEventGenre to only fetch events we care about (ie specific genre)

    componentDidMount(){
        this.props.fetchEvents()
    }
    
    render(){
    const {events} = this.props
        return (
            <div className="splash-page">
                <div className="splash-header">
                    <img src={window.coachella} alt="coachella grounds" className="header"/>
                </div>
                <div className="landing">
                    <h1 className="landing-header">
                        Upcoming <span>events!</span>
                    </h1>
                    <br />
                    <div className="events-wrapper">
                        <ul className="event-index">
                            {events.map(event => (
                                <EventIndexItem 
                                    key={event.id} 
                                    event={event}
                                    deleteEvent={this.props.deleteEvent}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventIndex
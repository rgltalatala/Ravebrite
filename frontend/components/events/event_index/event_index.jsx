import React from 'react'

import EventIndexItem from './event_index_item'


class EventIndex extends React.Component{

    componentDidMount(){
        this.props.fetchEvents()
    }
    
    render(){
        const {events} = this.props
        return (
            <>
                <div className="landing">
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
            </>
        )
    }
}

export default EventIndex
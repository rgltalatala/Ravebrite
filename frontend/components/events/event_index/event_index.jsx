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
                <ul>
                    {events.map(event => (
                        <EventIndexItem 
                            key={event.id} 
                            event={event}
                            deleteEvent={this.props.deleteEvent}
                        />
                    ))}
                </ul>
            </>
        )
    }
}

export default EventIndex
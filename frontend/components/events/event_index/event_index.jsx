import React from 'react'

import EventIndexItem from './event_index_item'


class EventIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchEvents()
    }
    
    render(){
        const {events} = this.props
            // console.log('before', events)
        return (
            <>
                {/* {console.log('after', events)} */}
                {events.map(event => (
                    <EventIndexItem 
                        key={event.id} 
                        event={event}
                        deleteEvent={this.props.deleteEvent}
                    />
                ))}
                {/* {EventIndexItems} */}
            </>
        )
    }
}

export default EventIndex
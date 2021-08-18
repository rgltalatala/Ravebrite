import React from 'react'
import UserEventsItem from './user_events_item'

class UserEvents extends React.Component {
    componentDidMount(){
        let footer = document.getElementsByClassName('footer')[0]
        footer.removeAttribute("style")
        this.props.fetchHostedEvents(this.props.match.params.userId)
    }

    render(){
        const {events} = this.props

        return (
            <div className="registration-index-wrapper">
                <h1>
                    My Events
                </h1>
                <ul className="registration-index">
                    {events.map(event => (
                        <UserEventsItem
                            key={event.id} 
                            event={event}
                            deleteEvent={this.props.deleteEvent}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default UserEvents
import React from 'react'
import UserEventsItem from './user_events_item'
import { Link } from 'react-router-dom'

class UserEvents extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading: false
        }
    }
    
    componentDidMount(){
        let footer = document.getElementsByClassName('footer')[0]
        footer.removeAttribute("style")
        this.props.fetchHostedEvents(this.props.match.params.userId).then(() => {
            this.setState({loading : false})
        })
    }

    componentDidUpdate(prevProps){
        const {events, fetchHostedEvents, currentUserId} = this.props
        if (events.length !== prevProps.events.length) {
            fetchHostedEvents(currentUserId);
        }
    }

    render(){
            if (!this.props.events.length){
                return (
                        <div className="registration-index-wrapper">
                            <h1> 
                                Orders
                            </h1>
                            <div className="nothing-here">
                                <p>You currently don't have any tickets.</p>
                                <br />
                                <br />
                                <p>Let's change that.</p>
                                <br />
                                <br />
                                <p>Check out some events <Link to='/'>here!</Link></p>
                            </div>
                        </div>
                )
            } else {
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
    }

export default UserEvents;
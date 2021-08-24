import React from 'react'
import { Link } from 'react-router-dom'
import RegistrationItem from './registration_item'

class UserRegistrations extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: false
        }
    }

    componentDidMount(){
        let footer = document.getElementsByClassName('footer')[0]
        footer.removeAttribute("style")
        this.props.fetchRegistrations(this.props.currentUserId).then(() => {
            this.setState({loading : false})
        })
    }

    componentDidUpdate(prevProps){
        const {registrations, fetchRegistrations, currentUserId} = this.props
        if (registrations.length !== prevProps.registrations.length) {
            fetchRegistrations(currentUserId);
        }
    }

    render(){
        if (!this.props.registrations.length){
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
                const {registrations, deleteRegistration} = this.props
                const sortedRegistrations = Object.values(registrations).sort(function(a, b){
                    return new Date(a.start_date) - new Date(b.start_date);
                });
            return (
                <div className="registration-index-wrapper">
                    <h1> 
                        Orders
                    </h1>
                    <ul className="registration-index">
                        {sortedRegistrations.map((registration, i) => (
                            <RegistrationItem
                            key={i}
                            registration={registration}
                            deleteRegistration={deleteRegistration}
                        />
                        ))}
                    </ul>
                </div>
            )
        }
    }
}

export default UserRegistrations;
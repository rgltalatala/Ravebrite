import React from 'react'
import RegistrationItem from './registration_item'

class UserRegistrations extends React.Component{

    componentDidMount(){
        let footer = document.getElementsByClassName('footer')[0]
        footer.removeAttribute("style")
        this.props.fetchRegistrations(this.props.currentUser)
    }

    render(){
        const {registrations, deleteRegistration} = this.props
        let check = {}
        // const tickets = registrations.map((event) => {
        //     if (!Object.keys(check).includes(event.event_id)){
        //         check[event.event_id] = event
        //     }
        // })

            
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

export default UserRegistrations;
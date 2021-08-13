import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'



class RegistrationItem extends React.Component {
    render(){
        const {registration} = this.props

        return(
            <div className="registration-card">
                <div className="registration-image"></div>
                <div className="registration-info">
                    <h2 className="registration-title">
                        <Link to={`/events/${registration.event_id}`}>{registration.title}</Link>
                    </h2>
                    <div className="registration-date">
                        {moment(registration.start_date).format("dddd, MMMM Do YYYY")}
                    </div>
                </div>
                <button 
                    onClick={() => this.props.deleteRegistration(registration.id)}
                    className="delete-registration"
                >
                    Delete
                </button>
            </div>
        )
    }
}

export default RegistrationItem
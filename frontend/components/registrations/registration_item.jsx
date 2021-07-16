import moment from 'moment'
import React from 'react'


class RegistrationItem extends React.Component {
    render(){
        const {registration} = this.props

        return(
            <div className="registration-card">
                <div className="registration-image"></div>
                <div className="registration-info">
                    <h2 className="registration-title">
                        {registration.title}
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
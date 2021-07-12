import React from 'react';
import { withRouter } from 'react-router-dom';

class EventForm extends React.Component{
    constructor(props) {
        super(props);
        // this.newState = Object.assign({}, this.props.event)
        this.state = this.props.event
        this.handleSubmit = this.handleSubmit.bind(this);
    }

      //write function to assign host_id to session :id

    update(field) {
    return e => this.setState({
        [field]: e.currentTarget.value
    });
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
            .then((res) => this.props.history.push(`/events/${res.event.id}`))
    }

    renderErrors() {
        return(
        <ul>
            {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
                {error}
            </li>
            ))}
        </ul>
        );
    }

    componentWillUnmount() {
    }

    componentDidMount(){
        // this.props.fetchEventGenres()
    }

    render(){
        const {formType} = this.props
        return (
            <div className="event-form-wrapper">
                <form onSubmit={this.handleSubmit} className='event-form'>

                    <div className='event-form-section'>
                        <h2>Basic Info</h2>
                        <label>Event Title</label>
                        <p>
                            Name your event and provide a genre.
                        </p>
                        <input 
                            type="text" 
                            onChange={this.update('title')}
                            value={this.state.title}
                            className="eventFormInput"
                        />
                        {/* make default option: Add your own by having user type in own genre */}
                        <br />
                        <label >Genre: </label>
                        <select 
                            onChange={this.update('genre')}
                            className="eventFormInput"
                        > 
                            {/* {this.props.} */}
                        </select>
                    </div>
                    <br />

                    <div className='event-form-section'>
                        <h2>Location</h2>
                        <p>
                            Let people in the area discover your event, and let attendees know where to show up. 
                        </p>
                        <input 
                            type="text" 
                            value={this.state.location} 
                            onChange={this.update('location')}
                            className="eventFormInput"
                        />
                    </div>
                    <br />

                    <div className='event-form-section'>
                        <h2>Date and time</h2>
                        <p>
                            Tell event-goers when your event starts and ends so they can make plans to attend.
                        </p>
                        <input 
                            type="date" 
                            value={this.state.start_date}
                            onChange={this.update('start_date')}
                            className="eventFormInput"
                        />
                        <label>Event Starts </label>
                        <br />

                        <label>Start Time </label>
                        <select 
                            value={this.state.start_time}
                            onChange={this.update('start_time')}
                            className="eventFormInput"
                        >
                            <option value="12:00 AM">12:00 AM</option>
                            <option value="11:30 PM">11:30 PM</option>
                        </select>
                        <input 
                            type="date" 
                            value={this.state.end_date}
                            onChange={this.update('end_date')}
                        />
                        <label>Event Ends </label>
                        <br />

                        <label>End Time </label>
                        <select 
                            value={this.state.end_time}
                            onChange={this.update('end_time')}
                            className="eventFormInput"
                        >
                            <option value="12:00 AM">12:00 AM</option>
                            <option value="11:30 PM">11:30 PM</option>
                        </select>
                    </div>
                    <br />


                        {/* include way for users to upload image */}
                    <div className='event-form-section'>
                        <h2>Description</h2>
                        <p>
                            Provide some additional details about your event.
                        </p>
                        <textarea 
                            value={this.state.description}
                            onChange={this.update('description')}
                            className="eventFormInput"
                        />
                    </div>
                    <button type="submit">{formType}</button>
                </form>
            </div>
        )
    }
}

export default withRouter(EventForm)
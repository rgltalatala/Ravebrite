import React from 'react';
import { withRouter } from 'react-router-dom';

import {genres, times} from '../../../util/event_form_util'


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
                        <div className="event-form-logo-wrapper">
                            <i className="fas fa-align-left fa-3x event-form-logo"></i>
                        </div>
                        
                        <div className="event-form-field">
                            <h2>
                                Basic Information
                            </h2>
                            <br />
                            <p>
                                Name your event and provide a genre.
                            </p>

                            <div className="form-input-group">
                                <input 
                                    type="text" 
                                    onChange={this.update('title')}
                                    value={this.state.title}
                                    className="event-form-input"
                                    />
                                <label className="event-form-label">Event Title</label>
                                {/* make default option: Add your own by having user type in own genre */}
                                <br />
                            </div>
                            
                            <select 
                                onChange={this.update('genre')}
                                className="event-form-input-genre"
                                placeholder="genre"
                            > 
                                <option >Genre</option>
                                {genres.map((genre, i) => (
                                    <option value={`${genre}`} key={i}>{genre}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <br />

                    <div className='event-form-section'>
                        <div className="event-form-logo-wrapper">
                            <i className="fas fa-globe-americas fa-3x event-form-logo"></i>
                        </div>

                        <div className="event-form-field">
                            <h2>Location</h2>
                            <p>
                                Let people in the area discover your event, and let attendees know where to show up. 
                            </p>
                            <div className="form-input-group">
                                <input 
                                    type="text" 
                                    value={this.state.location} 
                                    onChange={this.update('location')}
                                    className="event-form-input"
                                />
                                <label className="event-form-label">Venue Location</label>
                            </div>
                        </div>
                    </div>
                    <br />

                    <div className='event-form-section'>
                        <div className="event-form-logo-wrapper">
                            <i className="far fa-calendar-alt fa-3x event-form-logo"></i>
                        </div>

                        <div className="event-form-field">
                            <h2>Date and time</h2>
                            <p>
                                Tell event-goers when your event starts and ends so they can make plans to attend.
                            </p>
                            <div className="form-input-group">
                                <input 
                                    type="date" 
                                    value={this.state.start_date}
                                    onChange={this.update('start_date')}
                                    className="event-form-input"
                                />
                                <label className="event-form-label">Event Starts </label>
                            </div>
                            <br />

                            <div className="form-input-group">
                                <select 
                                    value={this.state.start_time}
                                    onChange={this.update('start_time')}
                                    className="event-form-input"
                                    >
                                    <option >Start Time</option>
                                    {times.map((time, i) => (
                                        <option value={`${time}`} key={i}>{time}</option>
                                    ))}
                                </select>
                                <label className="event-form-label">Start Time </label>
                            </div>
                            <br />
                        
                            <div className="form-input-group">
                                <input 
                                    type="date" 
                                    value={this.state.end_date}
                                    onChange={this.update('end_date')}
                                    className="event-form-input"
                                />
                                <label className="event-form-label">Event Ends </label>
                            </div>
                            <br />

                            <div className="form-input-group">
                                <select 
                                    value={this.state.end_time}
                                    onChange={this.update('end_time')}
                                    className="event-form-input"
                                    >
                                    <option>End Time</option>
                                    {times.map((time, i) => (
                                        <option value={`${time}`} key={i}>{time}</option>
                                    ))}
                                </select>
                                <label className="event-form-label">End Time</label>
                            </div>
                        </div>
                    </div>

                    <br />

                    <div className='event-form-section'>
                        <div className="event-form-logo-wrapper">
                            <i className="far fa-image fa-3x event-form-logo"></i>
                        </div>

                        <div className="event-form-field">
                            <h2>Event Image</h2>
                            <p>
                                Upload an image to promote your event.
                            </p>
                            <input
                                type="file"
                                name="event image"
                                accept="image/*"
                                className="event-form-input-image"
                            />
                        </div>
                    </div>
                    <br />

                    <div className='event-form-section'>
                        <div className="event-form-logo-wrapper">
                            <i className="far fa-file-alt fa-3x event-form-logo"></i>
                        </div>

                        <div className="event-form-field">
                            <h2>Description</h2>
                            <p>
                                Provide some additional details about your event.
                            </p>

                            <div className="form-input-group">
                                <textarea 
                                    value={this.state.description}
                                    onChange={this.update('description')}
                                    className="event-form-input"
                                />
                                <label className="event-form-label">Event Description</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-submit-button-wrapper">
                        <button type="submit" className="form-submit-button">{formType}</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(EventForm)
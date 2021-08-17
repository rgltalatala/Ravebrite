import React from 'react';
import { withRouter } from 'react-router-dom';

import {genres, times} from '../../../util/event_form_util'


class EventForm extends React.Component{
    constructor(props) {
        super(props);
        // this.newState = Object.assign({}, this.props.event)
        this.state = {
            event: this.props.event,
            photoFile: null,
            photoUrl: null
        }
        this.handleFile = this.handleFile.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

      //write function to assign host_id to session :id

    update(field) {
    return e => {
        let nextEvent = Object.assign({}, this.state.event);
        nextEvent[field] = e.currentTarget.value;
        this.setState({ event: nextEvent });
        };
    }


    handleSubmit(e) {
        e.preventDefault();
        // const formData = new FormData();
        // formData.append('event[title]', this.state.event.title);
        // formData.append('event[description]', this.state.event.description);
        // formData.append('event[location]', this.state.event.location);
        // formData.append('event[genre]', this.state.event.genre);
        // formData.append('event[start_date]', this.state.event.start_date);
        // formData.append('event[end_date]', this.state.event.end_date);
        // formData.append('event[start_time]', this.state.event.start_time);
        // formData.append('event[end_time]', this.state.event.end_time);
        // formData.append('event[host_id]', this.state.event.host_id);
        // if (this.state.photoFile) {
        //     formData.append('event[photo]', this.state.photoFile);
        // }
        // $.ajax({
        //     url: '/api/events',
        //     method: 'POST',
        //     data: formData,
        //     contentType: false,
        //     processData: false
        // });
        this.props.processForm(this.state.event)
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

    handleFile(e){
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result})
        }

        if (file) {
            fileReader.readAsDataURL(file);
        } else {
            this.setState({ photoFile: null, photoUrl: "" });
        }
    }

    componentWillUnmount() {
    }

    componentDidMount(){
    }

    render(){
        const {formType} = this.props
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl}/> : '';
        return (
            <div className="event-form-wrapper">
                <form onSubmit={this.handleSubmit} className='event-form'>
                    <div>
                        {this.renderErrors()}
                    </div>
                    <div className='event-form-section'>
                        <br />
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
                                    value={this.state.event.title}
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
                                value={this.state.event.genre}
                            > 
                                <option >Genre</option>
                                {genres.map((genre, i) => {
                                    if (i === 0){
                                        return ''
                                    } else {
                                        return <option value={`${genre}`} key={i}>{genre}</option>
                                    }
                                }
                                )}
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
                                    value={this.state.event.location} 
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
                                    value={this.state.event.start_date}
                                    onChange={this.update('start_date')}
                                    className="event-form-input"
                                />
                                <label className="event-form-label">Event Starts </label>
                            </div>
                            <br />

                            <div className="form-input-group">
                                <select 
                                    value={this.state.event.start_time}
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
                                    value={this.state.event.end_date}
                                    onChange={this.update('end_date')}
                                    className="event-form-input"
                                />
                                <label className="event-form-label">Event Ends </label>
                            </div>
                            <br />

                            <div className="form-input-group">
                                <select 
                                    value={this.state.event.end_time}
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
                                // onChange={this.handleFile}
                            />
                            {preview}
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
                                    value={this.state.event.description}
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
import React from 'react';

class EventForm extends React.Component{
    constructor(props) {
        super(props);
        // this.newState = Object.assign({}, this.props.event)
        this.state = this.props.event
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    update(field) {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
        this.setState(this.newState)        
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

    render(){
        const {formType} = this.props

        return (
            <>
                <h2>Basic Info</h2>
                <div>
                    <input type="text" />
                    <label htmlFor="">Event Title</label>
                    <br />
                    <select>
                        <option value="house">House</option>
                        <option value="dubstep">Dubstep</option>
                        <option value="big room">Big Room</option>
                        <option value="trance">Trance</option>
                        <option value="Trap">Trap</option>
                    </select>
                </div>
                <br />

                <h2>Location</h2>
                <div>
                    <p>
                        Let people in the area discover your event, and let attendees know where to show up. 
                    </p>
                    <input 
                        type="text" 
                        value={this.state.location} 
                        onChange={udpate('location')}
                    />
                </div>
                <br />

                <h2>Date and time</h2>
                <div>
                    <p>
                        Tell event-goers when your event starts and ends so they can make plans to attend.
                    </p>
                    <input type="date" value={this.state.start_date}/>
                    <label>Event Starts </label>
                    <br />

                    <label>Start Time </label>
                    <select value={this.state.start_time}>
                        <option value="12:00 AM">12:00 AM</option>
                        <option value="11:30 PM">11:30 PM</option>
                    </select>
                    <input type="date" value={this.state.end_date}/>
                    <label>Event Ends </label>
                    <br />

                    <label>End Time </label>
                    <select value={this.state.end_time}>
                        <option value="12:00 AM">12:00 AM</option>
                        <option value="11:30 PM">11:30 PM</option>
                    </select>
                    <br />

                    {/* include way for users to upload image */}
                    <h2>Description</h2>
                    <p>
                        Provide some additional details about your event.
                    </p>
                    <textarea value={this.state.description}/>
                </div>
            </>
        )
    }
}

export default EventForm
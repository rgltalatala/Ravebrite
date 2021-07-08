import React from 'react'
import {connect} from 'react-redux'
import { clearEventErrors, fetchEvent, updateEvent } from '../../../actions/event_actions'
import { EventForm } from './event_form'

class EditEventForm extends React.Component {
    componentDidMount(){
      this.props.fetchEvent(this.props.match.params.eventId)
    }
  
    render() {
      const { processForm, formType, event } = this.props;
  
      if (!report) return null;
      return (
        <EventForm
          processForm={processForm}
          formType={formType}
          event={event} />
      );
    }
  }

const mSTP = (state, ownProps) => ({
    event: state.entities.events[ownProps.match.params.eventId],
    formType: 'Edit Event',
    errors: state.errors.events
})

const mDTP = dispatch => ({
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
    processForm: (eventId) => dispatch(updateEvent(eventId)),
    clearEventErrors: () => dispatch(clearEventErrors)
})

export default connect(mSTP, mDTP)(EditEventForm)
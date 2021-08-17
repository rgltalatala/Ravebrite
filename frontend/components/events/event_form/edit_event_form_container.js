import React from 'react'
import {connect} from 'react-redux'
import { clearEventErrors, fetchEvent, updateEvent } from '../../../actions/event_actions'
import EventForm from './event_form'

class EditEventForm extends React.Component {
    componentDidMount(){
      this.props.fetchEvent(this.props.match.params.eventId)
    }
  
    render() {
      const { processForm, formType, event, errors, eventId } = this.props;
  
      if (!event) return null;
      return (
        <EventForm
          processForm={processForm}
          formType={formType}
          event={event}
          errors={errors}
          eventId={eventId}
          />
      );
    }
  }

const mSTP = (state, ownProps) => ({
    event: state.entities.events[ownProps.match.params.eventId],
    eventId: ownProps.match.params.eventId,
    photoFile: null,
    formType: 'Edit Event',
    errors: state.errors.events
})

const mDTP = dispatch => ({
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
    processForm: (formData, eventId) => dispatch(updateEvent(formData, eventId)),
    clearEventErrors: () => dispatch(clearEventErrors())
})

export default connect(mSTP, mDTP)(EditEventForm)
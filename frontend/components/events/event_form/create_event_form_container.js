import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createEvent } from "../../../actions/event_actions";
import EventForm from "./event_form";


const mSTP = state => ({
    event: {
        title: '',
        description: '',
        location: '',
        genre: '',
        start_date: '',
        end_date: '',
        start_time: '',
        end_time: '',
        host_id: state.session.id
    },
    formType: 'Add Event'
})

const mDTP = dispatch => ({
    processForm: (event) => dispatch(createEvent(event))
})

export default connect(mSTP, mDTP)(EventForm)
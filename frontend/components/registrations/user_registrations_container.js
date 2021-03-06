import { connect } from "react-redux";
import { fetchRegistrations, deleteRegistration } from "../../actions/registration_actions";
import UserRegistrations from "./user_registrations";

const mSTP = state => ({
    registrations: Object.values(state.entities.registrations),
    currentUserId: state.session.id
})

const mDTP = dispatch => ({
    fetchRegistrations: (userId) => dispatch(fetchRegistrations(userId)),
    deleteRegistration: (registrationId) => dispatch(deleteRegistration(registrationId))
})

export default connect(mSTP, mDTP)(UserRegistrations)
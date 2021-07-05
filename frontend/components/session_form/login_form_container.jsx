import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import { login } from "../../actions/session_actions";
import React from "react";

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Log in',
        navLink: <Link to="/signup">sign up instead</Link>,
    }
}

const mDTP = dispatch => ({
    processForm: (user) => dispatch(login(user))
})

export default connect(mSTP, mDTP)(SessionForm)
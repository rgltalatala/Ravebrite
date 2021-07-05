import {connect} from 'react-redux'
import { logout } from '../../actions/session_actions';

import Home from './home'

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Home)
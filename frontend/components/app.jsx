import React, {useState} from "react"
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
    Router
  } from 'react-router-dom';

import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import { AuthRoute } from "../util/route_util";
import NavBarContainer from './nav_bar/nav_bar_container'
import EventIndexContainer from "./events/event_index/event_index_container";
import EventShowContainer  from "./events/event_show/event_show_container";

function App () {
    // const [showUser, setShowUser] = useState(true)
    // const toggle = () => {
    //     setShowUser(state => !state)
    // }

    

    return (
        <div>
            <NavBarContainer />
            <Switch>
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
            </Switch>
            <Switch>
                <Route exact path='/' component={EventIndexContainer}></Route>
                <Route path="/events/:eventId" component={EventShowContainer} />
            </Switch>
        </div>
    )

    
}

export default App
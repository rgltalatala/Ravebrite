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

function App () {
    // const [showUser, setShowUser] = useState(true)
    // const toggle = () => {
    //     setShowUser(state => !state)
    // }

    let navBar;
    if (window.location.href.split("/").slice(-1)[0] !== "login" && window.location.href.split("/").slice(-1)[0] !== "signup"){
        navBar = <NavBarContainer />
    }

    return (
        <div>
            
            <Switch>
                <Route exact path="/" component={NavBarContainer} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
            </Switch>
            <Route exact path='/' component={EventIndexContainer}></Route>
        </div>
    )

    
}

export default App
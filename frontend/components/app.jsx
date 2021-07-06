import React, {useState} from "react"
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';

import HomeContainer from "./home/home_container";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";

const App = () => {

    return (
        <div>
            <Switch>
                <Route exact path="/"component={HomeContainer}/>
                <Route path="/login" component={LoginFormContainer} />
                <Route path="/signup" component={SignupFormContainer} />
            </Switch>

        </div>
    )

    
}

export default App
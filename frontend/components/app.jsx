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
            <header>
                <h1>
                    <Link to='/' className={"logo"} >
                        ravebrite
                    </Link>
                </h1>
                <HomeContainer />
            </header>
            <br/>
            <Route path="/"/>
            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupFormContainer} />
        </div>
    )

    
}

export default App
import React, {useState} from "react"
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
    Router,
    withRouter
    } from 'react-router-dom';

import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavBarContainer from './nav_bar/nav_bar_container'
import EventIndexContainer from "./events/event_index/event_index_container";
import EventShowContainer  from "./events/event_show/event_show_container";
import CreateEventFormContainer from './events/event_form/create_event_form_container'
import EditEventFormContainer from './events/event_form/edit_event_form_container'
import { Footer } from "./footer/footer";

function App () {

    return (
        <>
            <NavBarContainer />
            <div>
                <Switch>
                    <AuthRoute exact path="/login" component={LoginFormContainer} />
                    <AuthRoute exact path="/signup" component={SignupFormContainer} />
                </Switch>
                <Switch>
                    {/* <Route exact path="/" component={Footer} /> */}
                    <Route exact path='/' component={EventIndexContainer} />
                    <Route exact path="/users/:userId/events" />
                    <ProtectedRoute exact path="/events/create" component={CreateEventFormContainer} />
                    <Route exact path="/events/:eventId" component={EventShowContainer} />
                    <ProtectedRoute exact path="/events/:eventId/edit" component={EditEventFormContainer} />
                </Switch>
            </div>
        </>
    )
}

export default withRouter(App);
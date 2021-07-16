//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
import { fetchEvent, createEvent, fetchEvents, updateEvent, deleteEvent, fetchHostedEvents } from './actions/event_actions';
import { fetchRegistrations, createRegistration, deleteRegistration } from './actions/registration_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.fetchRegistrations = fetchRegistrations
  window.createRegistration = createRegistration
  window.deleteRegistration = deleteRegistration
  window.fetchHostedEvents = fetchHostedEvents
  window.dispatch = store.dispatch
  window.getState = store.getState

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});

import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app';
import { Footer } from './footer/footer';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <div className="app">
                <App />
            </div>
            {/* <Footer/> */}
        </HashRouter>
    </Provider>
    );

export default Root;
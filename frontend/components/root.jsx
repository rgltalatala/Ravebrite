import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app';

const Root = () => (
      <>
            <header>
                  <App />
            </header>
      </>
      // <Provider store={store}>
      //       <HashRouter>
      //       </HashRouter>
      // </Provider>
);

export default Root;
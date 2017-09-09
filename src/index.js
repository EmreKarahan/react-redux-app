import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import configureStore from './redux/configureStore';

import App from './container/App/App';

const history = createHistory();
const store = configureStore(undefined, history);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
  );
};

/* istanbul ignore if */
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./container/App/App', () => {
    // eslint-disable-next-line
    const NextApp = require('./container/App/App').default;
    render(NextApp);
  });
}

render(App);

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './modules';

const configureStore = prelodedState => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger());
  }

  const composed = [applyMiddleware(...middlewares)];

  if (process.env.NODE_ENV === 'development') {
    /* eslint-disable */
    composed.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    /* eslint-enable */
  }

  const store = createStore(rootReducer, prelodedState, compose(...composed));

  if (process.env.NODE_ENV === 'development') {
    module.hot.accept('./modules', () => {
      // eslint-disable-next-line
      const nextRootReducer = require('./modules').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;

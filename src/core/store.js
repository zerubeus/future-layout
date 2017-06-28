import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './reducers';

export default function configureStore() {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  /* eslint-enable */
  return store;
}
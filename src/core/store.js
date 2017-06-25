import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './reducers';

export default function configureStore() {
  
  const store = createStore(reducers);

  return store;
}
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Root from './views/root';
import { syncHistoryWithStore } from 'react-router-redux';
import { initLayout } from './core/layout'
import configureStore from './core/store';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const rootElement = document.getElementById('root');
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

function render(Root) {
  ReactDOM.render(
    <Root history={history} store={store} />,
    rootElement
  );
}
 
initLayout(store.dispatch)
  .then(() => render(Root))
  .catch(error => console.log(error)); // eslint-disable-line no-console
import 'react-hot-loader/patch';
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';

import './App.css';

import { initLayout } from './core/layout'

import configureStore from './core/store';
import Root from './views/root';


const rootElement = document.getElementById('root');
const store = configureStore();


function render(Root) {
  ReactDOM.render(
    <AppContainer>
      <Root
        history={browserHistory}
        store={store}
      />
    </AppContainer>,
    rootElement
  );
}

if (module.hot) {
  module.hot.accept('./views/root', () => {
    render(require('./views/root').default);
  });
}

initLayout(store.dispatch)
  .then(() => render(Root))
  .catch(error => console.log(error)); // eslint-disable-line no-console
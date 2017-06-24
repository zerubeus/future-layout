import 'react-hot-loader/patch';
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';

import './App.css';

import { initLiyout } from 'src/core/layout'

import configureStore from 'src/core/store';
import Root from 'src/views/root';


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

initLiyout(store.dispatch)
  .then(() => render(Root))
  .catch(error => console.log(error)); // eslint-disable-line no-console
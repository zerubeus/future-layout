import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import './App.css';

import { initLayout } from './core/layout'

import configureStore from './core/store';


const rootElement = document.getElementById('root');
const store = configureStore();


function render() {
  ReactDOM.render(null, rootElement);
}
 
initLayout(store.dispatch)
  .then(() => render())
  .catch(error => console.log(error)); // eslint-disable-line no-console
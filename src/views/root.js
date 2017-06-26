import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { getRoutes } from './routes';
import { PropTypes } from 'prop-types';

function Root({history, store}) {
  return (
    <Provider store={store}>
      <Router history={history} routes={getRoutes(store.getState)} />
    </Provider>
  );
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default Root;

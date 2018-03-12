import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Blog from './components/Blog';

import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    {() => <Blog /> }
  </Provider>,
  document.getElementById('root')
);

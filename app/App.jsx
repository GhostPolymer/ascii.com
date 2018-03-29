import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AsciiStore from './store/components/AsciiStore';
import '../style/index.sass';

ReactDOM.render(
  <Provider store={store}>
    <AsciiStore />
  </Provider>,
  document.getElementById('react-app-root'),
);
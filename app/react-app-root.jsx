import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';

import Landing from './components/Views/container';
import configureStore from './configureStore';

const App = ({store}) => (
  <Provider store={store}>
    <div><Landing /></div>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object
};

export default App;

ReactDOM.render(<App store={configureStore()} />, document.getElementById('react-app-root'));

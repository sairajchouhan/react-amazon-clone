import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { StateProvider } from './context/StateProvider';
import reducer, { initialState } from './context/reducer';
import store from './state/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Provider store={store}>
        <App />
      </Provider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store/store';
import Main from './components/Main/Main';
import {Provider} from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
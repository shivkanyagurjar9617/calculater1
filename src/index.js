import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import { rootReducer } from './rootReducer';
import { Provider } from 'react-redux';


let store = createStore(rootReducer,100)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);



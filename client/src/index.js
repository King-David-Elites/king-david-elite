import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import './App.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from './application/store';
import services from './ioc/services';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={configureStore(services)}>
      <App />
    </Provider>
  // </React.StrictMode>
);

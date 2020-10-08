import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import Client from 'shopify-buy';
import { Provider } from 'react-redux';
import store from './store';
import './styles/shopify.css';

const client = Client.buildClient({   
  storefrontAccessToken: 'your-access-token',    
  domain: 'your-shopify-url.myshopify.com'});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,  
  document.getElementById('root')
);


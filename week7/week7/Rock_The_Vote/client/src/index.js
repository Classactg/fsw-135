import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import UserProvider from './context/UserProvider'
import './css/styles.css'

ReactDOM.render(
  
    <UserProvider>
      <App />
    </UserProvider>,
  document.getElementById('root')
);




import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalProvider } from './context/GlobalState';

import './index.css';
import App from './App';

ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { ContextProvider } from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);

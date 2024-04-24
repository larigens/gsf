import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';
import { HelmetProvider } from 'react-helmet-async';
import * as React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);


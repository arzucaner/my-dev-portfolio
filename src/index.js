import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

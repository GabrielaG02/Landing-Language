import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AnalyticsListener from './components/Atoms/AnalyticsListener';
import App from './App';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AnalyticsListener /> 
    <App />
  </BrowserRouter>
);
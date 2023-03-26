import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LocationProvider from './contexts/locationContext';
import TempUnitProvider from './contexts/tempUnitContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LocationProvider>
      <TempUnitProvider>
        <App />
      </TempUnitProvider>
    </LocationProvider>
  </React.StrictMode>
);


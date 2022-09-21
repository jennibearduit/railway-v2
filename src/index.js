import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import TicketToRide from './TicketToRide';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <TicketToRide />
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import TicketToRide from './TicketToRide';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TicketToRide />
    </BrowserRouter>
  </React.StrictMode>
);
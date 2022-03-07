import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import TicketApp from './TicketApp';

ReactDOM.render(
  <BrowserRouter>
    <TicketApp />
  </BrowserRouter>,
  document.getElementById('root')
);
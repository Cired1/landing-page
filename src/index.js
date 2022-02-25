import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import { SidebarProvider } from "./context/sidebarContext";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <SidebarProvider>
      <Router>
        <App />
      </Router>
    </SidebarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

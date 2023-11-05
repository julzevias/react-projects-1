<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./context";
import "./index.css";
import App from "./App";
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
>>>>>>> a7607537821a58e3569a4e4d8eb029ae63fe405d
);

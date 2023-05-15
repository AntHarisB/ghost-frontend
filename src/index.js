import React from 'react';
import ReactDOM from 'react-dom/client';
import './Index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import './fonts/Gilroy-SemiBold.ttf';
import './fonts/Gilroy-Medium.ttf';
import './fonts/Gilroy-Regular.ttf';
import './fonts/Gilroy-Bold.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);


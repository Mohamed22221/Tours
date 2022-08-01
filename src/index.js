import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/glopal.scss"
import { Route, Routes ,BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Tours" element={<App />} />
    </Routes>
  </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


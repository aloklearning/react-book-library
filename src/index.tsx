import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import WelcomePage from './Components/Welcome';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import bookReducer from './Redux/reducers';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';

const bookStore = configureStore({ reducer: bookReducer });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={bookStore}>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<App />} />
          <Route path='/' element={<WelcomePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

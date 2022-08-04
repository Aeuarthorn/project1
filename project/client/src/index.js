import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/header/Login'
import Register from './components/header/Register'
import Paperbase from './components/page/Paperbase';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/paperbase" element={<Paperbase />} />
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
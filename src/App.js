import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Login from './pages/Login';
import AddNew from "./pages/AddNew";
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AddNew />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

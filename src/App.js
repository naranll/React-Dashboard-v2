import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Login from './pages/Login';
import AddNew from "./pages/AddNew";
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AddNew />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

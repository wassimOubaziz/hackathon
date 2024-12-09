import React from "react";
import ReactDOM from "react-dom/client";
import {Routes, Route } from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <ThemeProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes> 
    </ThemeProvider>
  );
}

export default App;
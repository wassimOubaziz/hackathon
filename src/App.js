import React from "react";
import ReactDOM from "react-dom/client";
import {Routes, Route } from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext';
import Login from './pages/Login';

function App() {
  return (
    <ThemeProvider>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
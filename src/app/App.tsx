import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ListItems } from './pages/ListItems/ListItems';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListItems />} />
        <Route path="*" element={<Navigate to="/" replace/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

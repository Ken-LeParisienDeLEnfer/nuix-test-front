import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Layout } from 'antd';
import { AppHeader } from './components/Header/Header';

function App() {
  return (
    <Layout>
      <AppHeader/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace/>} />
        </Routes>
      </BrowserRouter>
    </Layout>
    
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Layout } from 'antd';
import { AppHeader } from './components/Header/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <AppHeader/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace/>} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
    
  );
}

export default App;

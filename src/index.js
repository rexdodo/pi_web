// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import Layout from './components/Layout';
import Home from './pages/Home';
import PopularEDCs from './pages/PopularEDCs';
import Shopping from './pages/Shopping';

// 创建 MUI 主题，设置全局圆润字体
const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(',')
  }
});

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="popular-edcs" element={<PopularEDCs />} />
          <Route path="shopping" element={<Shopping />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);


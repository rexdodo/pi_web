// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigator from './Navigator';
import Toolbar from '@mui/material/Toolbar';

const Layout = () => (
  <>
    <Navigator />

    {/* 这个 Toolbar 只是用来占位，推开下面的内容 */}
    <Toolbar />

    <main style={{ padding: 0 }}>
      <Outlet />
    </main>
  </>
);

export default Layout;

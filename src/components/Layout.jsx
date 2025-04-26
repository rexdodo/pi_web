import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigator from './Navigator';

/**
 * Layout 组件：
 * - 始终渲染 Navigator
 * - Outlet 用于渲染当前路由对应的页面
 */
const Layout = () => (
  <>
    <Navigator />
    <main style={{ padding: '16px' }}>
      <Outlet />
    </main>
  </>
);

export default Layout;
// src/components/Navigator.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconButton from '@mui/material/IconButton';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/icons/icon_edcworld.jpg'

/**
 * Navigator component using MUI AppBar with three centered tabs
 * and an icon placeholder on the left.
 */
const Navigator = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const routes = ['/', '/popular-edcs', '/shopping'];
  const currentTab = routes.indexOf(pathname) !== -1 ? routes.indexOf(pathname) : 0;

  const handleChange = (event, newValue) => {
    navigate(routes[newValue]);
  };

  return (
    <AppBar
      position="fixed"                    // ← 改成 fixed
      color="white"
      elevation={0}
      sx={{
        zIndex: (theme) => theme.zIndex.appBar + 1,  // 确保在所有内容之上
        backgroundColor: '#fff',            // 保证真白背景
      }}
    >
      <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
        {/* 左侧图标位置 */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="logo"
          sx={{ mr: 2 }}
        >
          <img
            src={logo}
            alt="logo"
            style={{ width: 50, height: 50 }}
          />
        </IconButton>

        {/* 中间 Tabs */}
        <Tabs
          value={currentTab}
          onChange={handleChange}
          centered
          sx={{
            flexGrow: 1,
            '& .MuiTabs-indicator': {
              backgroundColor: '#333'
            }
          }}
          textColor="inherit"
        >
          <Tab label="Home" />
          <Tab label="Popular EDCs" />
          <Tab label="Shopping" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navigator;

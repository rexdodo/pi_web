// src/components/Navigator.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconButton from '@mui/material/IconButton';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/icons/icon_edcworld.jpg'
import { Box } from '@mui/material';

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
      position="fixed"
      color="white"
      elevation={0}
      sx={{
        zIndex: (theme) => theme.zIndex.appBar + 1,  // 确保在所有内容之上
        backgroundColor: '#000',            // 保证真白背景
        color: 'white'
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
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{
              // 响应式宽度：xs 设备上 32px，sm 上 40px，md+ 上 50px
              width: { xs: 32, sm: 40, md: 50 },
              // 高度自动按宽度等比例缩放
              height: 'auto',
            }}
          />
        </IconButton>

        {/* 中间 Tabs */}
        <Tabs
          value={currentTab}
          onChange={handleChange}
          variant="fullWidth"
          sx={{
            flexGrow: 1,
            '& .MuiTabs-indicator': {
              backgroundColor: '#333'
            }
          }}
          textColor="inherit"
        >
          <Tab 
            label="Home" 
            sx={{
              fontSize: {xs: '0.75rem', sm: '0.875rem', md: '1rem'},
              minWidth: {xs: 0, sm: 80, md: 100},
              py: {xs: 0.5, sm:1}
            }}
          />
          <Tab 
            label="Popular EDCs" 
            sx={{
              fontSize: {xs: '0.75rem', sm: '0.875rem', md: '1rem'}
            }}
          />
          <Tab 
            label="Shopping" 
            sx={{
              fontSize: {xs: '0.75rem', sm: '0.875rem', md: '1rem'}
            }}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navigator;

// src/components/Navigator.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
// import logo from '../assets/icons/';

/**
 * Navigator component using MUI AppBar with three centered tabs
 * and an icon logo placeholder on the left.
 */
const Navigator = () => {
  const router = useRouter();
  const routes = ['/', '/popular-edcs', '/shopping'];
  const currentTab = routes.indexOf(router.pathname) !== -1 ? routes.indexOf(router.pathname) : 0;

  const handleChange = (_, newValue) => {
    router.push(routes[newValue]);
  };

  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{
        zIndex: (theme) => theme.zIndex.appBar + 1,
        backgroundColor: '#000',
        color: '#fff'
      }}
    >
      <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
        <Link href="/" passHref>
          <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }}>
            <Box
              component="img"
              src="/assets/icons/icon_edcworld.jpg"
              alt="logo"
              sx={{ width: { xs: 32, sm: 40, md: 50 }, height: 'auto' }}
            />
          </IconButton>
        </Link>

        <Tabs
          value={currentTab}
          onChange={handleChange}
          variant="fullWidth"
          sx={{ flexGrow: 1, '& .MuiTabs-indicator': { backgroundColor: '#333' } }}
          textColor="inherit"
        >
          <Tab
            label="Home"
            sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }, minWidth: { xs: 0, sm: 80, md: 100 }, py: { xs: 0.5, sm: 1 } }}
          />
          <Tab
            label="Popular EDCs"
            sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}
          />
          <Tab
            label="Shopping"
            sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navigator;

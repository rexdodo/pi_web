// src/components/Hero.jsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import heroImage from '../assets/images/edcimgHomeintro2_extended.jpg';
import { grey } from '@mui/material/colors';

const Hero = () => (
  <Box
    component="section"
    sx={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {/* 半透明遮罩 */}
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      }}
    />

    {/* 文本 & 按钮容器 */}
    <Box
      sx={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'left',
        color: '#fff',
        // 响应式内边距，xs→2, sm→4, md→6 乘以 theme.spacing
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 2, sm: 3, md: 4 },
        // 限制最大宽度方便阅读
        maxWidth: { xs: '90%', sm: '80%', md: '60%' },
        width: '100%',
      }}
    >
      <Typography
        component="h1"
        variant="h2"
        sx={{
          mb: { xs: 2, sm: 3, md: 4 },
          // 响应式字体大小
          fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
          lineHeight: 1.2,
        }}
      >
        Welcome to
        <br />
        Fidget World - EDC
      </Typography>

      <Typography
        variant="h6"
        sx={{
          mb: { xs: 2, sm: 3, md: 4 },
          fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
          lineHeight: 1.5,
        }}
      >
        EDC is a popular trend that emerged in China,
        <br />
        also known as "Every Day Carry" culture,
        <br />
        however, as this culture developed, it gained a more distinct focus in China...
      </Typography>

      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: grey[700],
          color: '#fff',
          boxShadow: '0 3px 5px rgba(0,0,0,0.2)',
          borderRadius: 1,
          // 响应式按钮内边距和字体
          py: { xs: 1, sm: 1.25, md: 1.5 },
          px: { xs: 2, sm: 3, md: 4 },
          fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
          '&:hover': {
            backgroundColor: grey[900],
            backgroundImage: 'linear-gradient(135deg, #555 0%, #333 100%)',
            boxShadow: '0 5px 10px rgba(0,0,0,0.3)',
          },
          '&:active': {
            boxShadow: 'inset 0 3px 5px rgba(0,0,0,0.3)',
          },
        }}
        onClick={() => {
          document.getElementById('main').scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Learn More About EDC
      </Button>
    </Box>
  </Box>
);

export default Hero;

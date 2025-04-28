// src/components/Hero.jsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import heroImage from '../assets/images/edcimgHomeintro2_extended.jpg'; // 替换为你的横铺背景图路径
import { grey } from '@mui/material/colors';

/**
 * Hero 组件：全屏横铺背景图，文字与按钮覆盖
 */
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
      justifyContent: 'center'
    }}
  >
    {/* 半透明遮罩层 */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
      }}
    />

    {/* 文本内容 */}
    <Box
      sx={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'left',
        color: '#fff',
        px: 2
      }}
    >
      <Typography variant="h2" component="h1" sx={{ mb: 4 }}>
        Welcome to
        <br />Fidget World - EDC
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        EDC is a popular trend that emerged in China,
        <br />also known as "Every Day Carry" culture,
        <br />However, as this culture developed, it gained a more distinct focus in China...

      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          // 初始背景
          backgroundColor: grey[700],
          color: '#fff',
          // 可选：微微内凹的阴影，增强质感
          boxShadow: '0 3px 5px rgba(0,0,0,0.2)',
          // 圆角
          borderRadius: 1,
          // 鼠标悬停效果
          '&:hover': {
            backgroundColor: grey[900],
            backgroundImage: 'linear-gradient(135deg, #555 0%, #333 100%)',
            boxShadow: '0 5px 10px rgba(0,0,0,0.3)',
          },
          // 点击时的按压效果
          '&:active': {
            boxShadow: 'inset 0 3px 5px rgba(0,0,0,0.3)',
          }
        }}
        onClick={()=>{
          document.getElementById('main').scrollIntoView({behavior: 'smooth'})
        }}
      >
        Learn More About EDC
      </Button>
    </Box>
  </Box>
);

export default Hero;

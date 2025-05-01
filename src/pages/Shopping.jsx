// src/pages/Shopping.jsx
import {Container, Stack, Typography } from '@mui/material';
import React from 'react';
import BuildIcon from '@mui/icons-material/Build';
import Navigator from '../components/Navigator';

const Shopping = () => (
  <>
  <Navigator />
  <Container
    maxWidth={false}
    disableGutters
    sx={{
      backgroundColor: '#000',   // 黑底
      color: '#fff',             // 白字
      minHeight: '100vh',        // 视口高度
      width: '100%',             // 撑满宽度
      display: 'flex',           // 下面三行让内容在容器中居中
      justifyContent: 'center',
      alignItems: 'center',
      m: 0,
      p: 0,
    }}
  >
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{
        // 不要使用 background.paper（白色），保持透明或继承黑底
        // 如果想要一个半透明的背景，可以用下面这一行：
        // bgcolor: 'rgba(255,255,255,0.1)',
        bgcolor: 'transparent',
      }}
    >
      <BuildIcon
        sx={{
          fontSize: { xs: 48, sm: 64, md: 80 },  // 响应式图标大小
          color: 'inherit',                       // 继承白色
        }}
      />
      <Typography
        sx={{
          fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2.5rem' },  // 响应式文字
          fontWeight: 500,
        }}
      >
        Maintaining...
      </Typography>
    </Stack>
  </Container>
  </>
);

export default Shopping;

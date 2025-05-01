// src/pages/PopularEDCs.jsx
import React from 'react';
import Navigator from '../components/Navigator';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Blog from '../blog/Blog';

const PopularEDCs = () => (
  <>
    {/* 顶部导航 */}
    <Navigator />
    {/* 占位 Toolbar，用于推开下面的内容 */}
    <Toolbar />

    {/* 内容容器：maxWidth="lg"，响应式上下边距和间距 */}
    <Container
      maxWidth="lg"
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        my: { xs: 8, sm: 12, md: 16 },
        gap: { xs: 4, sm: 6, md: 8 },
      }}
    >
      {/* 页面标题 */}
      <Typography
        component="h2"
        sx={{
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
          fontWeight: 700,
          mb: { xs: 2, sm: 3, md: 4 },
        }}
      >
        Popular EDCs &amp; Fidget Toys
      </Typography>

      {/* 简短描述 */}
      <Typography
        sx={{
          fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
          lineHeight: 1.6,
          mb: { xs: 3, sm: 4, md: 6 },
        }}
      >
        Discover the most popular Everyday Carry (EDC) tools and Fidget toys
        from our Fidget World collection. Whether you’re looking for the
        latest Fidget Spinner, Slider, or multi-tool EDC, you’ll find detailed
        reviews, price comparisons, and shopping links below.
      </Typography>

      {/* 原有博客列表组件 */}
      <Blog />

      {/* 底部权威外链 */}
      <Box sx={{ mt: { xs: 4, sm: 6, md: 8 } }}>
        <Typography
          sx={{
            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
            lineHeight: 1.6,
          }}
        >
          For more curated lists of top EDC gear and fidget toys, see{' '}
          <a
            href="https://meta-edc.com/collections/fidget-toy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#4FC3F7' }}
          >
            MetaEDC
          </a>{' '}
          and{' '}
          <a
            href="https://geeone.com/?srsltid=AfmBOor3bZDD9j1W2NUhaZwytwM9kyCt35eiYqEEvIWFx3nvLAvAIluk"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#4FC3F7' }}
          >
            GeeOne.com
          </a>
          .
        </Typography>
      </Box>
    </Container>
  </>
);

export default PopularEDCs;

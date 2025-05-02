// src/pages/shopping.jsx
import Head from 'next/head';
import React from 'react';
import Navigator from '../components/Navigator';
import Shopping from '../components/pages/Shopping';

export default function ShoppingPage() {
  return (
    <>
      <Head>
        <title>Fidget World – Shopping</title>
        <meta name="description" content="EDC gear shopping page" />
      </Head>
      <Navigator />
      <Shopping />
    </>
  );
}

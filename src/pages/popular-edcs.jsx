// src/pages/popular-edcs.jsx
import Head from 'next/head';
import Navigator from '../components/Navigator';
import PopularEDCs from '../components/pages/PopularEDCs';

export default function PopularEDCsPage() {
  return (
    <>
      <Head>
        <title>Fidget World – Popular EDCs</title>
        <meta name="description" content="Popular EDC items" />
      </Head>
      <Navigator />
      <PopularEDCs />
    </>
  );
}

import { useState } from 'react';
import { Stack } from '@mui/material';

import Cta from '../components/Cta';
import Details from '../components/Details';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import ShortenUrl from '../components/ShortenUrl';

const Home = () => {
  const [link, setLink] = useState('');
  const [shortLink, setshortLink] = useState('');
  const [urls, setUrls] = useState([]);

  return (
    <Stack width="100%" sx={{ overflowX: 'hidden' }}>
      <Navbar />
      <HeroSection />
      <ShortenUrl
        link={link}
        setLink={setLink}
        setshortLink={setshortLink}
        setUrls={setUrls}
      />
      <Details link={link} shortLink={shortLink} urls={urls} />
      <Cta />
      <Footer />
    </Stack>
  );
};

export default Home;

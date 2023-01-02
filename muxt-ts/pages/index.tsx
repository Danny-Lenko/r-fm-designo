import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Container, Box } from "@mui/material";
import MobileContainer from '../components/common/MobileContainer/MobileContainer';
import Hero from '../components/domains/home/homeHero';
import HomeDesigns from '../components/domains/home/homeDesigns';
import HomeTraits from '../components/domains/home/homeTraits';
import BottomRectangle from '../components/common/bottomRectangle';
import GreyDrop from '../components/common/GreyDrop/GreyDrop';
import { DROPHOMETOP, DROPHOMEBOTTOM } from '../lib/utils/constants';

const Home: NextPage = () => {

  return (
    <Box component="main" sx={{ position: 'relative' }}>
      <MobileContainer>
        <Hero />
      </MobileContainer>

      <Container maxWidth='lg'>
        <HomeDesigns />
        <HomeTraits />
        <BottomRectangle />

        <GreyDrop typeTop={true} margTop={DROPHOMETOP} />
        {/* <GreyDrop typeTop={false} margTop={DROPHOMEBOTTOM} /> */}
      </Container>
    </Box>
  )
}

export default Home

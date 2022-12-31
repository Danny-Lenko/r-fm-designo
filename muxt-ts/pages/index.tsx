import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Container, Box } from "@mui/material";
import { useEffect, useState } from "react";
import Hero from '../components/domains/home/homeHero';
import GreyDrop from '../components/common/GreyDrop/GreyDrop';
import HomeDesigns from '../components/domains/home/homeDesigns';
import HomeTraits from '../components/domains/home/homeTraits';
import BottomRectangle from '../components/common/Rectangle/BottomRectangle';
import MobileContainer from '../components/common/MobileContainer/MobileContainer';
import { DROPHOMETOP, DROPHOMEBOTTOM } from '../lib/utils/constants';

const Home: NextPage = () => {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)

    function handleResize() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Box component="main" sx={{ position: 'relative' }}>
      <MobileContainer>
        <Hero windowWidth={windowWidth} />
      </MobileContainer>

      <Container maxWidth='lg'>
        <HomeDesigns />

        <HomeTraits />

        {/* <BottomRectangle />

        <GreyDrop typeTop={true} margTop={DROPHOMETOP} />
        <GreyDrop typeTop={false} margTop={DROPHOMEBOTTOM} /> */}
      </Container>
    </Box>
  )
}

export default Home

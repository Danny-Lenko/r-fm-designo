import { Container, Box } from "@mui/material";
import { useEffect, useState } from "react";
import Hero from "../../../components/domains/home/Hero/Hero";
import GreyDrop from "../../../components/common/GreyDrop/GreyDrop";
import HomeDesigns from "../../../components/domains/home/HomeDesigns/HomeDesigns";
import HomeTraits from "../../../components/domains/home/HomeTraits/HomeTraits";
import BottomRectangle from "../../../components/Rectangle/BottomRectangle";
import { DROPHOMETOP, DROPHOMEBOTTOM } from "../../../lib/utils/constants";
import MobileContainer from "../../../components/common/MobileContainer/MobileContainer";

const Home = () => {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth)

   useEffect(() => {
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

            <BottomRectangle />

            <GreyDrop typeTop={true} margTop={DROPHOMETOP} />
            <GreyDrop typeTop={false} margTop={DROPHOMEBOTTOM} />
         </Container>
      </Box>
   );
}

export default Home;
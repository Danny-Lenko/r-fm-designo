import { Container, Box } from "@mui/material";
import { useEffect, useState } from "react";
import Hero from "./Hero/Hero";
import GreyDrop from "../../library/common/components/GreyDrop/GreyDrop";
import HomeDesigns from "./HomeDesigns/HomeDesigns";
import HomeTraits from "./HomeTraits/HomeTraits";
import BottomRectangle from "../../library/common/components/Rectangle/BottomRectangle";
import { DROPHOMETOP, DROPHOMEBOTTOM } from "../../library/common/constants/constants";
import MobileContainer from "../../library/common/components/MobileContainer/MobileContainer";

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
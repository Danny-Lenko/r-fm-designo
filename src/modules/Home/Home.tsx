import { Container, Box } from "@mui/material";
import { useEffect, useState } from "react";
import Hero from "./Hero/Hero";
import GreyDrop from "./GreyDrop";
import HomeDesigns from "./HomeDesigns/HomeDesigns";
import HomeTraits from "./HomeTraits/HomeTraits";
import CommonRectangle from "../../library/common/components/Rectangle/CommonRectangle";

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
         <Container maxWidth='lg'>
            <Hero windowWidth={windowWidth} />

            <HomeDesigns />

            <HomeTraits />

            <CommonRectangle top={false} />

            {
               windowWidth >= 900 && <>
                  <GreyDrop dropClass="grey-drop-top" />
                  <GreyDrop dropClass="grey-drop-bottom" />
               </>
            }
         </Container>
      </Box>
   );
}

export default Home;
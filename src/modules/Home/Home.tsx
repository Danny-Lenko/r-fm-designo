import { Typography, Container, Box } from "@mui/material";
import { useEffect, useState } from "react";
import Hero from "./Hero/Hero";
import GreyDrop from "./GreyDrop";
import HomeDesigns from "./HomeDesigns/HomeDesigns";

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
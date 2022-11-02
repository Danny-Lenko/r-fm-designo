import { Typography, Container, Box } from "@mui/material";
import { useEffect, useState } from "react";
import Hero from "./Hero/Hero";
import GreyDrops from "./GreyDrops";

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
      <Box component="main" sx={{position: 'relative'}}>

         <Container maxWidth='lg'>
            <Hero windowWidth={windowWidth} />
            
            <GreyDrops />
         </Container>

      </Box>
   );
}

export default Home;
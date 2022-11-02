import { Typography, Container, Box } from "@mui/material";
import { useEffect, useState } from "react";
import Hero from "./Hero/Hero";

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
      <Container maxWidth='lg'>
         <Hero windowWidth={windowWidth} />

         <Typography variant='h1'>Hello h1</Typography>
         <Typography variant='h2'>Hello h2</Typography>
         <Typography variant='h3' textTransform={'uppercase'}>Hello h3</Typography>
         <Typography>Hello body1</Typography>
      </Container>
   );
}

export default Home;
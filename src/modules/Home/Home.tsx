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
         <Box className="grey-img1"></Box> {/* styles in indes.css */}
         

      </Container>
   );
}

export default Home;
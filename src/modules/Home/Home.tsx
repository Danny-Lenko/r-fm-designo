import { Container, Box } from "@mui/material";
import { useEffect, useState } from "react";
import Hero from "./Hero/Hero";
import GreyDrop from "../../library/common/components/GreyDrop/GreyDrop";
import HomeDesigns from "./HomeDesigns/HomeDesigns";
import HomeTraits from "./HomeTraits/HomeTraits";
import BottomRectangle from "../../library/common/components/Rectangle/BottomRectangle";

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

            <BottomRectangle />

            <GreyDrop top={true} />
            <GreyDrop top={false} />
         </Container>
      </Box>
   );
}

export default Home;
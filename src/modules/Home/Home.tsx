import { Typography, Container, Box } from "@mui/material";
import { useEffect, useState } from "react";
import Hero from "./Hero/Hero";
import GreyDrop from "./GreyDrop";
import { useTheme } from "@mui/material/styles";

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

            <Box className="designs"> {/* styles in index.css */}
               <Box className="designs__item designs__item_web">
                  <Typography variant="h2" textTransform='uppercase' color='common.white'>Web Design</Typography>
                  <Typography>View Projects</Typography>
                  <Box className="designs__img designs__img_web">
                  </Box>
               </Box>

               <Box className="designs__item designs__item_app">
                  <Box className="designs__img designs__img_app"></Box>
               </Box>

               <Box className="designs__item designs__item_graphics">
                  <Box className="designs__img designs__img_graphics"></Box>
               </Box>
            </Box>

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
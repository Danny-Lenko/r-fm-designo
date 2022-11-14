import Container from '@mui/material/Container'
import AboutHero from './AboutHero/AboutHero';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const About = () => {
   const theme = useTheme()


   return (  

      <Container disableGutters={useMediaQuery(theme.breakpoints.only('xs'))} maxWidth='lg'>

         <AboutHero />

      </Container>

   );
}
 
export default About;
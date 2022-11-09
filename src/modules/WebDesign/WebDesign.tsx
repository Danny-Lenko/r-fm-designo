import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import TopRectangle from '../../library/common/components/Rectangle/TopRectangle';
import ImageExpress from '../../resources/assets/web-design/desktop/image-express.jpg'
import WebDesignProject from './WebDesignProject';

const WebDesign = () => {

   const topRectangleContent = {
      title: 'Web Design',
      desc: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
   }

   const projects = [
      {
         title: 'Express',
         desc: 'A multi-carrier shipping website for ecommerce businesses',
         img: ImageExpress
      }
   ]


   return (
      <Box component="main" sx={{ position: 'relative' }}>
         <Container>
            <TopRectangle content={topRectangleContent} />

            <Grid container spacing={2}>
               {
                  projects.map(project => <WebDesignProject project={ project } />)
               }
               {/* <Grid xs={8}>
               </Grid>
               <Grid xs={4}>
               </Grid>
               <Grid xs={4}>
               </Grid>
               <Grid xs={8}>
               </Grid> */}
            </Grid>

            <h1>Hello WebDesign</h1>
            <h2>Hello again</h2>
         </Container>
      </Box>
   );
}

export default WebDesign;
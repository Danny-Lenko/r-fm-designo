import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import TopRectangle from '../../library/common/components/Rectangle/TopRectangle';
import ImageExpress from '../../resources/assets/web-design/desktop/image-express.jpg'
import ImageTransfer from '../../resources/assets/web-design/desktop/image-transfer.jpg'
import ImagePhoton from '../../resources/assets/web-design/desktop/image-photon.jpg'
import ImageBuilder from '../../resources/assets/web-design/desktop/image-builder.jpg'
import ImageBlogr from '../../resources/assets/web-design/desktop/image-blogr.jpg'
import ImageCamp from '../../resources/assets/web-design/desktop/image-camp.jpg'
import WebDesignProject from './WebDesignProject';
import { SECTIONMARGINBOTTOM } from '../../library/common/constants/contstants';

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
      },
      {
         title: 'Transfer',
         desc: 'Site for low-cost money transfers and sending money within seconds',
         img: ImageTransfer
      },
      {
         title: 'Photon',
         desc: 'A state-of-the-art music player with high-resolution audio and DSP effects',
         img: ImagePhoton
      },
      {
         title: 'Builder',
         desc: 'Connects users with local contractors based on their location',
         img: ImageBuilder
      },
      {
         title: 'Blogr',
         desc: 'Blogr is a platform for creating an online blog or publication',
         img: ImageBlogr
      },
      {
         title: 'Camp',
         desc: 'Get expert training in coding, data, design, and digital marketing',
         img: ImageCamp
      }
   ]


   return (
      <Box component="main" sx={{ position: 'relative' }}>
         <Container>
            <TopRectangle content={topRectangleContent} />

            <Grid container spacing={4} mb={ SECTIONMARGINBOTTOM / 8 }>
               {
                  projects.map(project => <WebDesignProject key={project.title} project={ project } />)
               }
            </Grid>

            <h1>Hello WebDesign</h1>
            <h2>Hello again</h2>
         </Container>
      </Box>
   );
}

export default WebDesign;
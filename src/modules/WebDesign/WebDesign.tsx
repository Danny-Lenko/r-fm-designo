import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import TopRectangle from '../../../components/Rectangle/TopRectangle';
import { SECTIONMARGINBOTTOM, DROPDESIGNTYPES } from '../../../lib/utils/constants';
import DesignLink from '../../../components/common/DesignLink/DesignLink';
import { appDesignProps, graphicDesignProps } from '../../../lib/utils/constants';
import BottomRectangle from '../../../components/Rectangle/BottomRectangle';
import ProjectCard from '../../../components/common/ProjectCard/ProjectCard';
import { projects } from './webProjects';
import CirclesImg from '../../resources/assets/web-design/desktop/bg-pattern-intro-web.svg'
import GreyDrop from '../../../components/common/GreyDrop/GreyDrop';

const WebDesign = () => {
   const topRectangleContent = {
      title: 'Web Design',
      desc: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
      circles: CirclesImg
   }

   const appDesignStyles = {
      mb: 160 / 8,
      minHeight: { xs: 525, sm: 424, md: 308 },
      display: 'grid',
      gridTemplateColumns: { xs: '1f', md: '1fr 1fr' },
      gridTemplateRows: { xs: '1fr 1fr', md: '1fr' },
      gridTemplateAreas: {
         xs: `
            "app"
            "graphic"
         `,
         md: `
            "app graphic"
         `
      },
      gap: '25px',
   }

   return (
      <Box component="main" sx={{ position: 'relative' }}>
         <TopRectangle content={topRectangleContent} />

         <Container>

            <GreyDrop typeTop={true} margTop={DROPDESIGNTYPES} />

            <Grid container spacing={4} mb={SECTIONMARGINBOTTOM / 8}>
               {
                  projects.map(project => <ProjectCard key={project.title} project={project} />)
               }
            </Grid>

            <Box sx={appDesignStyles} >
               <DesignLink content={appDesignProps} />
               <DesignLink content={graphicDesignProps} />
            </Box>

            <BottomRectangle />
         </Container>
      </Box>
   );
}

export default WebDesign;
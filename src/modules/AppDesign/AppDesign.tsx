import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import TopRectangle from '../../library/common/components/Rectangle/TopRectangle';
import { SECTIONMARGINBOTTOM, DROPDESIGNTYPES } from '../../library/common/constants/constants';
import DesignLink from '../../library/common/components/DesignLink/DesignLink';
import { webDesignProps, graphicDesignProps } from '../../library/common/constants/constants';
import BottomRectangle from '../../library/common/components/Rectangle/BottomRectangle';
import ProjectCard from '../../library/common/components/ProjectCard/ProjectCard';
import { projects } from './appProjects';
import CirclesImg from '../../resources/assets/app-design/desktop/bg-pattern-intro-app.svg'
import GreyDrop from '../../library/common/components/GreyDrop/GreyDrop';

const AppDesign = () => {
   const topRectangleContent = {
      title: 'App Design',
      desc: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
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
            "web"
            "graphic"
         `,
         md: `
            "web graphic"
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
               <DesignLink content={webDesignProps} />
               <DesignLink content={graphicDesignProps} />
            </Box>

            <BottomRectangle />
         </Container>
      </Box>
   );
}

export default AppDesign;
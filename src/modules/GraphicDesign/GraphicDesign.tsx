import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import TopRectangle from '../../library/common/components/Rectangle/TopRectangle';
import { SECTIONMARGINBOTTOM, DROPDESIGNTYPES } from '../../library/common/constants/constants';
import DesignLink from '../../library/common/components/DesignLink/DesignLink';
import { webDesignProps, appDesignProps } from '../../library/common/constants/constants';
import BottomRectangle from '../../library/common/components/Rectangle/BottomRectangle';
import ProjectCard from '../../library/common/components/ProjectCard/ProjectCard';
import { projects } from './graphicProjects';
import CirclesImg from '../../resources/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg'
import GreyDrop from '../../library/common/components/GreyDrop/GreyDrop';

const GraphicDesign = () => {
   const topRectangleContent = {
      title: 'Graphic Design',
      desc: 'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
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
            "app"
         `,
         md: `
            "web app"
         `
      },
      gap: '25px',
   }

   return (
      <Box component="main" sx={{ position: 'relative' }}>
         <Container>
            <TopRectangle content={topRectangleContent} />

            <GreyDrop typeTop={true} margTop={DROPDESIGNTYPES} />

            <Grid container spacing={4} mb={SECTIONMARGINBOTTOM / 8}>
               {
                  projects.map(project => <ProjectCard key={project.title} project={project} />)
               }
            </Grid>

            <Box sx={appDesignStyles} >
               <DesignLink content={webDesignProps} />
               <DesignLink content={appDesignProps} />
            </Box>

            <BottomRectangle />
         </Container>
      </Box>
   );
}

export default GraphicDesign;
import { SECTIONMARGINBOTTOM, DROPDESIGNTYPES, webDesignProps, appDesignProps } from '../../lib/utils/constants';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import TopRectangle from '../../components/common/topRectangle';
import DesignLink from '../../components/common/designLink';
import BottomRectangle from '../../components/common/bottomRectangle';
import ProjectCard from '../../components/common/projectCard';
import GreyDrop from '../../components/common/greyDrop';
import { projects } from './graphicProjects';
import { styles } from './styles'

const topRectangleContent = {
   title: 'Graphic Design',
   desc: 'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
   circles: '/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg'
}

const GraphicDesign = () => {
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
            <Box sx={styles} >
               <DesignLink content={webDesignProps} />
               <DesignLink content={appDesignProps} />
            </Box>
            <BottomRectangle />
         </Container>
      </Box>
   );
}

export default GraphicDesign;
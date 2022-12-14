import { SECTIONMARGINBOTTOM, DROPDESIGNTYPES, webDesignProps, graphicDesignProps } from '../../lib/utils/constants'; 
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import TopRectangle from '../../components/common/topRectangle';
import DesignLink from '../../components/common/designLink';
import BottomRectangle from '../../components/common/bottomRectangle';
import ProjectCard from '../../components/common/projectCard';
import GreyDrop from '../../components/common/greyDrop';
import { projects } from '../../lib/local-data/app-design-projects';
import { styles } from '../../styles/pages-styles/app-design-styles'

const topRectangleContent = {
   title: 'App Design',
   desc: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
   circles: '/assets/app-design/desktop/bg-pattern-intro-app.svg'
}

const AppDesign = () => {
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
               <DesignLink content={graphicDesignProps} />
            </Box>
            <BottomRectangle />
         </Container>
      </Box>
   );
}

export default AppDesign;
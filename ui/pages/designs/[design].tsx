import { createClient } from 'contentful'
import { appDesignProps, graphicDesignProps } from '../../lib/utils/constants';
import { projects } from '../../lib/local-data/web-design-projects';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import TopRectangle from '../../components/common/topRectangle';
import DesignLink from '../../components/common/designLink';
import BottomRectangle from '../../components/common/bottomRectangle';
import ProjectCard from '../../components/common/projectCard';
import GreyDrop from '../../components/common/greyDrop';
import { SECTIONMARGINBOTTOM, DROPDESIGNTYPES } from '../../lib/utils/constants';
import { convertToCamelcase } from '../../lib/utils/utils';
import { IProjectItem, IDesignItem, IDesignItemFields, IProjectItemFields } from '../../lib/interfaces/interfaces';
import { styles } from '../../styles/pages-styles/web-design-styles';

const topRectangleContent = {
   title: 'Web Design',
   desc: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
   circles: '/assets/web-design/desktop/bg-pattern-intro-web.svg'
}

const Design = ({
   projects
}: {
   projects: IProjectItem[]
}) => {

   return (
      <Box component="main" sx={{ position: 'relative' }}>
         <TopRectangle content={topRectangleContent} />
         <Container>
            <GreyDrop typeTop={true} margTop={DROPDESIGNTYPES} />
            <Grid container spacing={4} mb={SECTIONMARGINBOTTOM / 8}>
               {
                  projects.map(project => <ProjectCard
                     key={project.sys.id}
                     project={project.fields}
                  />)
               }
            </Grid>
            <Box sx={styles} >
               {/* <DesignLink content={appDesignProps} />
               <DesignLink content={graphicDesignProps} /> */}
            </Box>
            <BottomRectangle />
         </Container>
      </Box>
   );
}

export default Design;

const client = createClient({
   space: process.env.CONTENTFUL_SPACE_ID!,
   accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
})

export const getStaticPaths = async () => {
   const res = await client.getEntries<IDesignItemFields>({
      content_type: "designCollection"
   })

   const paths = res.items.map(item => {
      return {
         params: { design: item.fields.slug }
      }
   })

   return {
      paths,
      fallback: false
   }
}

export const getStaticProps = async ({ params }: any) => {
   const camelCased = convertToCamelcase(params.design)

   const { items } = await client.getEntries({
      content_type: camelCased,
   })

   return {
      props: { projects: items }
   }
}

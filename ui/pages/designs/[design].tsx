import { createClient } from 'contentful'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import TopRectangle from '../../components/common/topRectangle';
import DesignLink from '../../components/common/designLink';
import BottomRectangle from '../../components/common/bottomRectangle';
import ProjectCard from '../../components/common/projectCard';
import BcgBulb from '../../components/common/bcgBulb';
import { convertToCamelcase } from '../../lib/utils/utils';
import { IProjectItem, IDesignItem, IDesignItemFields } from '../../lib/interfaces/interfaces';
import { styles } from '../../styles/pagesStyles/designStyles';

const Design = ({
   projects,
   currentDesign,
   otherDesigns
}: {
   projects: IProjectItem[]
   currentDesign: IDesignItem
   otherDesigns: IDesignItem[]
}) => {
   const { id, title, description } = currentDesign.fields

   return (
      <Box sx={styles} component="main" >
         <TopRectangle
            id={id}
            title={title}
            description={description}
         />
         <Container>
            <Grid container spacing={4} className='projects-grid' >
               {
                  projects.map(project => <ProjectCard
                     key={project.sys.id}
                     project={project.fields}
                  />)
               }
            </Grid>
            <Box className='designs-box' >
               {
                  otherDesigns.map(design => <DesignLink
                     key={design.sys.id}
                     content={design.fields}
                  />)
               }
            </Box>
            <BottomRectangle />
         </Container>
         <BcgBulb className='bulb' />
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

   const { items: projects } = await client.getEntries({
      content_type: camelCased,
   })

   const { items } = await client.getEntries<IDesignItemFields>({
      content_type: 'designCollection'
   })

   const currentDesign = items.find(item => item.fields.slug === params.design)
   const otherDesigns = items.filter(item => item.fields.slug !== params.design)

   return {
      props: {
         projects,
         currentDesign,
         otherDesigns
      }
   }
}

import { createClient } from 'contentful'
import { useRouter } from "next/router";
import { convertToCamelcase } from '../../../lib/utils/utils';
import { fetchAllProjectNames } from '../../../lib/utils/utils';
import { IProjectItemFields, IDesignItemFields, IProjectItem } from '../../../lib/interfaces/interfaces';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import BottomRectangle from '../../../components/common/bottomRectangle';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import ProjectSkeleton from '../../../components/pageComponents/project/projectSkeleton';

import { styles } from '../../../styles/pagesStyles/projectStyles';

const Project = ({
   project
}: {
   project: IProjectItem
}) => {
   if ( !project ) return <ProjectSkeleton />

   const { title, text } = project.fields

   console.log(project)

   return (
      <Box sx={styles} component="main" >
         <Container>

            <h1>{title}</h1>

            {
               text && <div>{documentToReactComponents(text!)}</div>
            }



            <BottomRectangle />
         </Container>
      </Box>
   );
}

export default Project;

const client = createClient({
   space: process.env.CONTENTFUL_SPACE_ID!,
   accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
})

export const getStaticPaths = async () => {
   const res = await fetchAllProjectNames()

   const paths = res.map(item => {
      return {
         params: {
            design: item.fields.category,
            project: item.fields.slug
         }
      }
   })

   return {
      paths,
      fallback: true
   }
}

export const getStaticProps = async ({
   params
}: {
   params: {
      design: string
      project: string
   }
}) => {

   const camelCased = convertToCamelcase(params.design)

   const { items } = await client.getEntries<IProjectItemFields>({
      content_type: camelCased,
      'fields.slug': params.project
   })

   if (!items.length) {
      return {
         redirect: {
            destination: '/',
            permanent: false,
         },
      }
   }

   return {
      props: { project: items[0] },
      revalidate: 100
   }
}

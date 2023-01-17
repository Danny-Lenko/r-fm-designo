import { createClient } from 'contentful'
import { useRouter } from "next/router";
import { convertToCamelcase } from '../../../lib/utils/utils';
import { fetchAllProjectNames } from '../../../lib/utils/utils';
import { IProjectItemFields, IDesignItemFields } from '../../../lib/interfaces/interfaces';

const Project = ({project}:any) => {
   const router = useRouter()

   console.log(project)

   return (
      <div>Hello project</div>
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
      fallback: false
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

   return {
      props: { project: items[0] }
   }
}

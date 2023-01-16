import { createClient } from 'contentful'
import { useRouter } from "next/router";
import { convertToCamelcase } from '../../../lib/utils/utils';
import { fetchAllProjectNames } from '../../../lib/utils/utils';
import { IProjectItemFields, IDesignItemFields } from '../../../lib/interfaces/interfaces';



const Project = () => {
   const router = useRouter()

   // console.log(router.asPath)
   // console.log(router.query.design)
   // console.log(router)

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

   // console.log(res.flat())

   // const res = await client.getEntries<any>({
   //    content_type: "designCollection"
   // })

   // const designs = res.items
   // const projectsArr = []


   // res.items.forEach(async item => {
   //    const response = await client.getEntries<any>({
   //       content_type: convertToCamelcase(item.fields.slug)
   //    })
   //    // console.log(response)
   //    projects.push(response)
   //    console.log(projects)
   // })


   const paths = res.flat().map(item => {
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

   console.log(params.project)

   // const camelCased = convertToCamelcase(params.design)

   // const { items: projects } = await client.getEntries<IProjectItemFields>({
   //    content_type: camelCased,
   // })

   // projects.sort((a,b) => a.fields.id - b.fields.id)

   // const { items } = await client.getEntries<IDesignItemFields>({
   //    content_type: 'designCollection'
   // })

   // items.sort((a,b) => a.fields.id - b.fields.id)

   // const currentDesign = items.find(item => item.fields.slug === params.design)
   // const otherDesigns = items.filter(item => item.fields.slug !== params.design)

   return {
      props: {
         // projects,
         // currentDesign,
         // otherDesigns
      }
   }
}

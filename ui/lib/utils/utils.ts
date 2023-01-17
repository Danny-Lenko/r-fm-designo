import { Theme } from "@mui/system"
import { createClient } from 'contentful'
import { IDesignItemFields, IProjectItemFields } from "../interfaces/interfaces"

export function calcSpacing(theme: Theme, pixels: number) {
   const themeSpacing = +theme.spacing(1).replace(/px/, '')
   return pixels / themeSpacing
}

export function convertToCamelcase(str: string) {
   return str.replace(/-([a-z])/g, function (g: string) { return g[1].toUpperCase(); });
}

export async function fetchAllProjectNames() {
   const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
   })

   const res = await client.getEntries<IDesignItemFields>({
      content_type: "designCollection"
   })

   const designs = res.items

   const promises = designs.map(async design => {
      const response = await client.getEntries<IProjectItemFields>({
         content_type: convertToCamelcase(design.fields.slug)
      })
      return response.items
   })

   const projects = await Promise.all(promises)

   return projects.flat()
}


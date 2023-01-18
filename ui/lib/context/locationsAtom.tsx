import { atom } from "jotai";
import { loadable } from "jotai/utils"
import { createClient } from "contentful";
import { IDesignItemFields } from "../interfaces/interfaces";

const client = createClient({
   space: process.env.CONTENTFUL_SPACE_ID!,
   accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
})

export const asyncAtom = atom(async () => {
   const res = await client.getEntries<IDesignItemFields>({
      content_type: "locations"
   })

   res.items.sort((a, b) => a.fields.id - b.fields.id)

   return res.items

})
export const loadableAtom = loadable(asyncAtom)

// export async function getLocations() {
// }


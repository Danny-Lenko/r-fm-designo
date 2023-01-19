import { atom } from "jotai";
import { loadable } from "jotai/utils"
import { IDesignItemFields } from "../interfaces/interfaces";

const host = process.env.NEXT_PUBLIC_HOST!

export const asyncAtom = atom(async () => {
   const res = await fetch( host + 'api/contentful/locationsApi' )
   const data = await res.json()

   return data
})
export const locationsAtom = loadable(asyncAtom)


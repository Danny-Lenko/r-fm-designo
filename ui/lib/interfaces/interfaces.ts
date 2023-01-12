import Contentful from 'contentful'

export interface IAboutContentItem {
   flexDirMd: string;
   imgXs: string;
   imgSm: string;
   imgMd: string;
   heading: string;
   paragraphOne: string;
   paragraphTwo: string;
}

// --------- Contentful data ------------

export interface IDesignItemFields {
   title: Contentful.EntryFields.Text,
   slug: Contentful.EntryFields.Text,
   imageXs: Contentful.Asset,
   imageSm?: Contentful.Asset,
   imageMd?: Contentful.Asset
}
export type IDesignItem = Contentful.Entry<IDesignItemFields>

export interface IProductItem {
   title: Contentful.EntryFields.Text,
   slug: Contentful.EntryFields.Text,
   description: Contentful.EntryFields.Text,
   image: Contentful.Asset,
   text?: Contentful.EntryFields.Text
}


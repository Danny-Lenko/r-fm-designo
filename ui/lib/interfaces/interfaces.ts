import Contentful from 'contentful'
import * as CFRichTextTypes from '@contentful/rich-text-types';

export interface IAboutContentItem {
   flexDirMd: string;
   imgXs: string;
   imgSm: string;
   imgMd: string;
   heading: string;
   paragraphOne: string;
   paragraphTwo: string;
}

export interface ITopRectangle {
   id: number;
   title: string;
   description: string;
}

// --------- Contentful data ------------

export interface IDesignItemFields {
   id: Contentful.EntryFields.Number
   title: Contentful.EntryFields.Text
   slug: Contentful.EntryFields.Text
   description: Contentful.EntryFields.Text
   imageXs: Contentful.Asset
   imageSm?: Contentful.Asset
   imageMd?: Contentful.Asset
}
export type IDesignItem = Contentful.Entry<IDesignItemFields>

export interface IProjectItemFields {
   id: Contentful.EntryFields.Number
   title: Contentful.EntryFields.Text
   slug: Contentful.EntryFields.Text
   category: Contentful.EntryFields.Text
   description: Contentful.EntryFields.Text
   image: Contentful.Asset
   text?: CFRichTextTypes.Document
}
export type IProjectItem = Contentful.Entry<IProjectItemFields>

export interface ILocationFields {
   id: Contentful.EntryFields.Number
   city: Contentful.EntryFields.Text
   name: Contentful.EntryFields.Text
   country: Contentful.EntryFields.Text
   email: Contentful.EntryFields.Text
   coords: Contentful.EntryFields.Number[]
   address?: Contentful.EntryFields.Text
   postalZipCode?: Contentful.EntryFields.Text
   region?: Contentful.EntryFields.Text
   phone?: Contentful.EntryFields.Text
}
export type ILocation = Contentful.Entry<ILocationFields>

import React from 'react'
import Document, {
   DocumentInitialProps,
   DocumentContext,
   Html,
   Head,
   Main,
   NextScript
} from 'next/document'

export default class MyDocument extends Document {
   static async getInitialProps(
      ctx: DocumentContext
   ): Promise<DocumentInitialProps> {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
   }

   render(): JSX.Element {
      return (
         <Html lang="pt">
            <Head>
               <meta charSet="utf-8" />
               <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
               <meta name="viewport" content="width=device-width, initial-scale=1" />
               <meta name="theme-color" content="#000000" />
               <meta
                  name="description"
                  content="Web site created using create-react-app"
               />
               <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
               <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
               <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
                  integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
                  crossOrigin="" />
               <script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"
                  integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg="
                  crossOrigin=""></script>
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}

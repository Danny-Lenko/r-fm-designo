import { ReactNode } from 'react';
import Footer from '../footer'
import { Appbar } from '../appbar'
import React from 'react';

interface Props {
   children?: ReactNode;
}

function PrimaryLayout({ children }: Props) {
   return (
      <>
         <Appbar />
         <main>{children}</main>
         <Footer />
      </>
   );
}

export default PrimaryLayout;
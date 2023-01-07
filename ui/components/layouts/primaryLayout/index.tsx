import { ReactNode } from 'react';
import Header from '../header'
import Footer from '../footer'
import React from 'react';

interface Props {
   children?: ReactNode;
}

function PrimaryLayout({ children }: Props) {
   return (
      <>
         <Header />
         <main>{children}</main>
         <Footer />
      </>
   );
}

export default PrimaryLayout;
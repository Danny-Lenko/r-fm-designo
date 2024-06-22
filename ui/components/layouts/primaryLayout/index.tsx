import { ReactNode, lazy } from "react";
import Header from "../header";

const Footer = lazy(() => import("../footer"));

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

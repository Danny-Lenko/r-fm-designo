import type { NextPage } from "next";
import { createClient } from "contentful";
import { Container, Box } from "@mui/material";
import MobileContainer from "../components/common/mobileContainer";
import Hero from "../components/pageComponents/home/homeHero";
import { IDesignItem, IDesignItemFields } from "../lib/interfaces/interfaces";
import { styles } from "../styles/pagesStyles/homeStyles";
import { lazy } from "react";

const HomeDesigns = lazy(
  () => import("../components/pageComponents/home/homeDesigns")
);
const HomeTraits = lazy(
  () => import("../components/pageComponents/home/homeTraits")
);
const BottomRectangle = lazy(
  () => import("../components/common/bottomRectangle")
);
const BcgBulb = lazy(() => import("../components/common/bcgBulb"));

const Home: NextPage<{ designs: IDesignItem[] }> = ({ designs }) => {
  return (
    <Box component="main" sx={styles}>
      <MobileContainer>
        <Hero />
      </MobileContainer>

      <Container maxWidth="lg">
        <HomeDesigns designs={designs} />
        <HomeTraits />
        <BottomRectangle />
      </Container>

      <BcgBulb className="bulb-top" />
      <BcgBulb className="bulb-bottom" />
    </Box>
  );
};

export default Home;

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
  });
  const res = await client.getEntries<IDesignItemFields>({
    content_type: "designCollection",
  });

  res.items.sort((a, b) => a.fields.id - b.fields.id);

  return {
    props: {
      designs: res.items,
    },
    revalidate: 100,
  };
}

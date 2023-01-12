import type { NextPage } from 'next'
import { createClient } from 'contentful'
import { Container, Box } from "@mui/material";
import MobileContainer from '../components/common/mobileContainer';
import Hero from '../components/pages-components/home/homeHero';
import HomeDesigns from '../components/pages-components/home/homeDesigns';
import HomeTraits from '../components/pages-components/home/homeTraits';
import BottomRectangle from '../components/common/bottomRectangle';
import GreyDrop from '../components/common/greyDrop';
import { DROPHOMETOP, DROPHOMEBOTTOM } from '../lib/utils/constants';
import { IDesignItem } from '../lib/interfaces/interfaces';

const Home: NextPage<{ designs: IDesignItem[] }> = ({ designs }) => {

  return (
    <Box component="main" sx={{ position: 'relative' }}>
      <MobileContainer>
        <Hero />
      </MobileContainer>

      <Container maxWidth='lg'>
        <HomeDesigns designs={designs} />
        <HomeTraits />
        <BottomRectangle />

        <GreyDrop typeTop={true} margTop={DROPHOMETOP} />
        <GreyDrop typeTop={false} margTop={DROPHOMEBOTTOM} />
      </Container>
    </Box>
  )
}

export default Home

export async function getStaticProps() {
  const client = createClient({
     space: process.env.CONTENTFUL_SPACE_ID!,
     accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
  })
  const res = await client.getEntries<IDesignItem[]>({ content_type: "designCollection" })

  return {
     props: {
        designs: res.items,
     }
  }
}

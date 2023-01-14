import type { NextPage } from 'next'
import { createClient } from 'contentful'
import { Container, Box } from "@mui/material";
import MobileContainer from '../components/common/mobileContainer';
import Hero from '../components/pageComponents/home/homeHero';
import HomeDesigns from '../components/pageComponents/home/homeDesigns';
import HomeTraits from '../components/pageComponents/home/homeTraits';
import BottomRectangle from '../components/common/bottomRectangle';
import BcgBulb from '../components/common/bcgBulb';
import { IDesignItem } from '../lib/interfaces/interfaces';
import { styles } from '../styles/pagesStyles/homeStyles';

const Home: NextPage<{ designs: IDesignItem[] }> = ({ designs }) => {

  return (
    <Box component="main" sx={styles}>
      <MobileContainer>
        <Hero />
      </MobileContainer>

      <Container maxWidth='lg'>
        <HomeDesigns designs={designs} />
        <HomeTraits />
        <BottomRectangle />
      </Container>

      <BcgBulb className='bulb-top' />
      <BcgBulb className='bulb-bottom' />
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

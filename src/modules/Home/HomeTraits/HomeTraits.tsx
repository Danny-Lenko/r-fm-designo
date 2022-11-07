import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box'
import ImagePassionate from '../../../resources/assets/home/desktop/illustration-passionate.svg'
import ImageResourceful from '../../../resources/assets/home/desktop/illustration-resourceful.svg'
import ImageFriendly from '../../../resources/assets/home/desktop/illustration-friendly.svg'
import BgPassionate from '../../../resources/assets/home/desktop/bg-passionate.png'
import BgResourceful from '../../../resources/assets/home/desktop/bg-resourceful.png'
import BgFriendly from '../../../resources/assets/home/desktop/bg-friendly.png'
import SingleTrait from './SingleTrait';

const HomeTraits = () => {

   class TraitProps {
      constructor(
         readonly mainImage: string,
         readonly bgImage: Record<string, string>,
         readonly title: string,
         readonly text: string
      ) { }
   }

   const passionateTraitProps = new TraitProps(
      ImagePassionate,
      assembleBgImg(BgPassionate),
      'Passionate',
      'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.'
   )

   const resourcefulTraitProps = new TraitProps(
      ImageResourceful,
      assembleBgImg(BgResourceful),
      'Resourceful',
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs."
   )

   const friendlyTraitProps = new TraitProps(
      ImageFriendly,
      assembleBgImg(BgFriendly),
      'Friendly',
      "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
   )

   function assembleBgImg(bgImg: any) {
      return {
         background: `url(${bgImg}) 50% 50%/202px 202px no-repeat`
      }
   }

   return (
      <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={2}>
            {/* passionate */}
            <SingleTrait propsObj={passionateTraitProps} />
            {/* resourceful */}
            <SingleTrait propsObj={resourcefulTraitProps} />
            {/* friendly */}
            <SingleTrait propsObj={friendlyTraitProps} />
         </Grid>
      </Box>
   );
}

export default HomeTraits;
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box'
import ImagePassionate from '/public/assets/home/desktop/img-group-passionate.svg'
import ImageResourceful from '/public/assets/home/desktop/img-group-resourceful.svg'
import ImageFriendly from '/public/assets/home/desktop/img-group-friendly.svg'
import SingleTrait from './singleTrait';
import { SECTIONMARGINBOTTOM } from '../../../../lib/utils/constants';

class TraitProps {
   constructor(
      readonly mainImage: string,
      readonly title: string,
      readonly text: string
   ) { }
}

const passionateTraitProps = new TraitProps(
   ImagePassionate,
   'Passionate',
   'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.'
)

const resourcefulTraitProps = new TraitProps(
   ImageResourceful,
   'Resourceful',
   "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs."
)

const friendlyTraitProps = new TraitProps(
   ImageFriendly,
   'Friendly',
   "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
)

const HomeTraits = () => {
   return (
      <Box sx={{ flexGrow: 1, mb: SECTIONMARGINBOTTOM / 8 }}>
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
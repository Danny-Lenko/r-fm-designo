import { Box, Typography } from '@mui/material'
import { homeDesignsStyles } from './homeDesignsStyles';

const HomeDesigns = () => {
   return (
      <Box className="designs" sx={homeDesignsStyles} >
         <Box className="designs__item designs__item_web">
            <Typography variant="h2" textTransform='uppercase' color='common.white'>Web Design</Typography>
            <Typography>View Projects</Typography>
            <Box className="designs__img designs__img_web">
            </Box>
         </Box>

         <Box className="designs__item designs__item_app">
            <Box className="designs__img designs__img_app"></Box>
         </Box>

         <Box className="designs__item designs__item_graphics">
            <Box className="designs__img designs__img_graphics"></Box>
         </Box>
      </Box>
   );
}

export default HomeDesigns;
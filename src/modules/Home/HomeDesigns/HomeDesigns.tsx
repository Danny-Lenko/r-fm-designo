import { Box, Typography } from '@mui/material'
import { homeDesignsStyles } from './homeDesignsStyles'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useNavigate } from 'react-router-dom'

const HomeDesigns = () => {
   const navigate = useNavigate()

   return (
      <Box className="designs" sx={homeDesignsStyles} >
         <Box 
            className="designs__item designs__item_web"
            onClick={() => navigate('web-design')}
         >
            <Box className='designs__textbox'>
               <Typography variant="h2">Web Design</Typography>
               <Typography>View Projects <ChevronRightIcon /></Typography>
            </Box>
            <Box className="designs__img designs__img_web"></Box>
         </Box>

         <Box className="designs__item designs__item_app">
            <Box className='designs__textbox'>
               <Typography variant="h2">App Design</Typography>
               <Typography>View Projects <ChevronRightIcon /></Typography>
            </Box>
            <Box className="designs__img designs__img_app"></Box>
         </Box>

         <Box className="designs__item designs__item_graphics">
            <Box className='designs__textbox'>
               <Typography variant="h2">Graphic Design</Typography>
               <Typography>View Projects <ChevronRightIcon /></Typography>
            </Box>
            <Box className="designs__img designs__img_graphics"></Box>
         </Box>
      </Box>
   );
}

export default HomeDesigns;
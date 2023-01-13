import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import MobileContainer from '../mobileContainer';
import { styles } from './styles'
import { ITopRectangle } from '../../../lib/interfaces/interfaces';

const TopRectangle = ({ id, title, description }: ITopRectangle) => {

   return (
      <MobileContainer>
         <Box sx={ styles(id) } >
            <Typography variant='h1'>
               {title}
            </Typography>
            <Typography>
               {description}
            </Typography>
         </Box>
      </MobileContainer>
   );
}

export default TopRectangle;
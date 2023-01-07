import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import MobileContainer from '../mobileContainer';
import { styles } from './styles'

const TopRectangle = ({ content }: { content: Record<string, string> }) => {

   return (
      <MobileContainer>
         <Box sx={ styles(content) } >
            <Typography variant='h1'>
               {content.title}
            </Typography>
            <Typography>
               {content.desc}
            </Typography>
         </Box>
      </MobileContainer>
   );
}

export default TopRectangle;
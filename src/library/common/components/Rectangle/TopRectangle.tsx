import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import { SECTIONMARGINBOTTOM } from '../../constants/constants';
import MobileContainer from '../MobileContainer/MobileContainer';

const TopRectangle = ({ content }: { content: Record<string, string> }) => {

   const topRectangleStyles = {
      mb: SECTIONMARGINBOTTOM / 8,
      width: '100%',
      borderRadius: {sm: '15px'},
      background: `#E7816B url(${content.circles}) 100% 50% no-repeat`,
      textAlign: 'center',
      py: 64 / 8,
      color: 'common.white',
      '& .MuiTypography-h1': {
         mb: 24 / 8,
         width: '95%',
         mx: 'auto'
      },
      '& .MuiTypography-body1': {
         width: { xs: '95%', sm: '70%', md: '38%' },
         mx: 'auto'
      }
   }

   return (
      <MobileContainer>
         <Box sx={topRectangleStyles}>
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
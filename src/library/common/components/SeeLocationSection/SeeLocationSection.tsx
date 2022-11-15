import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CustomButton from '../CustomButton/CustomButton'
import canadaImg from '../../../../resources/assets/shared/desktop/img-group-canada.svg'
import australiaImg from '../../../../resources/assets/shared/desktop/img-group-australia.svg'
import ukImg from '../../../../resources/assets/shared/desktop/img-group-uk.svg'
import { SECTIONMARGINBOTTOM } from '../../constants/constants'

const SeeLocationSection = () => {
   
   const sectionStyles = {
      display: 'flex',
      flexDirection: {xs: 'column', md: 'row'},
      justifyContent: 'space-around',
      mb: SECTIONMARGINBOTTOM / 8,
      '& .article': {
         mb: {xs: 6, sm: 10, md: 0},
         textAlign: 'center',
         '& .MuiTypography-root': {
            mt: 6,
            mb: 4,
            textTransform: 'uppercase'
         }
      }
   }

   return (
      <Container maxWidth='lg' sx={sectionStyles}>
         <Box className='article'>
            <Box className='img-box' component='img' src={canadaImg} alt='Canada'></Box>
            <Typography variant='h3'>Canada</Typography>
            <CustomButton light={false} title='see location'></CustomButton>
         </Box>

         <Box className='article'>
            <Box className='img-box' component='img' src={australiaImg} alt='Australia'></Box>
            <Typography variant='h3'>Australia</Typography>
            <CustomButton light={false} title='see location'></CustomButton>
         </Box>

         <Box className='article'>
            <Box className='img-box' component='img' src={ukImg} alt='United Kingdom'></Box>
            <Typography variant='h3'>United Kingdom</Typography>
            <CustomButton light={false} title='see location'></CustomButton>
         </Box>
      </Container>
   );
}
 
export default SeeLocationSection;
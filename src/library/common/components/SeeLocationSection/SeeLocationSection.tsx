import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CustomButton from '../CustomButton/CustomButton'
import canadaImg from '../../../../resources/assets/shared/desktop/img-group-canada.svg'
import australiaImg from '../../../../resources/assets/shared/desktop/img-group-australia.svg'
import ukImg from '../../../../resources/assets/shared/desktop/img-group-uk.svg'
import { SECTIONMARGINBOTTOM } from '../../constants/constants'
import { useNavigate } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';

const SeeLocationSection = () => {
   const navigate = useNavigate()

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
      },
      '& a': {
         textDecoration: 'none'
      }
   }

   const scrollWithOffset = (el:any) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -10; 
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

   return (
      <Container maxWidth='lg' sx={sectionStyles}>
         <Box className='article'>
            <Box className='img-box' component='img' src={canadaImg} alt='Canada'></Box>
            <Typography variant='h3'>Canada</Typography>
            <NavHashLink smooth to='/locations#canada' scroll={el => scrollWithOffset(el)}>
               <CustomButton light={false} title='see location'></CustomButton>
            </NavHashLink>
         </Box>

         <Box className='article'>
            <Box className='img-box' component='img' src={australiaImg} alt='Australia'></Box>
            <Typography variant='h3'>Australia</Typography>
            <NavHashLink smooth to='/locations#australia' scroll={el => scrollWithOffset(el)}>
               <CustomButton light={false} title='see location'></CustomButton>
            </NavHashLink>
         </Box>

         <Box className='article'>
            <Box className='img-box' component='img' src={ukImg} alt='United Kingdom'></Box>
            <Typography variant='h3'>United Kingdom</Typography>
            <NavHashLink smooth to='/locations#uk' scroll={el => scrollWithOffset(el)}>
               <CustomButton light={false} title='see location'></CustomButton>
            </NavHashLink>
         </Box>
      </Container>
   );
}
 
export default SeeLocationSection;
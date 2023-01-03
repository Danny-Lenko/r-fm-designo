import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import CustomButton from '../customButton'
import canadaImg from '/public/assets/shared/desktop/img-group-canada.svg'
import australiaImg from '/public/assets/shared/desktop/img-group-australia.svg'
import ukImg from '/public/assets/shared/desktop/img-group-uk.svg'
import { styles } from './styles'
// import { useNavigate } from 'react-router-dom'
// import { NavHashLink } from 'react-router-hash-link';

const SeeLocation = () => {
   // const navigate = useNavigate()

   const scrollWithOffset = (el: any) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -10;
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
   }

   return (
      <Container maxWidth='lg' sx={styles}>
         <Box className='article'>
            <SvgIcon component={canadaImg} inheritViewBox />
            <Typography variant='h3'>Canada</Typography>
            {/* <NavHashLink smooth to='/locations#canada' scroll={el => scrollWithOffset(el)}> */}
            <CustomButton light={false} title='see location'></CustomButton>
            {/* </NavHashLink> */}
         </Box>

         <Box className='article'>
            <SvgIcon component={australiaImg} inheritViewBox />
            <Typography variant='h3'>Australia</Typography>
            {/* <NavHashLink smooth to='/locations#australia' scroll={el => scrollWithOffset(el)}> */}
            <CustomButton light={false} title='see location'></CustomButton>
            {/* </NavHashLink> */}
         </Box>

         <Box className='article'>
            <SvgIcon component={ukImg} inheritViewBox />
            <Typography variant='h3'>United Kingdom</Typography>
            {/* <NavHashLink smooth to='/locations#uk' scroll={el => scrollWithOffset(el)}> */}
            <CustomButton light={false} title='see location'></CustomButton>
            {/* </NavHashLink> */}
         </Box>
      </Container>
   );
}

export default SeeLocation;
import { useRouter } from 'next/router'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import CustomButton from '../customButton'
import canadaImg from '/public/assets/shared/desktop/img-group-canada.svg'
import australiaImg from '/public/assets/shared/desktop/img-group-australia.svg'
import ukImg from '/public/assets/shared/desktop/img-group-uk.svg'
import { styles } from './styles'

const SeeLocation = () => {
   const router = useRouter()

   return (
      <Container maxWidth='lg' sx={styles}>
         <Box className='article'>
            <SvgIcon component={canadaImg} inheritViewBox />
            <Typography variant='h3'>Canada</Typography>
            <CustomButton
               light={false}
               title='see location'
               onClick={() => {
                  router.push({ pathname: '/locations', query: { id: 'canada' } })
               }}
            ></CustomButton>
         </Box>

         <Box className='article'>
            <SvgIcon component={australiaImg} inheritViewBox />
            <Typography variant='h3'>Australia</Typography>
            <CustomButton
               light={false}
               title='see location'
               onClick={() => {
                  router.push({ pathname: '/locations', query: { id: 'australia' } })
               }}
            ></CustomButton>
         </Box>

         <Box className='article'>
            <SvgIcon component={ukImg} inheritViewBox />
            <Typography variant='h3'>United Kingdom</Typography>
            <CustomButton
               light={false}
               title='see location'
               onClick={() => {
                  router.push({ pathname: '/locations', query: { id: 'uk' } })
               }}
            ></CustomButton>
         </Box>
      </Container>
   );
}

export default SeeLocation;
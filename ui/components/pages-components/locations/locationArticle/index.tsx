import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import MobileContainer from '../../../common/mobileContainer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styles } from './styles'

const LocationArticle = ({ content }: any) => {
   const {
      coords,
      flexDirMd,
      heading,
      contact,
      margBottom
   } = content

   const Map = useMemo(() => dynamic(
      () => import('../map'),
      {
         loading: () => <p>A map is loading</p>,
         ssr: false
      }
   ), [])

   return (
      <MobileContainer>
         <Box sx={styles(flexDirMd, margBottom)}>
            <Box className='map-box'>
               <Map coords={coords} />
            </Box>
            <Box className='text-box'>
               <Typography variant='h2'>{heading}</Typography>
               <Box className='text-box__contact'>
                  <Typography fontWeight='700'>{contact[0]}</Typography>
                  <Typography>{contact[1]}</Typography>
                  <Typography>{contact[2]}</Typography>
               </Box>
               <Box className='text-box__contact'>
                  <Typography fontWeight='700'>{contact[3]}</Typography>
                  <Typography>{contact[4]}</Typography>
                  <Typography>{contact[5]}</Typography>
               </Box>
            </Box>
         </Box>
      </MobileContainer>
   );
}

export default LocationArticle;
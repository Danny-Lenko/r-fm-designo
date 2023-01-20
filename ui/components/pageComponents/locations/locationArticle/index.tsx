import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MobileContainer from '../../../common/mobileContainer';
import { ILocationFields } from '../../../../lib/interfaces/interfaces';
import { styles } from './styles'

const LocationArticle = ({ 
   content, 
   length
}: {
   content: ILocationFields
   length: number
}) => {
   const {
      address,
      city,
      coords,
      country,
      email,
      id,
      name,
      phone,
      postalZipCode,
      region
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
         <Box sx={styles(id, length)}>
            <Box className='map-box'>
               <Map coords={coords} />
            </Box>
            <Box className='text-box'>
               <Typography variant='h2'>{country}</Typography>
               <Box className='text-box__contact'>
                  <Typography fontWeight='700'>{name}</Typography>
                  {
                     address && <Typography>{address}</Typography>
                  }
                  <Typography>{`${city}${region && `, ${region}`} ${postalZipCode}`}</Typography>
               </Box>
               <Box className='text-box__contact'>
                  <Typography fontWeight='700'>Contact</Typography>
                  {
                     phone && <Typography>{`P : ${phone}`}</Typography>
                  }
                  <Typography>M : {email}</Typography>
               </Box>
            </Box>
         </Box>
      </MobileContainer>
   );
}

export default LocationArticle;
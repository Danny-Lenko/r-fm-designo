import { useRouter } from 'next/router';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import LocationArticle from './locationArticle';
import BottomRectangle from '../../components/common/bottomRectangle';
import ScrollableAnchor from '../../lib/hocs/ScrollableAnchor';

import { useEffect } from 'react';

const canadaContent = {
   coords: [43.644, -79.394],
   flexDirMd: 'row-reverse',
   heading: 'Canada',
   contact: [
      'Designo Central Office',
      '3886 Wellington Street',
      'Toronto, Ontario M9C 3J5',
      'Contact',
      'P : +1 253-863-8967',
      'M : contact@designo.co'
   ]
}

const australiaContent = {
   coords: [-30.329, 149.788],
   flexDirMd: 'row',
   heading: 'Australia',
   contact: [
      'Designo AU Office',
      '19 Balonne Street',
      'New South Wales 2443',
      'Contact',
      'P : (02) 6720 9092',
      'M : contact@designo.au'
   ]
}

const ukContent = {
   coords: [51.939, -3.881],
   flexDirMd: 'row-reverse',
   heading: 'United Kingdom',
   contact: [
      'Designo UK Office',
      '13  Colorado Way',
      'Rhyd-y-fro SA8 9GA',
      'Contact',
      'P : 078 3115 1400',
      'M : contact@designo.uk'
   ],
   margBottom: true
}

const Locations = () => {
   const router = useRouter()
   const id = router.query.id

   useEffect(() => {
      if (typeof id === 'string') {
         const el = document.getElementById(id)
         const yCoordinate = el!.getBoundingClientRect().top + window.pageYOffset;
         const yOffset = -10;
         window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
      }
   }, [])

   return (
      <Box component="main" sx={{ position: 'relative' }}>
         <Box id='canada'>
            <LocationArticle content={canadaContent} />
         </Box>

         <Box id='australia'>
            <LocationArticle content={australiaContent} />
         </Box>

         <Box id='uk'>
            <LocationArticle content={ukContent} />
         </Box>

         <Container maxWidth='lg'>
            <BottomRectangle />
         </Container>
      </Box>
   );
}

export default Locations;
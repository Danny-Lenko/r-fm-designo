import { useRouter } from 'next/router';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import LocationArticle from '../../components/pageComponents/locations/locationArticle';
import BottomRectangle from '../../components/common/bottomRectangle';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { locationsAtom } from '../../lib/context/locationsAtom';
import { ILocation } from '../../lib/interfaces/interfaces';

const Locations = () => {
   const router = useRouter()
   const id = router.query.id
   const [loadableAtom] = useAtom<any>(locationsAtom)
   const locations: ILocation[] = loadableAtom.data

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
         {
            locations && locations.map(location =>
               <Box
                  key={location.sys.id}
                  id={location.fields.name}
               >
                  <LocationArticle
                     content={location.fields}
                     length={locations.length}
                  />
               </Box>
            )
         }
         <Container maxWidth='lg'>
            <BottomRectangle />
         </Container>
      </Box>
   );
}

export default Locations;
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MobileContainer from '../../library/common/components/MobileContainer/MobileContainer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import circlesImg from '../../resources/assets/locations/desktop/circles.svg'
import { SECTIONMARGINBOTTOM } from '../../library/common/constants/constants';


const LocationArticle = ({content}:any) => {

   const {
      coords,
      flexDirMd,
      heading,
      contact,
      margBottom
   } = content

   const articleStyles = {
      display: 'flex',
      flexDirection: { xs: 'column', md: flexDirMd },
      gap: { sx: 0, sm: '30px' },
      mb: margBottom ? SECTIONMARGINBOTTOM / 8 : {xs: 40 / 8, sm: 120 / 8, md: 4},
      '& .map-box': {
         minWidth: '30%',
         minHeight: {xs: '320px', md: 'unset'},
         borderRadius: '15px',
         '& .map-container': {
            minHeight: '320px', 
            height: '100%', 
            width: '100%', 
            borderRadius: {sm: '15px'}
         }
      },
      '& .text-box': {
         textAlign: {xs: 'center', sm: 'start'},
         backgroundColor: '#FDF3F0',
         backgroundImage: `url(${circlesImg})`,
         backgroundPosition: '0 0',
         backgroundRepeat: 'no-repeat',
         width: '100%',
         py: { xs: 10, sm: 11 },
         px: {sm: 75 / 8, md: 95 / 8},
         display: 'flex',
         flexDirection: {xs: 'column', sm: 'row'},
         flexWrap: 'wrap',             
         gap: '24px',
         borderRadius: {sm:'15px'},
         '& .MuiTypography-h2': {
            width: '100%',
            color: 'peachCustom.main',
         },
         '&__contact': {
            flexGrow: 1
         }
      }
   }

   return (

      <MobileContainer>
         <Box sx={articleStyles}>
            <Box className='map-box'>
               <MapContainer
                  center={coords}
                  zoom={6}
                  scrollWheelZoom={false}
                  className='map-container'
               >
                  <TileLayer
                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={coords}>
                     <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                     </Popup>
                  </Marker>
               </MapContainer>
            </Box>

            <Box className='text-box'>
               <Typography variant='h2'>{ heading }</Typography>
               <Box className='text-box__contact'>
                  <Typography fontWeight='700'>{ contact[0] }</Typography>
                  <Typography>{ contact[1] }</Typography>
                  <Typography>{ contact[2] }</Typography>
               </Box>
               <Box className='text-box__contact'>
                  <Typography fontWeight='700'>{ contact[3] }</Typography>
                  <Typography>{ contact[4] }</Typography>
                  <Typography>{ contact[5] }</Typography>
               </Box>
            </Box>
         </Box>
      </MobileContainer>
   );
}

export default LocationArticle;
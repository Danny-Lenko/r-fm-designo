import { Box, Container, Button } from '@mui/material'
import LogoLight from '../../../../resources/assets/shared/desktop/logo-light.png'

const Footer = () => {
   
   const footerStyles = {
      zIndex: -100,
      height: '500px',
      backgroundColor: 'common.black',
      mt: -9,
      '& .upper-box': {
         position: 'relative',
         width: '100%',
         pt: 144 / 8,
         display: 'flex',
         justifyContent: 'space-between',
         '& img': {
            maxWidth: '202px',
            alignSelf: 'center'
         },
         '&__links': {
            color: 'common.white',
            display: 'flex',
            '& .MuiButtonBase-root': {
               color: 'common.white',
               fontSize: 14 / 16 + 'rem',
               letterSpacing: '2px',
               fontWeight: 400
            }
         }
      },
      '& .upper-box::after': {
         content: '""',
         width: '100%',
         height: '1px',
         backgroundColor: 'common.white',
         opacity: '0.1',
         position: 'absolute',
         bottom: -40
      }
   }
   
   return (  
      <Box sx={footerStyles}>
         <Container>
            <Box className='upper-box'>
               <Box
                  component='img'
                  alt='logo'
                  src={LogoLight}
               ></Box>
               <Box className='upper-box__links'>
                  <Button>Our Company</Button>
                  <Button>Locations</Button>
                  <Button>Out Company</Button>
               </Box>
            </Box>
         </Container>
      </Box>
   );
}
 
export default Footer;
import { Box, Container, Button, Typography, SvgIcon } from '@mui/material'
import LogoLight from 'public/assets/shared/desktop/logo-light.png'
// import { ReactComponent as IconFacebook } from 'public/assets/shared/desktop/icon-facebook.svg'
// import { ReactComponent as IconInstagram } from 'public/assets/shared/desktop/icon-instagram.svg'
// import { ReactComponent as IconPinterest } from 'public/assets/shared/desktop/icon-pinterest.svg'
// import { ReactComponent as IconTwitter } from 'public/assets/shared/desktop/icon-twitter.svg'
// import { ReactComponent as IconYoutube } from 'public/assets/shared/desktop/icon-youtube.svg'
// import { useNavigate, useLocation } from 'react-router-dom'
import { footerStyles } from './footerStyles'

const Footer = () => {
   // const navigate = useNavigate()
   // const location = useLocation()
   // const socialIcons = [ IconFacebook, IconYoutube, IconTwitter, IconPinterest, IconInstagram ]

   return (
      <Box 
         // sx={footerStyles(location)
      >

         <Container>
            {/* upper box */}
            <Box className='upper-box'>
               {/* <Box
                  component='img'
                  alt='logo'
                  src={LogoLight}
               ></Box> */}
               <Box className='upper-box__links'>
                  {/* <Button onClick={() => navigate('/about')}>Our Company</Button>
                  <Button onClick={() => navigate('/locations')}>Locations</Button>
                  <Button onClick={() => navigate('/contact')}>Contact</Button> */}
               </Box>
            </Box>
            {/* lower box */}
            <Box className='lower-box'>
               <Box className='lower-box__text'>
                  <Box className='lower-box__text_first'>
                     <Typography 
                        fontWeight={700}
                        letterSpacing={2}
                     >
                        Designo Central Office
                     </Typography>
                     <Typography>3886 Wellington Street</Typography>
                     <Typography>Toronto, Ontario M9C 3J5</Typography>
                  </Box>
                  <Box className='lower-box__text_second'>
                     <Typography 
                        fontWeight={700}
                        letterSpacing={2}
                     >
                        Contact Us (Central Office)
                     </Typography>
                     <Typography 
                        fontWeight={700}
                        letterSpacing={2}
                     >
                        P : +1 253-863-8967
                     </Typography>
                     <Typography>M : contact@designo.co</Typography>
                  </Box>
               </Box>
               {/* social network icons */}
               {/* <Box className='lower-box__social'>
                  {
                     socialIcons.map((icon, i) => <SvgIcon key={i} component={icon} inheritViewBox />)
                  }
               </Box> */}
            </Box>
         </Container>
      </Box>
   );
}

export default Footer;
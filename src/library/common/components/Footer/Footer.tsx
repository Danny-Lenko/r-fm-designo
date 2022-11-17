import { Box, Container, Button, Typography, SvgIcon } from '@mui/material'
import LogoLight from '../../../../resources/assets/shared/desktop/logo-light.png'
import { ReactComponent as IconFacebook } from '../../../../resources/assets/shared/desktop/icon-facebook.svg'
import { ReactComponent as IconInstagram } from '../../../../resources/assets/shared/desktop/icon-instagram.svg'
import { ReactComponent as IconPinterest } from '../../../../resources/assets/shared/desktop/icon-pinterest.svg'
import { ReactComponent as IconTwitter } from '../../../../resources/assets/shared/desktop/icon-twitter.svg'
import { ReactComponent as IconYoutube } from '../../../../resources/assets/shared/desktop/icon-youtube.svg'
import { useNavigate, useLocation } from 'react-router-dom'

const Footer = () => {
   const navigate = useNavigate()
   const location = useLocation()

   const socialIcons = [ IconFacebook, IconYoutube, IconTwitter, IconPinterest, IconInstagram ]

   const footerStyles = {
      pt: {
         xs: location.pathname === '/contact' ? 88 / 8 : 253 / 8,
         sm: 166 / 8,
         md: 144 / 8
      },
      pb: 72 / 8,
      zIndex: -100,
      backgroundColor: 'common.black',
      mt: location.pathname === '/contact' ? 163 / 8 : { xs: (64 - 253) / 8, sm: -9 },
      // upper-box
      '& .upper-box': {
         position: 'relative',
         width: '100%',
         display: 'flex',
         justifyContent: 'space-between',
         flexDirection: { xs: 'column', sm: 'row' },
         '& img': {
            maxWidth: '202px',
            alignSelf: 'center',
         },
         '&__links': {
            position: 'relative',
            color: 'common.white',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            mt: { xs: 59 / 8, sm: 0 },
            textAlign: 'center',
            '&::before': {
               content: '""',
               width: '100%',
               height: '1px',
               backgroundColor: 'common.white',
               opacity: {xs: 0.1, sm: 0},
               position: 'absolute',
               top: -28,
            },
            // link buttons
            '& .MuiButtonBase-root': {
               color: 'common.white',
               fontSize: 14 / 16 + 'rem',
               letterSpacing: '2px',
               fontWeight: 400,
               mb: { xs: 3, sm: 0 },
               width: 'max-content',
               mx: 'auto',
               '&::after': {
                  content: '""',
                  width: '85%',
                  height: '1px',
                  backgroundColor: 'peachCustom.main',
                  position: 'absolute',
                  bottom: 10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  opacity: 0,
                  transition: 'all 0.3s ease-out',
               },
               '&:hover::after': {
                  opacity: 1
               }
            }
         }
      },
      '& .upper-box::after': {
         content: '""',
         width: '100%',
         height: '1px',
         backgroundColor: 'common.white',
         opacity: {xs: 0, sm: 0.1},
         position: 'absolute',
         bottom: -40
      },
      // lower-box
      '& .lower-box': {
         mt: { xs: 1, sm: 72 / 8 },
         width: '100%',
         color: 'common.white',
         display: 'flex',
         justifyContent: 'space-between',
         flexDirection: { xs: 'column', sm: 'row' },
         '&__text': {
            textAlign: { xs: 'center', sm: 'unset' },
            width: { xs: '100%', sm: '60%' },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: { xs: 'center', sm: 'unset' },
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 5, sm: 1 },
            opacity: '50%'
         },
         '&__social': {
            mt: 5,
            alignSelf: { xs: 'center', sm: 'flex-end' },
            '& .MuiSvgIcon-root': {
               cursor: 'pointer',
               color: 'peachCustom.main',
               ml: 2,
               transition: 'all 0.3s ease-out',
               '&:hover': {
                  color: 'peachCustom.light'
               }
            },
         }
      }
   }

   return (
      <Box sx={footerStyles}>

         <Container>
            {/* upper box */}
            <Box className='upper-box'>
               <Box
                  component='img'
                  alt='logo'
                  src={LogoLight}
               ></Box>
               <Box className='upper-box__links'>
                  <Button onClick={() => navigate('/about')}>Our Company</Button>
                  <Button onClick={() => navigate('/locations')}>Locations</Button>
                  <Button onClick={() => navigate('/contact')}>Contact</Button>
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
               <Box className='lower-box__social'>
                  {
                     socialIcons.map((icon, i) => <SvgIcon key={i} component={icon} inheritViewBox />)
                  }
               </Box>
            </Box>
         </Container>
      </Box>
   );
}

export default Footer;
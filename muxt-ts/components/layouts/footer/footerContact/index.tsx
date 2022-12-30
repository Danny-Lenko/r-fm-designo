import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import Image from 'next/image'
import iconFacebook from '../../../../public/assets/shared/desktop/icon-facebook.svg'
import iconInstagram from '../../../../public/assets/shared/desktop/icon-instagram.svg'
import iconPinterest from '../../../../public/assets/shared/desktop/icon-pinterest.svg'
import iconTwitter from '../../../../public/assets/shared/desktop/icon-twitter.svg'
import iconYoutube from '../../../../public/assets/shared/desktop/icon-youtube.svg'
import { styles } from './styles'
// import { useNavigate, useLocation } from 'react-router-dom'

const socialIcons = [iconFacebook, iconYoutube, iconTwitter, iconPinterest, iconInstagram]

const FooterContact = () => {
   return (
      <Box sx={styles}>

         <Box className='text-box'>
            <Box>
               <Typography
                  fontWeight={700}
                  letterSpacing={2}
               >
                  Designo Central Office
               </Typography>
               <Typography>3886 Wellington Street</Typography>
               <Typography>Toronto, Ontario M9C 3J5</Typography>
            </Box>
            <Box>
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

         <Box className='icons-box'>
            {
               socialIcons.map((icon, i) => <SvgIcon key={i} component={icon} inheritViewBox />)
            }
         </Box>
      </Box>

   );
}

export default FooterContact;
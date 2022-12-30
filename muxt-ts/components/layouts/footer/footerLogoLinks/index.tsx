import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Image from 'next/image';
import logoLight from '../../../../public/assets/shared/desktop/logo-light.png'
import { styles } from './styles'

const FooterLogoLinks = () => {
   return (
      <Box sx={styles}>
         <Box className='logo-box'>
            <Image
               src={logoLight}
               alt='Designo'
               width={202}
               height={27}
            />
         </Box>
         <Box className='links-box'>
            <Button
            // onClick={() => navigate('/about')}
            >
               Our Company
            </Button>
            <Button
            // onClick={() => navigate('/locations')}
            >
               Locations
            </Button>
            <Button
            // onClick={() => navigate('/contact')}
            >
               Contact
            </Button>
         </Box>
      </Box>

   );
}

export default FooterLogoLinks;
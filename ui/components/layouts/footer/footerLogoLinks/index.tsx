import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Image from 'next/image';
import logoLight from '../../../../public/assets/shared/desktop/logo-light.png'
import { styles } from './styles'
import { useRouter } from 'next/router';

const FooterLogoLinks = () => {
   const router = useRouter()

   return (
      <Box sx={styles}>
         <Box className='logo-box'>
            <Image
               src={logoLight}
               alt='Designo'
               width={202}
               height={27}
               onClick={() => router.push('/')}
            />
         </Box>
         <Box className='links-box'>
            <Button
               onClick={() => router.push('/about')}
            >
               Our Company
            </Button>
            <Button
               onClick={() => router.push('/locations')}
            >
               Locations
            </Button>
            <Button
               onClick={() => router.push('/contact')}
            >
               Contact
            </Button>
         </Box>
      </Box>

   );
}

export default FooterLogoLinks;
import { Box, Container } from '@mui/material'
import FooterLogoLinks from './footerLogoLinks'
import FooterContact from './footerContact'
import { styles } from './styles'

const Footer = () => {
   return (
      <Box sx={ styles('home') }>
         <Container>
            <FooterLogoLinks />
            <FooterContact />
         </Container>
      </Box>
   );
}

export default Footer;
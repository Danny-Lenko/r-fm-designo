import Box from "@mui/material/Box";
import ContactHero from "./ContactHero/ContactHero";
import SeeLocationSection from "../../library/common/components/SeeLocationSection/SeeLocationSection";
import Bulb from '../../resources/assets/contact/desktop/bulb-img.svg'

const Contact = () => {
   return (
      <Box component="main" sx={{ position: 'relative' }}>
         <ContactHero />

         <SeeLocationSection />

         <Box
            sx={{position: 'absolute', bottom: -300, right: 0, zIndex: -2, display: {xs: 'none', md: 'block'}}}
            component='img'
            alt='grey bulb'
            src={Bulb}
         >
         </Box>
      </Box>
   );
}

export default Contact;
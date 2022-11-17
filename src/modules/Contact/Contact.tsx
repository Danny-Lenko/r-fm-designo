import Box from "@mui/material/Box";
import ContactHero from "./ContactHero/ContactHero";
import SeeLocationSection from "../../library/common/components/SeeLocationSection/SeeLocationSection";

const Contact = () => {

   const footerOffsetting  = {
      height: '120px', 
      width: '100%', 
      transform: 'translateY(-70px)', 
      backgroundColor: 'common.white'
   }

   return (
      <Box component="main" sx={{ position: 'relative' }}>

         <ContactHero />

         <SeeLocationSection />

         <Box sx={footerOffsetting}>
         </Box>
      </Box>
   );
}

export default Contact;
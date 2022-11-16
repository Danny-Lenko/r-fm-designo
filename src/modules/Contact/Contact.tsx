import Box from "@mui/material/Box";
import ContactHero from "./ContactHero/ContactHero";
import SeeLocationSection from "../../library/common/components/SeeLocationSection/SeeLocationSection";

const Contact = () => {
   return (
      <Box component="main" sx={{ position: 'relative' }}>

         <ContactHero />

         <SeeLocationSection />
      </Box>
   );
}

export default Contact;
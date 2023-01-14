import Box from "@mui/material/Box";
import ContactHero from "../../components/pageComponents/contact/contactHero";
import SeeLocation from "../../components/common/seeLocation";
import BcgBulb from "../../components/common/bcgBulb";
import { styles } from '../../styles/pagesStyles/contactStyles'

const Contact = () => {
   return (
      <Box component="main" sx={styles}>
         <ContactHero />
         <SeeLocation />
         <Box className="margin-box"></Box>
         <BcgBulb className="bulb" />
      </Box>
   );
}

export default Contact;
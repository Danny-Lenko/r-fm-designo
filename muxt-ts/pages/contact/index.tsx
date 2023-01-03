import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import ContactHero from "./contactHero";
import SeeLocation from "../../components/common/seeLocation";
import bulb from '/public/assets/contact/desktop/bulb-img.svg'
import { styles } from './styles'

const Contact = () => {
   return (
      <Box component="main" sx={styles}>
         <ContactHero />
         <SeeLocation />
         <Box className="bulb-box">
            <SvgIcon className="bulb" component={bulb} inheritViewBox/>
         </Box>
         <Box className="margin-box"></Box>
      </Box>
   );
}

export default Contact;
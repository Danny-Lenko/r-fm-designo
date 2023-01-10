import { Box, Typography } from "@mui/material";
import MobileContainer from "../../../common/mobileContainer";
import { styles } from './styles'

const AboutHero = () => {
   return (
      <MobileContainer>
         <Box sx={styles}>
            <Box className="content-box">
               <Typography variant="h1">About Us</Typography>
               <Typography>
                  Founded in 2010, we are a creative agency that produces lasting results for our clients. We&apos;ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We&apos;re always looking forward to creating brands, products, and digital experiences that connect with our clients&apos; audiences.
               </Typography>
            </Box>
            <Box className="image-box"></Box>
         </Box>
      </MobileContainer>
   );
}

export default AboutHero;
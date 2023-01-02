import useWindowWidth from "../../../../lib/hooks/useWindowWidth";
import { Typography, Box, SvgIcon } from "@mui/material";
import CustomButton from "../../../common/CustomButton/CustomButton";
import HeroPhone from '../../../../public/assets/home/desktop/image-hero-phone.svg'
import HeroPhoneSm from '../../../../public/assets/home/tablet/hero-phone-sm.svg'
import HeroPhoneXs  from '../../../../public/assets/home/mobile/hero-phone-xs.svg'
import { styles } from "./styles";
// import { useNavigate } from "react-router-dom";

const Hero = () => {
   const windowWidth = useWindowWidth()
   // const navigate = useNavigate()

   return (
      <Box className="hero-box" sx={styles}>  {/* bgimage is in globals.css */}
         {/* content box*/}
         <Box className="content">
            <Typography variant="h1" className="text">
               Award-winning custom designs and digital branding solutions
            </Typography>
            <Typography className="text">
               With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
            </Typography>
            <CustomButton 
               light={true}
               title='Learn More' 
               // onClick={() => navigate('/web-design')} 
            />
         </Box>
         {/* phone image */}
         <Box className="image-box">
            <SvgIcon
               component={
                  windowWidth < 600 ? HeroPhoneXs
                     : windowWidth < 900 ? HeroPhoneSm
                        : HeroPhone
               }
               inheritViewBox
            />
         </Box>
      </Box>
   );
}

export default Hero;
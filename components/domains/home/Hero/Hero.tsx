import { Typography, Box, SvgIcon } from "@mui/material";
import CustomButton from "../../../common/CustomButton/CustomButton";
import { heroBoxStyles, heroContentBoxStyles, heroTextStyles, phoneImageStyles } from "./heroStyles";
import { ReactComponent as HeroPhone } from '../../../resources/assets/home/desktop/image-hero-phone.svg'
import { ReactComponent as HeroPhoneSm } from '../../../resources/assets/home/tablet/hero-phone-sm.svg'
import { ReactComponent as HeroPhoneXs } from '../../../resources/assets/home/mobile/hero-phone-xs.svg'
import { useNavigate } from "react-router-dom";

const Hero = ({ windowWidth }: { windowWidth: number }) => {
   const navigate = useNavigate()

   return (
      <Box className='hero-box' sx={heroBoxStyles}>  {/* bgimage is in index.css */}
         {/* content box*/}
         <Box sx={heroContentBoxStyles}>
            <Typography variant="h1" sx={heroTextStyles}>
               Award-winning custom designs and digital branding solutions
            </Typography>
            <Typography sx={heroTextStyles}>
               With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
            </Typography>
            <CustomButton onClick={() => navigate('/web-design')} light={true} title='Learn More' />
         </Box>
         {/* phone image */}
         <Box sx={phoneImageStyles}>
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
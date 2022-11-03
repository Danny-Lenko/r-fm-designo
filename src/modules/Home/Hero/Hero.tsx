import { Typography, Box } from "@mui/material";
import CustomButton from "../../../library/common/components/CustomButton/CustomButton";
import { heroBoxStyles, heroContentBoxStyles, heroTextStyles, phoneImageStyles } from "./heroStyles";
import heroPhone from '../../../resources/assets/home/desktop/hero-phone2.png'
import heroPhoneSm from '../../../resources/assets/home/tablet/hero-phone-sm.png'
import heroPhoneXs from '../../../resources/assets/home/mobile/hero-phone-xs.png'

const Hero = ({windowWidth}: {windowWidth:number}) => {
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
            <CustomButton light={true} title='Learn More' />
         </Box>
         {/* phone image */}
         <Box sx={phoneImageStyles}>
            <Box
               className="phone-image"
               component='img'
               alt='Phone'
               src={windowWidth < 600 ? heroPhoneXs
                  : windowWidth < 900 ? heroPhoneSm
                  : heroPhone
               }
            ></Box>
         </Box>
      </Box>
   );
}

export default Hero;
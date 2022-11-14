import { Box, Typography } from "@mui/material";
import imageMd from '../../../resources/assets/about/desktop/image-about-hero.jpg'
import imageSm from '../../../resources/assets/about/tablet/image-about-hero.jpg'
import imageXs from '../../../resources/assets/about/mobile/image-about-hero.jpg'
import { SECTIONMARGINBOTTOM } from "../../../library/common/constants/constants";
import circleXs from '../../../resources/assets/about/mobile/bg-pattern-hero-about-mobile.svg'
import circleSm from '../../../resources/assets/about/desktop/bg-pattern-hero-about-desktop.svg'
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const AboutHero = () => {
   const theme = useTheme()

   function assembleImgBackground(img: string) {
      return `url(${img}) 50% 50%/cover no-repeat`
   }

   const aboutHeroStyles = {
      display: 'flex',
      flexDirection: { xs: 'column-reverse', md: 'row' },
      mb: SECTIONMARGINBOTTOM / 8,
      borderRadius: '24px',
      '& .content-box': {
         color: 'common.white',
         backgroundColor: 'peachCustom.main',
         backgroundImage: { xs: `url(${circleXs})`, sm: `url(${circleSm})` },
         backgroundPosition: { xs: '100% 25%', sm: '-100px 125%', md: '100% 100%' },
         backgroundRepeat: 'no-repeat',
         maxWidth: { xs: '100%', md: '60%' },
         textAlign: { xs: 'center', md: 'start' },
         py: { xs: 10, sm: 8, md: 135 / 8 },
         px: { xs: 3, sm: 7, md: 95 / 8 },
         borderTopLeftRadius: { md: '24px' },
         borderBottomRightRadius: { sm: '24px', md: 'unset' },
         borderBottomLeftRadius: { sm: '24px' },
         '& .MuiTypography-h1': {
            mb: { xs: 3, sm: 4 }
         }
      },
      '& .image-box': {
         borderTopRightRadius: { sm: '24px', md: '24px' },
         borderBottomRightRadius: { xs: 0, md: '24px' },
         borderTopLeftRadius: { sm: '24px', md: 0 },
         width: '100%',
         minHeight: '320px',
         background: {
            xs: assembleImgBackground(imageXs),
            sm: assembleImgBackground(imageSm),
            md: assembleImgBackground(imageMd)
         }
      }
   }

   return (
      <Container disableGutters={useMediaQuery(theme.breakpoints.only('xs'))} maxWidth='lg'>
         <Box sx={aboutHeroStyles}>
            <Box className="content-box">
               <Typography variant="h1">About Us</Typography>
               <Typography>
                  Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We're always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.
               </Typography>
            </Box>
            <Box className="image-box"></Box>
         </Box>
      </Container>
   );
}

export default AboutHero;
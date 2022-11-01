import { Typography, Container, Box } from "@mui/material";
import CustomButton from "../../library/common/components/CustomButton/CustomButton";
import heroPhone from '../../resources/assets/home/desktop/hero-phone2.png'
import { HEROHEIGHTWIDE, HEROIMAGEHEIGHTSM } from "../../library/common/constants/contstants";

const Home = () => {

   const heroBoxStyles = {
      height: { md: HEROHEIGHTWIDE },
      backgroundColor: 'peachCustom.main',
      borderRadius: 3,
      position: 'relative',
      display: 'flex',
      flexDirection: {xs: 'column', md: 'row'},
      justifyContent: 'space-evenly',
      gap: {xs: 7, md: 0}
   }

   const heroContentBoxStyles = {
      height: {xs: '50%', md: 'unset'},
      width: {xs: '90%', sm: '80%', md: '50%'},
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: {xs: 'center', md: 'flex-start'},
      '& .MuiTypography-h1': {
         fontSize: (theme:any) => ({
            xs: 32 / theme.typography.htmlFontSize + 'rem',
            sm: 48 / theme.typography.htmlFontSize + 'rem'
         }),
         mt: {xs: 7, md: 0}
      },
      '& .MuiTypography-body1': {
         width: {xs: '90%', md: '75%'}
      }
   }

   const heroTextStyles = {
      mb: 4,
      color: 'common.white',
      textAlign: {xs: 'center', md: 'start'},
   }

   const phoneImageStyles = {
      alignSelf: 'end',
      height: HEROIMAGEHEIGHTSM,
      display: 'flex',
      alignItems: {xs: 'flex-start', md: 'flex-end'},
      width: {xs: '100%', md: 'unset'},
      position: 'relative',
      overflow: 'hidden',
      '& .phone-image': {
         position: 'absolute',
         top: 0,
         m: '0 auto',
         filter: 'drop-shadow(20px -40px 80px rgba(93, 2, 2, 0.497569))',
      }
   }

   return (
      <Container maxWidth='lg'>
         {/* Hero Box */}
         <Box className='hero-box' sx={ heroBoxStyles }>  {/* bgimage is in index.css */} 
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
                  // sx={phoneImageStyles}
                  src={heroPhone}
               ></Box>
            </Box>
         </Box>

         <Box sx={{bgcolor: 'warning.main', height: '100px'}} style={{zIndex: 1000000}}>

         </Box>

         <Typography variant='h1'>Hello h1</Typography>
         <Typography variant='h2'>Hello h2</Typography>
         <Typography variant='h3' textTransform={'uppercase'}>Hello h3</Typography>
         <Typography>Hello body1</Typography>
      </Container>
   );
}

export default Home;
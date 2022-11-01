import { Typography, Container, Box, Button } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import CustomButton from "../../library/common/components/CustomButton/CustomButton";
import { ReactComponent as HeroOval } from '../../resources/assets/home/desktop/bg-pattern-hero-home.svg';
import heroPhone from '../../resources/assets/home/desktop/hero-phone2.png'


const Home = () => {

   return (
      <Container maxWidth='lg'>
         {/* Hero Box */}
         <Box height={640} className='hero-box'
            sx={{
               backgroundColor: 'peachCustom.main',
               borderRadius: 3,
               position: 'relative',
               display: 'flex',
               justifyContent: 'space-evenly',
            }}
         >
            {/* content */}
            <Box width='50%' alignSelf='center'>
               <Typography variant="h1" color='common.white' sx={{mb: 4}}>
                  Award-winning custom designs and digital branding solutions
               </Typography>
               <Typography color='common.white' width='75%' sx={{mb: 4.5}}>
                  With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
               </Typography>
               <CustomButton light={true} title='Learn More' />
            </Box>
            {/* image */}
            <Box
               component='img'
               alt='Phone'
               sx={{ alignSelf: 'end', filter: 'drop-shadow(20px -40px 80px rgba(93, 2, 2, 0.497569))' }}
               boxSizing='border-box'
               src={heroPhone}
            ></Box>
         </Box>

         <Typography variant='h1'>Hello h1</Typography>
         <Typography variant='h2'>Hello h2</Typography>
         <Typography variant='h3' textTransform={'uppercase'}>Hello h3</Typography>
         <Typography>Hello body1</Typography>
      </Container>
   );
}

export default Home;
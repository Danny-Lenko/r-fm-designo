import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import CustomButton from '../customButton';
import { styles } from './styles'
// import { useNavigate } from 'react-router-dom';

const BottomRectangle = () => {
   // const navigate = useNavigate()

   return (
      <Box sx={styles} >
         <Box className='content-box'>
            <Typography variant='h2'>
               Let&apos;s talk about your project
            </Typography>
            <Typography>
               Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
            </Typography>
         </Box>
         <Box className='btn-box'>
            <CustomButton
               light={true}
               title={'get in touch'}
            // onClick={() => navigate('/contact')} 
            />
         </Box>
      </Box>
   );
}

export default BottomRectangle;
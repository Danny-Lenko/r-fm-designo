import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import CirclesImg from '../../../../resources/assets/shared/desktop/bg-pattern-call-to-action.svg'
import CustomButton from '../CustomButton/CustomButton';

const BottomRectangle = () => {

   const bottomRectangleStyles = {
      width: '100%',
      borderRadius: '15px',
      background: `#E7816B url(${CirclesImg}) 100% 50% no-repeat`,
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      px: { xs: 3, sm: 7, md: 12 },
      py: { xs: 8, sm: 7, md: 9 },
      alignItems: { xs: 'center', md: 'unset' },
      gap: 4,
      zIndex: 10,
      '& .content-box-rectangle': {
         textAlign: { xs:'center', md: 'start' },
         color: 'common.white',
         width: { xs: '100%', sm: '75%', md:'50%' },
         '& .MuiTypography-h2': {
            mx: { xs: 'auto', md: 0 },
            maxWidth: '310px',
            mb: 1
         }
      },
      '& .btn-box-rectangle': {
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'flex-end',
         flexGrow: 1
      }
   }

   return (
      <Box sx={bottomRectangleStyles}>
         <Box className='content-box-rectangle'>
            <Typography variant='h2'>
               Let's talk about your project
            </Typography>
            <Typography>
               Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
            </Typography>
         </Box>
         <Box className='btn-box-rectangle'>
            <CustomButton light={true} title={'get in touch'} />
         </Box>
      </Box>
   );
}

export default BottomRectangle;
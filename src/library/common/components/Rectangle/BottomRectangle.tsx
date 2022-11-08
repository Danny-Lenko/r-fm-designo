import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import CirclesImg from '../../../../resources/assets/shared/desktop/bg-pattern-call-to-action.svg'
import ChevronRight from '@mui/icons-material/ChevronRight';
import CustomButton from '../CustomButton/CustomButton';

const BottomRectangle = () => {

   const bottomRectangularStyles = {
      width: '100%',
      borderRadius: '15px',
      background: `#E7816B url(${CirclesImg}) 100% 50% no-repeat`,
      display: 'flex',
      px: '95px',
      '& .content-box-rectangle': {
         color: 'common.white',
         width: '50%',
         py: 9,
         '& .MuiTypography-h2': {
            width: '310px'
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
      <Box sx={bottomRectangularStyles}>
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
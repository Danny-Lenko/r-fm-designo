import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const SingleTrait = ({ propsObj }: any) => {
   const { mainImage, title, text } = propsObj

   const containerStyles = {
      mb: {
         xs: 10,
         sm: 4
      },
      textAlign: { xs: 'center', sm: 'start', md: 'center' },
      justifyContent: 'center',
      '& .text-box': {
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         pl: {sm: 4, md: 0},
         '& .MuiTypography-h3': {
            textTransform: 'uppercase',
            mt: {xs: 5, sm: 0, md: 5},
            mb: {xs: 4, sm: 2, md: 4}
         }
      }
   }

   return (
      <Grid container xs={12} md={4} sx={containerStyles}>
         <Grid xs={10} sm={4} md={8} className='img-box'>
            <Box
               component='img'
               alt='friendly'
               src={mainImage}
            ></Box>
         </Grid>
         <Grid xs={12} sm={8} md={12} className='text-box' >
            <Typography variant='h3'>{title}</Typography>
            <Typography>{text}</Typography>
         </Grid>
      </Grid>
   );
}

export default SingleTrait;
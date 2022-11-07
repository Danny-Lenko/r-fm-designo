import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const SingleTrait = ({ propsObj }: any) => {
   const { mainImage, bgImage, title, text } = propsObj

   return (
      <Grid container xs={12} md={4} textAlign='center' justifyContent='center'>
         <Grid xs={10} sm={4} md={8} sx={bgImage}>
            <Box
               component='img'
               alt='friendly'
               src={mainImage}
            ></Box>
         </Grid>
         <Grid xs={12} sm={8} md={12}>
            <Typography textTransform='uppercase' variant='h3'>{title}</Typography>
            <Typography>{text}</Typography>
         </Grid>
      </Grid>
   );
}

export default SingleTrait;
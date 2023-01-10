import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SvgIcon from '@mui/material/SvgIcon';
import { styles } from './styles'

const SingleTrait = ({ propsObj }: any) => {
   const { mainImage, title, text } = propsObj

   return (
      <Grid container xs={12} md={4} sx={styles}>
         <Grid xs={10} sm={4} md={8} className='img-box'>
            <SvgIcon component={mainImage} inheritViewBox />
         </Grid>
         <Grid xs={12} sm={8} md={12} className='text-box' >
            <Typography variant='h3'>{title}</Typography>
            <Typography>{text}</Typography>
         </Grid>
      </Grid>
   );
}

export default SingleTrait;
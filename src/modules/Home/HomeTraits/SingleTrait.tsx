import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Theme } from "@mui/system"
import { calcSpacing } from "../../../library/utilities/utils"
import { SECTIONMARGINBOTTOM } from "../../../library/common/constants/contstants"

const SingleTrait = ({ propsObj }: any) => {
   const { mainImage, bgImage, title, text } = propsObj

   const containerStyles = {
      mb: {
         xs: 10,
         sm: 4,
         md: (theme:Theme) => calcSpacing(theme, SECTIONMARGINBOTTOM),
      },
      textAlign: { xs: 'center', sm: 'start', md: 'center' },
      justifyContent: 'center',
      alignItems: 'flexStart',
      '& .trait-grid-item2': {
         minHeight: '100%',
         pl: { xs: 0, sm: 4, md: 0 }
      }
   }

   return (
      <Grid container xs={12} md={4} sx={containerStyles}>
         <Grid xs={10} sm={4} md={8} sx={bgImage}>
            <Box
               component='img'
               alt='friendly'
               src={mainImage}
            ></Box>
         </Grid>
         <Grid xs={12} sm={8} md={12} className='trait-grid-item2' >
            <Typography mt={6} mb={4} textTransform='uppercase' variant='h3'>{title}</Typography>
            <Typography>{text}</Typography>
         </Grid>
      </Grid>
   );
}

export default SingleTrait;
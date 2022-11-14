import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SECTIONMARGINBOTTOM } from '../../../library/common/constants/constants'

const AboutContentSection = ({props}:any) => {

   const {
      flexDirMd,
      imgXs,
      imgSm,
      imgMd,
      heading,
      paragraphOne,
      paragraphTwo,

   } = props

   console.log(imgXs)

   const componentStyle = {
      border: 1,
      mb: SECTIONMARGINBOTTOM / 8,
      borderRadius: '15px',
      display: 'flex',
      flexDirection: { xs: 'column', md: flexDirMd },
      '& .content-box': {
         py: {xs: 10, sm: 68 / 8, md: 154 / 8},
         px: {xs: 3, sm: 58 / 8, md: 96 / 8},
         maxWidth: {md: '60%'},   
         '& .MuiTypography-h2': {
            color: 'peachCustom.main',
            mb: 3
         },
         '& .MuiTypography-body1:first-of-type': {
            mb: 3
         }
      },
      '& .image-box': {
         width: '100%',
         minHeight: '320px',
         backgroundImage: {
            xs: `url(${imgXs}) 50% 50%/cover no-repeat`
         }
      }
   }

   return (
      <Box sx={ componentStyle }>
         <Box className='content-box'>
            <Typography variant='h2'>{heading}</Typography>
            <Typography>{paragraphOne}</Typography>
            <Typography>{paragraphTwo}</Typography>
         </Box>
         <Box className='image-box'></Box>
      </Box>
   );
}

export default AboutContentSection;
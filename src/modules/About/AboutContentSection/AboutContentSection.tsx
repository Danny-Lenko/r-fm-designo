import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useMediaQuery } from '@mui/material'
import { SECTIONMARGINBOTTOM } from '../../../library/common/constants/constants'
import { AboutContentItem } from '../../../library/interfaces/interfaces'
import { useTheme } from "@mui/material/styles";
import CirclesImg from '../../../resources/assets/about/desktop/content-circles.svg'

const AboutContentSection = ({ props }: { props: AboutContentItem }) => {
   const theme = useTheme()

   const {
      flexDirMd,
      imgXs,
      imgSm,
      imgMd,
      heading,
      paragraphOne,
      paragraphTwo,
   } = props

   const componentStyle = {
      mb: SECTIONMARGINBOTTOM / 8,
      borderRadius: '15px',
      display: 'flex',
      flexDirection: { xs: 'column', md: flexDirMd },
      '& .content-box': {
         backgroundImage: `url(${CirclesImg})`,
         backgroundPosition: '-50% 100%',
         backgroundRepeat: 'no-repeat',
         borderTopLeftRadius: {md: flexDirMd !== 'row' ? '15px' : 0},
         borderTopRightRadius: {md: flexDirMd === 'row' ? '15px' : 0},
         borderBottomRightRadius: {sm: '15px', md: flexDirMd === 'row' ? '15px' : 0},
         borderBottomLeftRadius: {sm: '15px', md: flexDirMd !== 'row' ? '15px' : 0},
         backgroundColor: '#FDF3F0',
         textAlign: { xs: 'center', md: 'start' },
         py: { xs: 10, sm: 68 / 8, md: 154 / 8 },
         px: { xs: 3, sm: 58 / 8, md: 96 / 8 },
         maxWidth: { md: '60%' },
         '& .MuiTypography-h2': {
            color: 'peachCustom.main',
            mb: 3
         },
         '& .MuiTypography-body1:first-of-type': {
            mb: 3
         }
      },
      '& .image-box': {
         borderTopLeftRadius: {sm: '15px', md: flexDirMd !== 'row' ? '0' : '15px'},
         borderTopRightRadius: {sm: '15px', md: flexDirMd === 'row' ? 0 : '15px'},
         borderBottomRightRadius: {md: flexDirMd !== 'row' ? '15px' : 0},
         borderBottomLeftRadius: {md: flexDirMd === 'row' ? '15px' : 0},
         width: '100%',
         minHeight: '320px',
         backgroundImage: {
            xs: `url(${imgXs})`,
            sm: `url(${imgSm})`,
            md: `url(${imgMd})`
         },
         backgroundRepeat: 'no-repeat',
         backgroundPosition: '50% 50%',
         backgroundSize: 'cover'
      }
   }

   return (
      <Container disableGutters={useMediaQuery(theme.breakpoints.only('xs'))} maxWidth='lg'>
         <Box sx={componentStyle}>
            <Box className='image-box'></Box>
            <Box className='content-box'>
               <Typography variant='h2'>{heading}</Typography>
               <Typography>{paragraphOne}</Typography>
               <Typography>{paragraphTwo}</Typography>
            </Box>
         </Box>
      </Container>
   );
}

export default AboutContentSection;
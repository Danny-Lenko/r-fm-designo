import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { IAboutContentItem } from '../../../../lib/interfaces/interfaces'
import MobileContainer from '../../../common/mobileContainer'
import { styles } from './styles'

const AboutContent = ({ props }: { props: IAboutContentItem }) => {
   const {
      heading,
      paragraphOne,
      paragraphTwo,
   } = props

   return (
      <MobileContainer>
         <Box sx={styles({ props })}>
            <Box className='image-box'></Box>
            <Box className='content-box'>
               <Typography variant='h2'>{heading}</Typography>
               <Typography>{paragraphOne}</Typography>
               <Typography>{paragraphTwo}</Typography>
            </Box>
         </Box>
      </MobileContainer>
   );
}

export default AboutContent;
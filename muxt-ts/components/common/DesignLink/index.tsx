import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import WebImgMD from '/public/assets/home/desktop/image-web-design-large.jpg'
import WebImgSM from '/public/assets/home/tablet/image-web-design.jpg'
import WebImgXS from '/public/assets/home/mobile/image-web-design.jpg'
import AppImgMD from '/public/assets/home/desktop/image-app-design.jpg'
import AppImgSM from '/public/assets/home/tablet/image-app-design.jpg'
import AppImgXS from '/public/assets/home/mobile/image-app-design.jpg'
import GraphicImgMD from '/public/assets/home/desktop/image-graphic-design.jpg'
import GraphicImgSM from '/public/assets/home/tablet/image-graphic-design.jpg'
import GraphicImgXS from '/public/assets/home/mobile/image-graphic-design.jpg'
// import { useNavigate } from 'react-router-dom';
import { styles } from './styles'

function assembleBg(img: string, size: string) {
   const allImages = [
      { name: 'WebImgMD', link: WebImgMD },
      { name: 'WebImgSM', link: WebImgSM },
      { name: 'WebImgXS', link: WebImgXS },
      { name: 'AppImgMD', link: AppImgMD },
      { name: 'AppImgSM', link: AppImgSM },
      { name: 'AppImgXS', link: AppImgXS },
      { name: 'GraphicImgMD', link: GraphicImgMD },
      { name: 'GraphicImgSM', link: GraphicImgSM },
      { name: 'GraphicImgXS', link: GraphicImgXS },
   ]
   const actualImageName = img + size
   const actualImage = allImages.find(image => image.name === actualImageName)

   return `rgba(0,0,0,0.5) url(${actualImage?.link.src}) 0 0/cover no-repeat`
}

const DesignLink = ({ content }: any) => {
   const router = useRouter()

   return (
      <Box
         sx={styles(content, assembleBg)}
         onClick={() => router.push(content.path)}
      >
         <Box className='textbox'>
            <Typography variant="h2">{content.title}</Typography>
            <Typography>View Projects <ChevronRightIcon /></Typography>
         </Box>
         <Box className="img"></Box>
      </Box>
   );
}

export default DesignLink;


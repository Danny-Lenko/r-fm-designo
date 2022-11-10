import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useNavigate } from 'react-router-dom';

import WebImgMD from '../../../../resources/assets/home/desktop/image-web-design-large.jpg'
import WebImgSM from '../../../../resources/assets/home/tablet/image-web-design.jpg'
import WebImgXS from '../../../../resources/assets/home/mobile/image-web-design.jpg'
import AppImgMD from '../../../../resources/assets/home/desktop/image-app-design.jpg'
import AppImgSM from '../../../../resources/assets/home/tablet/image-app-design.jpg'
import AppImgXS from '../../../../resources/assets/home/mobile/image-app-design.jpg'
import GraphicImgMD from '../../../../resources/assets/home/desktop/image-graphic-design.jpg'
import GraphicImgSM from '../../../../resources/assets/home/tablet/image-graphic-design.jpg'
import GraphicImgXS from '../../../../resources/assets/home/mobile/image-graphic-design.jpg'

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

   return `rgba(0,0,0,0.5) url(${actualImage?.link}) 0 0/cover no-repeat`
}

// the component
const DesignLink = ({ content }: { content: any }) => {

   const navigate = useNavigate()

   const designLinkStyles = {
      position: 'relative',
      cursor: 'pointer',
      backgroundColor: 'peachCustom.main',
      borderRadius: '15px',
      overflow: 'hidden',
      '&:hover': {
         zIndex: 2,
         '& .img': {
            transform: 'scale(1.2)',
            opacity: 0.3
         }
      },
      // img box
      '& .img': {
         width: '100%',
         height: '100%',
         borderRadius: '15px',
         backgroundBlendMode: 'darken',
         transition: `
            transform 750ms cubic-bezier(.5, 0, .5, 1),
            opacity 250ms linear
         `,
         background: {
            xs: assembleBg(content.img, 'XS'),
            sm: assembleBg(content.img, 'SM'),
            md: assembleBg(content.img, 'MD')
         }
      },
      // typography items
      '& .textbox': {
         width: '100%',
         textAlign: 'center',
         zIndex: 3,
         position: 'absolute',
         top: '50%',
         transform: 'translateY(-50%)',
         '& .MuiTypography-h2, & .MuiTypography-body1': {
            textTransform: 'uppercase',
            color: 'common.white',
            px: 3
         },
         '& .MuiTypography-body1': {
            fontSize: 15 / 16 + 'rem',
            letterSpacing: '5px',
            display: 'inline-flex',
            position: 'relative',
            mt: 3,
            '& .MuiSvgIcon-root': {
               position: 'absolute',
               right: -5,
               top: '50%',
               transform: 'translateY(-50%)',
               fontSize: 'inherit',
               color: 'peachCustom.main'
            }
         }
      }

   }

   return (
      <Box
         sx={designLinkStyles}
         onClick={() => navigate(content.path)}
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


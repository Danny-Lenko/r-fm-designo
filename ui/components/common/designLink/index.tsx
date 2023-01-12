import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { styles } from './styles'
import { IDesignItemFields } from '../../../lib/interfaces/interfaces'

// function assembleBg(img: string, size: string) {
//    const allImages = [
//       { name: 'WebImgMD', link: WebImgMD },
//       { name: 'WebImgSM', link: WebImgSM },
//       { name: 'WebImgXS', link: WebImgXS },
//       { name: 'AppImgMD', link: AppImgMD },
//       { name: 'AppImgSM', link: AppImgSM },
//       { name: 'AppImgXS', link: AppImgXS },
//       { name: 'GraphicImgMD', link: GraphicImgMD },
//       { name: 'GraphicImgSM', link: GraphicImgSM },
//       { name: 'GraphicImgXS', link: GraphicImgXS },
//    ]
//    const actualImageName = img + size
//    const actualImage = allImages.find(image => image.name === actualImageName)

//    return `rgba(0,0,0,0.5) url(${actualImage?.link.src}) 0 0/cover no-repeat`
// }

const DesignLink = ({ content }: { content: IDesignItemFields }) => {
   const router = useRouter()

   console.log(content.imageXs.fields.file)
   const img = content.imageXs.fields.file.url

   return (
      <Box
         sx={styles(content, img)}
         // onClick={() => router.push(content.path)}
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


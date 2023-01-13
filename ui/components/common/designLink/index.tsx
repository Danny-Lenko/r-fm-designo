import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { styles } from './styles'
import { IDesignItemFields } from '../../../lib/interfaces/interfaces'

const DesignLink = ({ 
   content, 
   className 
}: { 
   content: IDesignItemFields, 
   className: string 
}) => {
   const router = useRouter()
   const imgXs = content.imageXs.fields.file.url
   const imgSm = content.imageSm?.fields.file.url
   const imgMd = content.imageMd?.fields.file.url

   return (
      <Box
         sx={styles(imgXs, imgSm, imgMd)}
         className={className}
         onClick={() => router.push('/designs/' + content.slug)}
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


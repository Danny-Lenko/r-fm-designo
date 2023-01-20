import { useRouter } from 'next/router'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import CustomButton from '../customButton'
import { locationsAtom } from '../../../lib/context/locationsAtom'
import { useAtom } from 'jotai'
import { ILocation } from '../../../lib/interfaces/interfaces'
import { styles } from './styles'
import Image from 'next/image'

const SeeLocation = () => {
   const router = useRouter()
   const [loadableAtom] = useAtom<any>(locationsAtom)
   const locations: ILocation[] = loadableAtom.data
   const mainLocations = locations ? locations.slice(0, 3) : []

   return (
      <Container maxWidth='lg' sx={styles}>
         {
            locations && mainLocations.map(location => {
               const {image, country, name} = location.fields
               return <Box
                  key={location.sys.id}
                  className='article'
               >
                  <Image 
                     src={'https:' + image.fields.file.url} 
                     alt={location.fields.country}
                     width={202}
                     height={202} 
                  />
                  <Typography variant='h3'>{country}</Typography>
                  <CustomButton
                     light={false}
                     title='see location'
                     onClick={() => {
                        router.push({ pathname: '/locations', query: { id: name } })
                     }}
                  ></CustomButton>
               </Box>
            })
         }
      </Container>
   );
}

export default SeeLocation;
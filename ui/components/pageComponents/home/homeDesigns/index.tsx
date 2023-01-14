import { Box } from '@mui/material'
import DesignLink from '../../../common/designLink'
import { IDesignItem } from '../../../../lib/interfaces/interfaces'
import { styles } from './styles'

const HomeDesigns = ({
   designs
}: {
   designs: IDesignItem[]
}) => {

   return (
      <Box sx={styles} >
         {
            designs.map((design, i) => {
               const className = i === 0 ? 'highItem' : ''

               return <DesignLink
                  key={design.sys.id}
                  content={design.fields}
                  className={className}
               />
            })
         }
      </Box>
   );
}

export default HomeDesigns;
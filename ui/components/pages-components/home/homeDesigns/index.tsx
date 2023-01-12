import { Box } from '@mui/material'
import DesignLink from '../../../common/designLink'
import { webDesignProps, appDesignProps, graphicDesignProps } from '../../../../lib/utils/constants'
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
            designs.map( design => <DesignLink 
               key={design.sys.id} 
               content={design.fields}
            /> )
         }

         {/* <DesignLink content={webDesignProps} />
         <DesignLink content={appDesignProps} />
         <DesignLink content={graphicDesignProps} /> */}
      </Box>
   );
}

export default HomeDesigns;
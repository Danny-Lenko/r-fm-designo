import { Box } from '@mui/material'
import DesignLink from '../../../common/DesignLink'
import { webDesignProps, appDesignProps, graphicDesignProps } from '../../../../lib/utils/constants'
import { styles } from './styles'

const HomeDesigns = () => {

   return (
      <Box sx={styles} >
         <DesignLink content={webDesignProps} />
         <DesignLink content={appDesignProps} />
         <DesignLink content={graphicDesignProps} />
      </Box>
   );
}

export default HomeDesigns;
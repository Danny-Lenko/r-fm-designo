import { Box } from '@mui/material'
import DesignLink from '../../../common/DesignLink/DesignLink'
import { Theme } from "@mui/system"
import { calcSpacing } from '../../../../src/library/utilities/utils'
import { SECTIONMARGINBOTTOM } from '../../../../lib/utils/constants'
import { webDesignProps, appDesignProps, graphicDesignProps } from '../../../../lib/utils/constants'

const HomeDesigns = () => {
   const homeDesignsStyles = {
      mb: (theme: Theme) => calcSpacing(theme, SECTIONMARGINBOTTOM),
      minHeight: { xs: 800, sm: 640 },
      display: 'grid',
      gridTemplateColumns: { xs: '1f', md: '1fr 1fr' },
      gridTemplateRows: { xs: '1fr 1fr 1f', md: '1fr 1fr' },
      gridTemplateAreas: {
         xs: `
            "web"
            "app"
            "graphic"
         `,
         md: `
            "web app"
            "web graphic"
         `
      },
      gap: '25px',
   }

   return (
      <Box sx={homeDesignsStyles} >
         <DesignLink content={webDesignProps} />
         <DesignLink content={appDesignProps} />
         <DesignLink content={graphicDesignProps} />
      </Box>
   );
}

export default HomeDesigns;
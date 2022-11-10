import { Box } from '@mui/material'
import DesignLink from '../../../library/common/components/DesignLink/DesignLink'
import { Theme } from "@mui/system"
import { calcSpacing } from '../../../library/utilities/utils'
import { SECTIONMARGINBOTTOM } from '../../../library/common/constants/contstants'

const HomeDesigns = () => {

   const webDesignProps = {
      title: 'Web Design',
      path: 'web-design',
      img: 'WebImg'
   }

   const appDesignProps = {
      title: 'App Design',
      path: 'app-design',
      img: 'AppImg'
   }

   const graphicDesignProps = {
      title: 'Graphic Design',
      path: 'graphic-design',
      img: 'GraphicImg'
   }

   const homeDesignsStyles = {
      mb: (theme:Theme) => calcSpacing(theme, SECTIONMARGINBOTTOM),
      minHeight: { xs: 800, sm: 640 },
      display: 'grid',
      gridTemplateColumns: { xs: '1f', md: '1fr 1fr' },
      gridTemplateRows: { xs: '1fr 1fr 1f', md: '1fr 1fr' },
      gridTemplateAreas: {
         xs: `
            "web"
            "app"
            "graphics"
         `,
         md: `
            "web app"
            "web graphics"
         `
      },
      gap: '25px',
   }

   return (
      <Box className="designs" sx={homeDesignsStyles} >
         <DesignLink content={webDesignProps} />
         <DesignLink content={appDesignProps} />
         <DesignLink content={graphicDesignProps} />
      </Box>
   );
}

export default HomeDesigns;
import { Theme } from "@mui/system"
import { calcSpacing } from '../../../../lib/utils/utils'
import { SECTIONMARGINBOTTOM } from '../../../../lib/utils/constants'

export const styles = {
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
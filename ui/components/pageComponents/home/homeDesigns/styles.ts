import { Theme } from "@mui/system"
import { calcSpacing } from '../../../../lib/utils/utils'
import { SECTIONMARGINBOTTOM } from '../../../../lib/utils/constants'

export const styles = {
   mb: (theme: Theme) => calcSpacing(theme, SECTIONMARGINBOTTOM),
   minHeight: { xs: 800, sm: 640 },
   display: 'grid',
   gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
   gridTemplateRows: { xs: '1fr 1fr 1fr', md: '1fr 1fr' },
   gap: '25px',
}
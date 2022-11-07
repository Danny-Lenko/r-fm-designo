import { HEROHEIGHTWIDE } from "../../../library/common/constants/contstants"
import { Theme } from "@mui/system"
import { calcSpacing } from "../../../library/utilities/utils"
import { SECTIONMARGINBOTTOM } from "../../../library/common/constants/contstants"

export const heroBoxStyles = {
   mb: (theme:Theme) => calcSpacing(theme, SECTIONMARGINBOTTOM),
   minHeight: { md: HEROHEIGHTWIDE },
   backgroundColor: 'peachCustom.main',
   borderRadius: 3,
   position: 'relative',
   display: 'flex',
   flexDirection: {xs: 'column', md: 'row'},
   justifyContent: 'space-evenly',
   gap: {xs: 7, md: 0}
}

export const heroContentBoxStyles = {
   width: {xs: '90%', sm: '80%', md: '50%'},
   alignSelf: 'center',
   display: 'flex',
   flexDirection: 'column',
   alignItems: {xs: 'center', md: 'flex-start'},
   '& .MuiTypography-h1': {
      fontSize: (theme:any) => ({
         xs: 32 / theme.typography.htmlFontSize + 'rem',
         sm: 48 / theme.typography.htmlFontSize + 'rem'
      }),
      mt: {xs: 7, md: 0}
   },
   '& .MuiTypography-body1': {
      width: {xs: '90%', md: '75%'}
   }
}

export const heroTextStyles = {
   mb: 4,
   color: 'common.white',
   textAlign: {xs: 'center', md: 'start'},
}

export const phoneImageStyles = {
   alignSelf: 'end',
   display: 'flex',
   alignItems: {xs: 'flex-start', md: 'flex-end'},
   width: {xs: '100%', md: 'unset'},
   '& .phone-image': {
      m: '0 auto',
      filter: 'drop-shadow(20px -40px 80px rgba(93, 2, 2, 0.497569))',
   }
}
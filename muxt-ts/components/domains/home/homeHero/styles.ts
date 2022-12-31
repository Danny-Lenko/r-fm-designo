import { HEROHEIGHTWIDE } from "../../../../lib/utils/constants"
import { Theme } from "@mui/system"
import { calcSpacing } from "../../../../lib/utils/utils"
import { SECTIONMARGINBOTTOM } from "../../../../lib/utils/constants"

export const styles = {
   mb: (theme: Theme) => calcSpacing(theme, SECTIONMARGINBOTTOM),
   minHeight: { md: HEROHEIGHTWIDE },
   backgroundColor: 'peachCustom.main',
   borderRadius: { sm: 3 },
   position: 'relative',
   display: 'flex',
   flexDirection: { xs: 'column', md: 'row' },
   justifyContent: 'space-evenly',
   gap: { xs: 7, md: 0 },

   '& .content': {
      width: { xs: '90%', sm: '80%', md: '50%' },
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: { xs: 'center', md: 'flex-start' },
      '& .MuiTypography-h1': {
         fontSize: (theme: any) => ({
            xs: 32 / theme.typography.htmlFontSize + 'rem',
            sm: 48 / theme.typography.htmlFontSize + 'rem'
         }),
         mt: { xs: 7, md: 0 }
      },
      '& .MuiTypography-body1': {
         width: { xs: '90%', md: '75%' }
      }   
   },

   '& .text': {
      mb: 4,
      color: 'common.white',
      textAlign: { xs: 'center', md: 'start' },   
   },

   '& .image-box': {
      alignSelf: 'end',
      display: 'flex',
      alignItems: { md: 'flex-end' },
      mx: { xs: 'auto', md: 'unset' },
      '& .MuiSvgIcon-root': {
         width: { xs: '100%', sm: 'inherit' },
         height: 'inherit',
         filter: 'drop-shadow(20px -40px 80px rgba(93, 2, 2, 0.497569))',
      },
      // fixes visual bug with the image filter property in moz
      '@-moz-document url-prefix()': {
         '& .MuiSvgIcon-root': {
            filter: 'none',
            boxShadow: '20px -40px 80px rgba(93, 2, 2, 0.497569)',
            borderTopRightRadius: { sm: '37px' },
            borderTopLeftRadius: { sm: '37px' }
         }
      }
   
   }
}

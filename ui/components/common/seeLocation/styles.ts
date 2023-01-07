import { SECTIONMARGINBOTTOM } from "../../../lib/utils/constants"

export const styles = {
   display: 'flex',
   flexDirection: { xs: 'column', md: 'row' },
   justifyContent: 'space-around',
   mb: SECTIONMARGINBOTTOM / 8,
   
   '& .article': {
      mb: { xs: 6, sm: 10, md: 0 },
      textAlign: 'center',
      '& svg': {
         width: 202,
         height: 202
      },
      '& .MuiTypography-root': {
         mt: 6,
         mb: 4,
         textTransform: 'uppercase'
      }
   },

   '& a': {
      textDecoration: 'none'
   }
}
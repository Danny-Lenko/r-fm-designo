import { APPBARHEIGHTNARROW, APPBARHEIGHTWIDE } from "../../../lib/utils/constants"

export const styles = {
   display: 'flex',
   minHeight: { xs: APPBARHEIGHTNARROW, sm: APPBARHEIGHTWIDE },

   '& .MuiToolbar-root': {
      minHeight: { xs: APPBARHEIGHTNARROW, sm: APPBARHEIGHTWIDE },
      p: 0
   },

   '& .overlay': {
      minHeight: '100%',
      width: '100%',
      bgcolor: 'rgba(0, 0, 0, 0.5)',
      position: 'fixed',
      top: 0,
      zIndex: 10000,
   }
}

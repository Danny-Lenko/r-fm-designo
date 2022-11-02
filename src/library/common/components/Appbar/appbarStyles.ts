import { APPBARHEIGHTNARROW, APPBARHEIGHTWIDE } from "../../constants/contstants"
import { DRAWERWIDTH } from "../../constants/contstants"

export const wrapperStyles = {
   display: 'flex',
   minHeight: { xs: APPBARHEIGHTNARROW, sm: APPBARHEIGHTWIDE },
   '& .MuiToolbar-root': {
      minHeight: { xs: APPBARHEIGHTNARROW, sm: APPBARHEIGHTWIDE },
      p: 0
   }
}

export const drawerStyles = {
   display: { xs: 'block', sm: 'none' },
   '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWERWIDTH, backgroundColor: 'transparent' },
   '& .MuiList-root': { backgroundColor: 'common.black', color: 'hsl(0, 0%, 100%)', fontSize: '1.5rem', py: 3 },
   '& .MuiListItemText-primary': { fontSize: '1.5rem', textTransform: 'uppercase', textAlign: 'start' },
   '& .MuiListItemButton-root:hover': { backgroundColor: 'greyCustom.dark' },
   '& .MuiListItemButton-root:focus': { backgroundColor: 'greyCustom.dark' },
   '& .MuiToolbar-root': { px: 2 }
}
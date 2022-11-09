import { APPBARHEIGHTNARROW, APPBARHEIGHTWIDE } from "../../constants/contstants"
import { DRAWERWIDTH } from "../../constants/contstants"

export const wrapperStyles = {
   display: 'flex',
   minHeight: { xs: APPBARHEIGHTNARROW, sm: APPBARHEIGHTWIDE },
   '& .MuiToolbar-root': {
      minHeight: { xs: APPBARHEIGHTNARROW, sm: APPBARHEIGHTWIDE },
      p: 0
   },
   '& .links-box': {
      display: { xs: 'none', sm: 'block' }, 
      ml: 'auto',
      '& .MuiButton-root': {
         position: 'relative',
         color: 'greyCustom.dark',
         fontWeight: 400,
         fontSize: 14 / 16 + 'rem',
         letterSpacing: '2px',
         '&::after': {
            content: '""',
            width: '85%',
            height: '1px',
            backgroundColor: 'peachCustom.light',
            position: 'absolute',
            bottom: 10,
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: 0,
            transition: 'all 0.3s ease-out',
         },
         '&:hover::after': {
            opacity: 1
         },
         '&:focus::after': {
            opacity: 1
         }
      }
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
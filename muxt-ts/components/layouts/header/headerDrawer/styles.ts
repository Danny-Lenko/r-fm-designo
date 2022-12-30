import { DRAWERWIDTH, APPBARHEIGHTNARROW } from "../../../../lib/utils/constants"
import { styled } from '@mui/material/styles';

export const DrawerHeader = styled('div')(({ theme }) => ({
   minHeight: APPBARHEIGHTNARROW,
   backgroundColor: theme.palette.common.white,
   display: 'flex',
   alignItems: 'center',
   // necessary for content to be below app bar
   ...theme.mixins.toolbar,
   justifyContent: 'flex-end',
}));

export const styles = {
   display: { xs: 'block', sm: 'none' },

   '& .MuiDrawer-paper': { 
      boxSizing: 'border-box',
      width: DRAWERWIDTH,
      backgroundColor: 'transparent', 
      zIndex: 100000 
   },

   '& .MuiList-root': { 
      backgroundColor: 'common.black', 
      color: 'hsl(0, 0%, 100%)', 
      fontSize: '1.5rem', 
      py: 3 
   },

   '& .MuiListItemText-primary': { 
      fontSize: '1.5rem', 
      textTransform: 'uppercase', 
      textAlign: 'start' 
   },

   '& .MuiListItemButton-root': {
      textAlign: 'center'
   },
   '& .MuiListItemButton-root:hover': { 
      backgroundColor: 'greyCustom.dark' 
   },
   '& .MuiListItemButton-root:focus': { 
      backgroundColor: 'greyCustom.dark' 
   },

   '& .MuiToolbar-root': { 
      px: 2,
      minWidth: '100%', 
      display: 'flex', 
      justifyContent: 'space-between',
      '& img': {
         transform: 'translateY(2px)'
      }
   }
}
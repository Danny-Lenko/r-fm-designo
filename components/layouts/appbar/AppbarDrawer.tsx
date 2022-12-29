import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SvgIcon from '@mui/material/SvgIcon'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import { ReactComponent as CloseIcon } from 'public/assets/shared/mobile/icon-close.svg'
import logoDark from 'public/assets/shared/desktop/logo-dark.png'
import { NAVITEMS, APPBARHEIGHTNARROW } from '../../../lib/utils/constants';
import { useNavigate } from 'react-router-dom';

const AppbarDrawer = ({ handleDrawerToggle }: any) => {
   // const navigate = useNavigate()

   const DrawerHeader = styled('div')(({ theme }) => ({
      minHeight: APPBARHEIGHTNARROW,
      backgroundColor: theme.palette.common.white,
      display: 'flex',
      alignItems: 'center',
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
   }));

   // JSX
   return (
      <Box
         className='drawer-wrapper'
         onClick={handleDrawerToggle}
         sx={{ textAlign: 'center' }}
      >
         <DrawerHeader>
            <Toolbar sx={{ minWidth: '100%' }}>
               <Box
                  component='img'
                  display='block'
                  alt='logo'
                  sx={{ width: '194px', transform: 'translateY(2px)' }}
                  src={logoDark}
               >
               </Box>
               <SvgIcon
                  sx={{ transform: 'translateY(2px) translateX(-10px)', ml: 'auto' }}
                  component={CloseIcon}
                  inheritViewBox
               />
            </Toolbar>
         </DrawerHeader>

         <List>
            {NAVITEMS.map((item: any) => (
               <ListItem key={item.title} disablePadding>
                  <ListItemButton
                     sx={{ textAlign: 'center' }}
                     // onClick={() => navigate(item.path)}
                  >
                     <ListItemText primary={item.title} />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
      </Box>
   );
}

export default AppbarDrawer;
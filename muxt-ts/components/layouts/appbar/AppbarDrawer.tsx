import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import closeIcon from '../../../public/assets/shared/mobile/icon-close.svg'
import logoDark from '../../../public/assets/shared/desktop/logo-dark.png'
import { NAVITEMS, APPBARHEIGHTNARROW } from '../../../lib/utils/constants';
// import { useNavigate } from 'react-router-dom';

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

   return (
      <Box
         className='drawer-wrapper'
         onClick={handleDrawerToggle}
         sx={{ textAlign: 'center' }}
      >
         <DrawerHeader>
            <Toolbar sx={{ minWidth: '100%', display: 'flex', justifyContent: 'space-between' }}>
               <Image
                  src={logoDark}
                  alt='Designo'
                  width={194}
                  height={26}
                  style={{ transform: 'translateY(2px)' }}
               />
               <Image
                  src={closeIcon}
                  alt='Close'
                  width={20}
                  height={20}
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
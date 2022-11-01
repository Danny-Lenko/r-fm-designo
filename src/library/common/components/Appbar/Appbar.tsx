import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon'
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logoDark from '../../../../resources/assets/shared/desktop/logo-dark.png'
import { ReactComponent as HamburgerIcon } from '../../../../resources/assets/shared/mobile/icon-hamburger.svg'
import AppbarDrawer from './AppbarDrawer';
import { NAVITEMS } from '../../constants/contstants';
import { wrapperStyles, drawerStyles } from './appbarStyles';
import Container from '@mui/material/Container';

export default function Appbar() {
   const [mobileOpen, setMobileOpen] = React.useState(false);

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

   return (
      <Box sx={wrapperStyles}>
         <AppBar position='relative' component="nav" color='transparent' elevation={0} >
            <Container maxWidth='lg'>
               <Toolbar>
                  {/* Logo image */}
                  <Box
                     component='img'
                     display='block'
                     alt='logo'
                     sx={{ width: '194px', transform: 'translateY(2px)' }}
                     src={logoDark}
                  >
                  </Box>
                  {/* Burget btn */}
                  <IconButton
                     color="inherit"
                     aria-label="open drawer"
                     edge="start"
                     onClick={handleDrawerToggle}
                     sx={{ ml: 'auto', display: { sm: 'none' } }}
                  >
                     <SvgIcon
                        sx={{ transform: 'translateY(2px)' }}
                        component={HamburgerIcon}
                        inheritViewBox
                     />
                  </IconButton>
                  {/* Links */}
                  <Box sx={{ display: { xs: 'none', sm: 'block' }, ml: 'auto' }}>
                     {NAVITEMS.map((item) => (
                        <Button key={item} sx={{ color: 'greyCustom.dark' }}>
                           {item}
                        </Button>
                     ))}
                  </Box>
               </Toolbar>
            </Container>
         </AppBar>

         {/* Drawer */}
         <Box component="nav">
            <Drawer
               anchor="top"
               variant="persistent"
               open={mobileOpen}
               onClose={handleDrawerToggle}
               ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
               }}
               sx={drawerStyles}
            >
               {
                  <AppbarDrawer handleDrawerToggle={handleDrawerToggle} />
               }
            </Drawer>
         </Box>

      </Box>

   );
}

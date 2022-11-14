import { useState } from 'react'
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
import { NAVITEMS } from '../../constants/constants';
import { wrapperStyles, drawerStyles } from './appbarStyles';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

export default function Appbar() {
   const [mobileOpen, setMobileOpen] = useState(false);
   const navigate = useNavigate()

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

   return (
      <Box sx={wrapperStyles} component='header'>
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
                  <Box className='links-box' >
                     {NAVITEMS.map((item) => (
                        <Button
                           onClick={() => navigate(item.path)}
                           key={item.title} >
                           {item.title}
                        </Button>
                     ))}
                  </Box>
               </Toolbar>
            </Container>
         </AppBar>

         {/* Drawer */}
         <Box component="nav" >
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
                  <Box minHeight='99.9vh' display='flex' sx={{ flexDirection: 'column' }}>
                     <AppbarDrawer
                        handleDrawerToggle={handleDrawerToggle}
                     />
                     <Box minHeight='100%' sx={{ flexGrow: 1, bgcolor: 'rgba(0, 0, 0, 0.5)' }}></Box>
                  </Box>
               }
            </Drawer>
         </Box>
      </Box>

   );
}

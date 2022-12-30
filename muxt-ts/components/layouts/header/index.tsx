import { useState } from 'react'
import Box from '@mui/material/Box';
import HeaderDrawer from './headerDrawer';
import HeaderAppbar from './headerAppbar';
import { styles } from './styles';
// import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
   const [mobileOpen, setMobileOpen] = useState(false);
   // const navigate = useNavigate()
   // const location = useLocation()

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

   return (
      <Box sx={styles} component='header'>
         <HeaderAppbar 
            handleDrawerToggle={handleDrawerToggle} 
         />

         <HeaderDrawer
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
         />

         <Box 
            className='overlay' 
            sx={{ display: mobileOpen ? 'block' : 'none' }}
         ></Box>
      </Box>

   );
}

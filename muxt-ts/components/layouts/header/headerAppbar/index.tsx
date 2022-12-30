import AppBar from "@mui/material/AppBar"
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import SvgIcon from "@mui/material/SvgIcon"
import Image from 'next/image'
import logoDark from '../../../../public/assets/shared/desktop/logo-dark.png'
import hamburgerIcon from '../../../../public/assets/shared/mobile/icon-hamburger.svg'
import { NAVITEMS } from "../../../../lib/utils/constants"
import { styles } from './styles'

const HeaderAppbar = ({ handleDrawerToggle } :any) => {
   return (
      <AppBar 
         component="nav" 
         sx={styles} 
         position='relative'  
         color='transparent' 
         elevation={0} 
      >
         <Container maxWidth='lg'>
            <Toolbar>
               {/* Logo image */}
               <Image
                  src={logoDark}
                  alt="Picture of the author"
                  width={194}
                  height={26}
                  className='logo'
               />
               {/* Burget btn */}
               <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className='burger'
               >
                  <SvgIcon component={hamburgerIcon} inheritViewBox />
               </IconButton>
               {/* Links */}
               <Box className='links-box' >
                  {NAVITEMS.map((item) => (
                     <Button
                        // disabled={location.pathname === item.path ? true : false}
                        // onClick={() => navigate(item.path)}
                        key={item.title}
                        className='link-btn'
                     >
                        {item.title}
                     </Button>
                  ))}
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   );
}

export default HeaderAppbar;
import { Box } from "@mui/material"
import greyDropTop from '../../../../resources/assets/home/desktop/grey-drop-top.svg'
import greyDropBottom from '../../../../resources/assets/home/desktop/grey-drop-bottom.svg'

const GreyDrop = ({typeTop, margTop}: {typeTop:boolean, margTop:string}) => {

   const dropStyles = {
      backgroundRepeat: 'no-repeat',
      minWidth: typeTop ? '100%' : '1000px',
      minHeight: '700px',
      position: 'absolute',
      zIndex: -1,
      backgroundImage: typeTop ? `url(${greyDropTop})` : `url(${greyDropBottom})`,
      // top: typeTop ? '350px' : '1730px',
      top: margTop,
      left: typeTop ? 0 : 'unset',
      right: !typeTop ? 0 : 'unset',
      visibility: {xs: 'hidden', md: 'visible'}
   }

   return (
      <Box sx={dropStyles}></Box>
   );
}

export default GreyDrop;
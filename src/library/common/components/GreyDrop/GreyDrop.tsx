import { Box } from "@mui/material"
import greyDropTop from '../../../../resources/assets/home/desktop/grey-drop-top.svg'
import greyDropBottom from '../../../../resources/assets/home/desktop/grey-drop-bottom.svg'

const GreyDrop = ({top}: {top:boolean}) => {

   const dropStyles = {
      backgroundRepeat: 'no-repeat',
      minWidth: top ? '100%' : '1000px',
      minHeight: '700px',
      position: 'absolute',
      zIndex: -1,
      backgroundImage: top ? `url(${greyDropTop})` : `url(${greyDropBottom})`,
      top: top ? '350px' : '1730px',
      left: top ? 0 : 'unset',
      right: !top ? 0 : 'unset',
      visibility: {xs: 'hidden', md: 'visible'}
   }

   return (
      <Box sx={dropStyles}></Box>
   );
}

export default GreyDrop;
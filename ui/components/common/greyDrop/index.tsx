import { Box } from "@mui/material"
const GreyDrop = ({typeTop, margTop, margLeft}: {typeTop:boolean, margTop:string, margLeft?:string}) => {

   const dropStyles = {
      backgroundRepeat: 'no-repeat',
      minWidth: typeTop ? '100%' : '1000px',
      minHeight: '700px',
      position: 'absolute',
      zIndex: -1,
      backgroundImage: typeTop ? `url(/assets/home/desktop/grey-drop-top.svg)` : `url(/assets/home/desktop/grey-drop-bottom.svg)`,
      top: margTop,
      left: margLeft ? margLeft : typeTop ? 0 : 'unset',
      right: !typeTop ? 0 : 'unset',
      visibility: {xs: 'hidden', md: 'visible'},
      overflow: 'hidden'
   }

   return (
      <Box sx={dropStyles}></Box>
   );
}

export default GreyDrop;
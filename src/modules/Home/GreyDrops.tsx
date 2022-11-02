import { Box } from "@mui/material";
import { ReactComponent as topGreyDrop } from '../../resources/assets/home/desktop/top-grey-drop.svg'
import { ReactComponent as greyDropTop } from '../../resources/assets/home/desktop/grey-drop-top.svg'

import { ReactComponent as bottomGreyDrop } from '../../resources/assets/home/desktop/bottom-grey-drop.svg'
import SvgIcon from '@mui/material/SvgIcon'



const GreyDrops = () => {


   return (
      <Box minHeight='700px' minWidth='100%' className="grey-drops"
         sx={{position: 'absolute', top: 350, left: 0, zIndex: -1}}
      >
         {/* <SvgIcon
            component={greyDropTop}
            inheritViewBox
         /> */}
      </Box>

   );
}

export default GreyDrops;
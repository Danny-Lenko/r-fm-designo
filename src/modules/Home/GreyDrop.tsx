import { Box } from "@mui/material"

const GreyDrop = ({dropClass}: {dropClass:string}) => {
   return (
      // styles are in index.css
      <Box className={`grey-drop ${dropClass}`}></Box>
   );
}

export default GreyDrop;
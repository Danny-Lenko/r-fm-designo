import { Box } from "@mui/material"

const BcgBulb = ({ className }: { className: string }) => {
   const styles = {
      position: 'absolute',
      minHeight: '700px',
      backgroundRepeat: 'no-repeat',
      zIndex: -1,
      visibility: { xs: 'hidden', md: 'visible' },
      overflow: 'hidden'
   }

   return (
      <Box sx={styles} className={className}></Box>
   );
}

export default BcgBulb;
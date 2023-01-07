export const styles = {
   mb: {
      xs: 10,
      sm: 4
   },
   textAlign: { xs: 'center', sm: 'start', md: 'center' },
   justifyContent: 'center',

   '& svg': {
      width: 202,
      height: 202,
   },
   
   '& .text-box': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      pl: {sm: 4, md: 0},
      '& .MuiTypography-h3': {
         textTransform: 'uppercase',
         mt: {xs: 5, sm: 0, md: 5},
         mb: {xs: 4, sm: 2, md: 4}
      }
   }
}
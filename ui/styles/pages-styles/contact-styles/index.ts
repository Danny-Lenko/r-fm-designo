export const styles = {
   position: 'relative',

   '& .bulb-box': {
      position: 'absolute', 
      bottom: -120, 
      right: 0,
      zIndex: -2, 
      display: { xs: 'none', md: 'block' },
      '& .bulb': {
         width: '100%',
         height: '100%'
      },
   },

   '& .margin-box': {
      border: 1,
      height: {xs: 150, sm: 0, md: 50}
   }
}
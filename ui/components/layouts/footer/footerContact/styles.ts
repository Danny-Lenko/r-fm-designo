export const styles = {
   mt: { xs: 1, sm: 72 / 8 },
   width: '100%',
   color: 'common.white',
   display: 'flex',
   justifyContent: 'space-between',
   flexDirection: { xs: 'column', sm: 'row' },

   '& .text-box': {
      textAlign: { xs: 'center', sm: 'unset' },
      width: { xs: '100%', sm: '60%' },
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: { xs: 'center', sm: 'unset' },
      flexDirection: { xs: 'column', sm: 'row' },
      gap: { xs: 5, sm: 1 },
      opacity: '50%'
   },

   '& .icons-box': {
      mt: 5,
      alignSelf: { xs: 'center', sm: 'flex-end' },
      '& svg': {
         cursor: 'pointer',
         color: 'peachCustom.main',
         ml: 2,
         transition: 'all 0.3s ease-out',
         '&:hover': {
            color: 'peachCustom.light'
         }
      },
   }
}

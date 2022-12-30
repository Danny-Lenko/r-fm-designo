export const styles = {
   position: 'relative',
   width: '100%',
   display: 'flex',
   justifyContent: 'space-between',
   flexDirection: { xs: 'column', sm: 'row' },
   '&::after': {
      content: '""',
      width: '100%',
      height: '1px',
      backgroundColor: 'common.white',
      opacity: { xs: 0, sm: 0.1 },
      position: 'absolute',
      bottom: -40
   },

   '& .logo-box': {
      display: 'flex',
      justifyContent: { xs: 'center', sm: 'unset' },
      alignItems: 'center',
      '& img': {
         display: 'block',
         mx: 'auto',
         alignSelf: 'center',
      }
   },

   '& .links-box': {
      position: 'relative',
      color: 'common.white',
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      mt: { xs: 59 / 8, sm: 0 },
      textAlign: 'center',
      '&::before': {
         content: '""',
         width: '100%',
         height: '1px',
         backgroundColor: 'common.white',
         opacity: { xs: 0.1, sm: 0 },
         position: 'absolute',
         top: -28,
      },

      // link buttons
      '& .MuiButtonBase-root': {
         color: 'common.white',
         fontSize: 14 / 16 + 'rem',
         letterSpacing: '2px',
         fontWeight: 400,
         mb: { xs: 3, sm: 0 },
         width: 'max-content',
         mx: 'auto',
         '&::after': {
            content: '""',
            width: '85%',
            height: '1px',
            backgroundColor: 'peachCustom.main',
            position: 'absolute',
            bottom: 10,
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: 0,
            transition: 'all 0.3s ease-out',
         },
         '&:hover::after': {
            opacity: 1
         }
      }
   }
}
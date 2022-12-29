export const footerStyles = (location:any) => ({
   pt: {
      xs: location.pathname === '/contact' ? 88 / 8 : 253 / 8,
      sm: 166 / 8,
      md: 144 / 8
   },
   pb: 72 / 8,
   zIndex: -100,
   backgroundColor: 'common.black',
   mt: location.pathname === '/contact' ? 163 / 8 : { xs: (64 - 253) / 8, sm: -9 },
   // upper-box
   '& .upper-box': {
      position: 'relative',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: { xs: 'column', sm: 'row' },
      '& img': {
         maxWidth: '202px',
         alignSelf: 'center',
      },
      '&__links': {
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
            opacity: {xs: 0.1, sm: 0},
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
   },
   '& .upper-box::after': {
      content: '""',
      width: '100%',
      height: '1px',
      backgroundColor: 'common.white',
      opacity: {xs: 0, sm: 0.1},
      position: 'absolute',
      bottom: -40
   },
   // lower-box
   '& .lower-box': {
      mt: { xs: 1, sm: 72 / 8 },
      width: '100%',
      color: 'common.white',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: { xs: 'column', sm: 'row' },
      '&__text': {
         textAlign: { xs: 'center', sm: 'unset' },
         width: { xs: '100%', sm: '60%' },
         display: 'flex',
         justifyContent: 'space-between',
         alignItems: { xs: 'center', sm: 'unset' },
         flexDirection: { xs: 'column', sm: 'row' },
         gap: { xs: 5, sm: 1 },
         opacity: '50%'
      },
      '&__social': {
         mt: 5,
         alignSelf: { xs: 'center', sm: 'flex-end' },
         '& .MuiSvgIcon-root': {
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
})

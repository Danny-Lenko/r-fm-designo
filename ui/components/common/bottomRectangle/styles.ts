export const styles = {
   width: '100%',
   borderRadius: '15px',
   background: `#E7816B url('/assets/shared/desktop/bg-pattern-call-to-action.svg') 100% 50% no-repeat`,
   display: 'flex',
   flexDirection: { xs: 'column', md: 'row' },
   px: { xs: 3, sm: 7, md: 12 },
   py: { xs: 8, sm: 7, md: 9 },
   alignItems: { xs: 'center', md: 'unset' },
   gap: 4,
   zIndex: 10,

   '& .content-box': {
      textAlign: { xs: 'center', md: 'start' },
      color: 'common.white',
      width: { xs: '100%', sm: '75%', md: '50%' },
      '& .MuiTypography-h2': {
         mx: { xs: 'auto', md: 0 },
         maxWidth: '310px',
         mb: 1
      }
   },

   '& .btn-box': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexGrow: 1
   }
}
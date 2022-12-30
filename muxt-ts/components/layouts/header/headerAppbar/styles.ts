export const styles = {
   '& .logo': {
      transform: 'translateY(2px)', 
      cursor: 'pointer'
   },

   '& .burger': { 
      ml: 'auto', 
      display: { sm: 'none' },
      '& svg': {
         transform: 'translateY(1px)'
      }
   },

   '& .links-box': {
      display: { xs: 'none', sm: 'block' },
      ml: 'auto',
   },

   '& .link-btn': {
      position: 'relative',
      color: 'greyCustom.dark',
      fontWeight: 400,
      fontSize: 14 / 16 + 'rem',
      letterSpacing: '2px',
      '&::after': {
         content: '""',
         width: '85%',
         height: '1px',
         backgroundColor: 'peachCustom.light',
         position: 'absolute',
         bottom: 10,
         left: '50%',
         transform: 'translateX(-50%)',
         opacity: 0,
         transition: 'all 0.3s ease-out',
      },
      '&:hover::after': {
         opacity: 1
      },
      '&:disabled': {
         color: 'peachCustom.light'
      }
   }
}
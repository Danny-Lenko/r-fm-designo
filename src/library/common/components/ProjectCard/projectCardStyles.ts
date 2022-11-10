export const projectCardStyles = {
   display: 'flex',
   flexDirection: { xs: 'column', sm: 'row', md: 'column' },
   mb: {xs: 1, sm: 0},
   '& img': {
      width: { xs: '100%', sm: '50%', md: '100%' },
      borderTopLeftRadius: '15px',
      borderTopRightRadius: { xs:'15px', sm: 0, md: '15px' },
      borderBottomLeftRadius: { sm: '15px', md: 0 }
   },
   '& .content-box': {
      p: 4,
      textAlign: 'center',
      backgroundColor: 'greyCustom.light',
      borderBottomLeftRadius: { xs:'15px', sm: 0, md: '15px' },
      borderBottomRightRadius: '15px',
      borderTopRightRadius: { sm: '15px', md: 0 },
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: { sm: 'center', md: 'unset' },
      cursor: 'pointer',
      transition: 'all 0.4s ease-out',
      '& .MuiTypography-h3': {
         mb:2,
         textTransform: 'uppercase',
         color: 'peachCustom.main'
      },
      '&:hover': {
         backgroundColor: 'peachCustom.main'
      },
      '&:hover *': {
         color: 'common.white'
      }
   }
}
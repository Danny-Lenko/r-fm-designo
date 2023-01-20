export const styles = (
   imgXs:string, 
   imgSm:string | undefined, 
   imgMd:string | undefined
) => ({
   position: 'relative',
   cursor: 'pointer',
   backgroundColor: 'peachCustom.main',
   borderRadius: '15px',
   overflow: 'hidden',
   '&:hover': {
      zIndex: 2,
      '& .img': {
         transform: 'scale(1.2)',
         opacity: 0.3
      }
   },
   '&.highItem': {
      gridRowStart: 1,
      gridRowEnd: { xs: 1, md: 'span 2' }
   },

   // img box
   '& .img': {
      width: '100%',
      height: '100%',
      borderRadius: '15px',
      backgroundBlendMode: 'darken',
      transition: `
         transform 750ms cubic-bezier(.5, 0, .5, 1),
         opacity 250ms linear
      `,
      background: {
         xs: `rgba(0,0,0,0.5) url(${ imgXs }) 0 0/cover no-repeat`,
         sm: `rgba(0,0,0,0.5) url(${ imgSm ? imgSm : imgXs }) 0 0/cover no-repeat`,
         md: `rgba(0,0,0,0.5) url(${ imgMd ? imgMd : imgXs }) 0 0/cover no-repeat`
      }
   },

   // typography items
   '& .textbox': {
      width: '100%',
      textAlign: 'center',
      zIndex: 3,
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      
      '& .MuiTypography-h2, & .MuiTypography-body1': {
         textTransform: 'uppercase',
         color: 'common.white',
         px: 3
      },
      
      '& .MuiTypography-body1': {
         fontSize: 15 / 16 + 'rem',
         letterSpacing: '5px',
         display: 'inline-flex',
         position: 'relative',
         mt: 3,
         '& .MuiSvgIcon-root': {
            position: 'absolute',
            right: -5,
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: 'inherit',
            color: 'peachCustom.main'
         }
      }
   }
})
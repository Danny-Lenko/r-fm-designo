import DesingsWebImgDesk from '../../../resources/assets/home/desktop/image-web-design-large.jpg'
import DesignsWebImgTabl from '../../../resources/assets/home/tablet/image-web-design.jpg'
import DesignsWebImgMob from '../../../resources/assets/home/mobile/image-web-design.jpg'
import DesingsAppImgDesk from '../../../resources/assets/home/desktop/image-app-design.jpg'
import DesignsAppImgTabl from '../../../resources/assets/home/tablet/image-app-design.jpg'
import DesignsAppImgMob from '../../../resources/assets/home/mobile/image-app-design.jpg'
import DesignsGraphicsImgDesk from '../../../resources/assets/home/desktop/image-graphic-design.jpg'
import DesignsGraphicsImgTabl from '../../../resources/assets/home/tablet/image-graphic-design.jpg'
import DesignsGraphicsImgMob from '../../../resources/assets/home/mobile/image-graphic-design.jpg'

function assembleBg(img:string) {
   return `rgba(0,0,0,0.5) url(${img}) 0 0/cover no-repeat`
}

export const homeDesignsStyles = {
   minHeight: { xs: 800, sm: 640 },
   display: 'grid',
   gridTemplateColumns: { xs: '1f', md: '1fr 1fr' },
   gridTemplateRows: { xs: '1fr 1fr 1f', md: '1fr 1fr' },
   gridTemplateAreas: {
      xs: `
         "web"
         "app"
         "graphics"
      `,
      md: `
         "web app"
         "web graphics"
      `
   }
      ,
   gap: '25px',
   // grid item
   '& .designs__item': {
      position: 'relative',
      cursor: 'pointer',
      backgroundColor: 'peachCustom.main',
      borderRadius: '15px',
      overflow: 'hidden',
      '&_web': {
         gridArea: 'web'
      },
      '&_app': {
         gridArea: 'app'
      },
      '&_graphics': {
         gridArea: 'graphics'
      }
   },

   '& .designs__item:hover': {
      zIndex: 2,
      '& .designs__img': {
         transform: 'scale(1.2)',
         opacity: 0.3
      }
   },
   // img box
   '& .designs__img': {
      width: '100%',
      height: '100%',
      borderRadius: '15px',
      backgroundBlendMode: 'darken',
      transition: 
        `transform 750ms cubic-bezier(.5, 0, .5, 1),
        opacity 250ms linear`,
      '&_web': {
         background: {
            xs: assembleBg(DesignsWebImgMob),
            sm: assembleBg(DesignsWebImgTabl),
            md: assembleBg(DesingsWebImgDesk)
         }
      },
      '&_app': {
         background: {
            xs: assembleBg(DesignsAppImgMob),
            sm: assembleBg(DesignsAppImgTabl),
            md: assembleBg(DesingsAppImgDesk)
         }
      },
      '&_graphics': {
         background: {
            xs: assembleBg(DesignsGraphicsImgMob),
            sm: assembleBg(DesignsGraphicsImgTabl),
            md: assembleBg(DesignsGraphicsImgDesk)
         }
      }
   },
   // typography items
   '& .designs__textbox': {
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
}

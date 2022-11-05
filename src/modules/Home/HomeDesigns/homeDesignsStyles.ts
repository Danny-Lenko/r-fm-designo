import DesingsWebImg from '../../../resources/assets/home/desktop/image-web-design-large.jpg'
import DesingsAppImg from '../../../resources/assets/home/desktop/image-app-design.jpg'
import DesingsGraphicsImg from '../../../resources/assets/home/desktop/image-graphic-design.jpg'

export const homeDesignsStyles = {
   minHeight: 640,
   display: 'grid',
   gridTemplateColumns: '1fr 1fr',
   gridTemplateRows: '1fr 1fr',
   gridTemplateAreas:
      `"web app"
      "web graphics"`,
   gap: '25px',

   '& .designs__item': {
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

   '& .designs__img': {
      width: '100%',
      height: '100%',
      borderRadius: '15px',
      backgroundBlendMode: 'darken',
      transition: 
        `transform 750ms cubic-bezier(.5, 0, .5, 1),
        opacity 250ms linear`,
      '&_web': {
         background: `rgba(0,0,0,0.5) url(${DesingsWebImg}) 0 0/cover no-repeat`
      },
      '&_app': {
         background: `rgba(0,0,0,0.5) url(${DesingsAppImg}) 0 0/cover no-repeat`
      },
      '&_graphics': {
         background: `rgba(0,0,0,0.5) url(${DesingsGraphicsImg}) 0 0/cover no-repeat`
      }
   }
}

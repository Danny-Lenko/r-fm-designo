import { SECTIONMARGINBOTTOM } from "../../../../lib/utils/constants";

function assembleImgBackground(img: string) {
   return `url(${img}) 50% 50%/cover no-repeat`
}

export const styles = {
   display: 'flex',
   flexDirection: { xs: 'column-reverse', md: 'row' },
   mb: { xs: 0, sm: SECTIONMARGINBOTTOM / 8 },
   borderRadius: '15px',

   '& .content-box': {
      color: 'common.white',
      backgroundColor: 'peachCustom.main',
      backgroundImage: { 
         xs: `url(/assets/about/mobile/bg-pattern-hero-about-mobile.svg)`, 
         sm: `url(/assets/about/desktop/bg-pattern-hero-about-desktop.svg)` 
      },
      backgroundPosition: { xs: '100% 25%', sm: '-100px 125%', md: '100% 100%' },
      backgroundRepeat: 'no-repeat',
      maxWidth: { xs: '100%', md: '60%' },
      textAlign: { xs: 'center', md: 'start' },
      py: { xs: 10, sm: 8, md: 135 / 8 },
      px: { xs: 3, sm: 7, md: 95 / 8 },
      borderTopLeftRadius: { md: '15px' },
      borderBottomRightRadius: { sm: '15px', md: 'unset' },
      borderBottomLeftRadius: { sm: '15px' },
      '& .MuiTypography-h1': {
         mb: { xs: 3, sm: 4 }
      }
   },
   
   '& .image-box': {
      borderTopRightRadius: { sm: '15px', md: '15px' },
      borderBottomRightRadius: { xs: 0, md: '15px' },
      borderTopLeftRadius: { sm: '15px', md: 0 },
      width: '100%',
      minHeight: '320px',
      background: {
         xs: assembleImgBackground('/assets/about/mobile/image-about-hero.jpg'),
         sm: assembleImgBackground('/assets/about/tablet/image-about-hero.jpg'),
         md: assembleImgBackground('/assets/about/desktop/image-about-hero.jpg')
      }
   }
}
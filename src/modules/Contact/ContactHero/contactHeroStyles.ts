import { SECTIONMARGINBOTTOM } from "../../../../lib/utils/constants"
import IconError from '../../../resources/assets/contact/desktop/icon-error.svg'
import CircleImgMd from '../../../resources/assets/contact/desktop/bg-pattern-hero-desktop.svg'
import CircleImgXs from '../../../resources/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg'

export const contactHeroStyles = {
   display: 'flex',
   flexDirection: { xs: 'column', md: 'row' },
   backgroundColor: 'peachCustom.main',
   backgroundImage: { xs: `url(${CircleImgXs})`, sm: `url(${CircleImgMd})` },
   backgroundRepeat: 'no-repeat',
   backgroundPosition: { xs: '25% top', sm: '-100px -100px', md: 'left bottom' },
   borderRadius: { sm: '15px' },
   py: { xs: 72 / 8, md: 55 / 8 },
   px: { xs: 3, sm: 58 / 8, md: 96 / 8 },
   color: 'common.white',
   mb: SECTIONMARGINBOTTOM / 8,
   justifyContent: 'space-between',
   gap: 1,
   '& .text-box': {
      width: { xs: '100%', sm: '90%', md: '45%' },
      textAlign: { xs: 'center', sm: 'start' },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 3
   },
   // the form styles
   '& .form-box': {
      width: { xs: '100', md: '50%' },
      '& .MuiTextField-root': {
         mt: 2,
         position: 'relative',
         '& .MuiInputLabel-root': {
            color: 'common.white',
            opacity: 0.7,
            ml: 2
         },
         '& .MuiInput-root': {
            color: 'common.white',
            pl: 2,
            pb: 1,
            '&:before': {
               borderColor: 'common.white',
               opacity: 0.5
            }
         },
         '& .MuiFormHelperText-root.Mui-error': {
            position: 'absolute',
            pr: 4,
            bottom: 12,
            right: 0,
            color: 'common.white',
            fontStyle: 'italic',
            opacity: 0.8,
            backgroundImage: `url(${IconError})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '99% 100%',
         }
      },
      '& .MuiInput-underline:after': {
         borderBottomColor: 'common.white'
      },
      // prevents chrome autofill styling
      '& input:-webkit-autofill': {
         transition: 'background-color 600000s 0s, color 600000s 0s'
      },
      '& input:-webkit-autofill:focus': {
         transition: 'background-color 600000s 0s, color 600000s 0s'
      },
   }
}

import { SECTIONMARGINBOTTOM } from '../../../lib/utils/constants';

export const styles = (id: number) => {
   const circles = (id % 3 === 0) ? '/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg'
      : (id % 2 === 0) ? '/assets/app-design/desktop/bg-pattern-intro-app.svg'
      : '/assets/web-design/desktop/bg-pattern-intro-web.svg'

   return {
      mb: SECTIONMARGINBOTTOM / 8,
      width: '100%',
      borderRadius: { sm: '15px' },
      background: `#E7816B url(${circles}) 100% 50% no-repeat`,
      textAlign: 'center',
      py: 64 / 8,
      color: 'common.white',

      '& .MuiTypography-h1': {
         mb: 24 / 8,
         width: '95%',
         mx: 'auto'
      },

      '& .MuiTypography-body1': {
         width: { xs: '95%', sm: '70%', md: '38%' },
         mx: 'auto'
      }
   }
}
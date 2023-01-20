import { SECTIONMARGINBOTTOM } from '../../../../lib/utils/constants';

export const styles = (id: number, length: number) => ({
   display: 'flex',
   flexDirection: { 
      xs: 'column', 
      md: id % 2 !== 0 ? 'row-reverse' : 'row' 
   },
   gap: { sx: 0, sm: '30px' },
   mb: id === length ? SECTIONMARGINBOTTOM / 8 : { xs: 40 / 8, sm: 120 / 8, md: 4 },

   '& .map-box': {
      minWidth: '30%',
      minHeight: { xs: '320px', md: 'unset' },
      borderRadius: '15px',
      '& .map-container': {
         minHeight: '320px',
         height: '100%',
         width: '100%',
         borderRadius: { sm: '15px' }
      }
   },

   '& .text-box': {
      textAlign: { xs: 'center', sm: 'start' },
      backgroundColor: '#FDF3F0',
      backgroundImage: `url(/assets/locations/desktop/circles.svg)`,
      backgroundPosition: '0 0',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      py: { xs: 10, sm: 11 },
      px: { sm: 75 / 8, md: 95 / 8 },
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      flexWrap: 'wrap',
      gap: '24px',
      borderRadius: { sm: '15px' },
      '& .MuiTypography-h2': {
         width: '100%',
         color: 'peachCustom.main',
      },
      '&__contact': {
         flexGrow: 1
      }
   }
})
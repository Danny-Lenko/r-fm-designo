import { SECTIONMARGINBOTTOM } from '../../../../lib/utils/constants'
import { IAboutContentItem } from '../../../../lib/interfaces/interfaces'

export const styles = ({ props }: { props: IAboutContentItem }) => {
   const {
      flexDirMd,
      imgXs,
      imgSm,
      imgMd,
   } = props

   return {
      mb: SECTIONMARGINBOTTOM / 8,
      borderRadius: '15px',
      display: 'flex',
      flexDirection: { xs: 'column', md: flexDirMd },

      '& .content-box': {
         backgroundImage: `url(/assets/about/desktop/content-circles.svg)`,
         backgroundPosition: '-50% 100%',
         backgroundRepeat: 'no-repeat',
         borderTopLeftRadius: { md: flexDirMd !== 'row' ? '15px' : 0 },
         borderTopRightRadius: { md: flexDirMd === 'row' ? '15px' : 0 },
         borderBottomRightRadius: { sm: '15px', md: flexDirMd === 'row' ? '15px' : 0 },
         borderBottomLeftRadius: { sm: '15px', md: flexDirMd !== 'row' ? '15px' : 0 },
         backgroundColor: '#FDF3F0',
         textAlign: { xs: 'center', md: 'start' },
         py: { xs: 10, sm: 68 / 8, md: 154 / 8 },
         px: { xs: 3, sm: 58 / 8, md: 96 / 8 },
         maxWidth: { md: '60%' },
         '& .MuiTypography-h2': {
            color: 'peachCustom.main',
            mb: 3
         },
         '& .MuiTypography-body1:first-of-type': {
            mb: 3
         }
      },

      '& .image-box': {
         borderTopLeftRadius: { sm: '15px', md: flexDirMd !== 'row' ? '0' : '15px' },
         borderTopRightRadius: { sm: '15px', md: flexDirMd === 'row' ? 0 : '15px' },
         borderBottomRightRadius: { md: flexDirMd !== 'row' ? '15px' : 0 },
         borderBottomLeftRadius: { md: flexDirMd === 'row' ? '15px' : 0 },
         width: '100%',
         minHeight: '320px',
         backgroundImage: {
            xs: `url(${imgXs})`,
            sm: `url(${imgSm})`,
            md: `url(${imgMd})`
         },
         backgroundRepeat: 'no-repeat',
         backgroundPosition: '50% 50%',
         backgroundSize: 'cover'
      }
   }
}
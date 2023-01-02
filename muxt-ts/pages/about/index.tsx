import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import AboutHero from '../../components/domains/about/aboutHero';
import AboutContent from '../../components/domains/about/aboutContent';
import worldImgXs from '/public/assets/about/mobile/image-world-class-talent.jpg'
import worldImgSm from '/public/assets/about/tablet/image-world-class-talent.jpg'
import worldImgMd from '/public/assets/about/desktop/image-world-class-talent.jpg'
import realImgXs from '/public/assets/about/mobile/image-real-deal.jpg'
import realImgSm from '/public/assets/about/tablet/image-real-deal.jpg'
import realImgMd from '/public/assets/about/desktop/image-real-deal.jpg'

// import SeeLocationSection from '../../../components/common/SeeLocationSection/SeeLocationSection';
import BottomRectangle from '../../components/common/bottomRectangle';
import GreyDrop from '../../../components/common/GreyDrop/GreyDrop';
import { DROPHOMETOP } from '../../lib/utils/constants';

const worldContentSection = {
   flexDirMd: 'row',
   imgXs: worldImgXs,
   imgSm: worldImgSm,
   imgMd: worldImgMd,
   heading: 'World-class talent',
   paragraphOne: 'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.',
   paragraphTwo: 'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.',
}

const realContentSection = {
   flexDirMd: 'row-reverse',
   imgXs: realImgXs,
   imgSm: realImgSm,
   imgMd: realImgMd,
   heading: 'The real deal',
   paragraphOne: 'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.',
   paragraphTwo: 'We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.',
}

const About = () => {
   return (
      <Box 
         component="main" 
         sx={{ 
            position: 'relative', 
            overflowX: 'hidden' 
         }}
      >
         <AboutHero />
         {/* <AboutContent props={worldContentSection} /> */}
         {/* <SeeLocationSection /> */}
         {/* <AboutContent props={realContentSection} /> */}
         
         {/* <Container maxWidth='lg'>
            <BottomRectangle />
            <GreyDrop typeTop={true} margTop={DROPHOMETOP} />
            <GreyDrop typeTop={true} margTop='1630px' margLeft='50vw' />
         </Container> */}
      </Box>
   );
}

export default About;
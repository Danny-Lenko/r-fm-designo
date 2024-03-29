import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import AboutHero from '../../components/pageComponents/about/aboutHero';
import AboutContent from '../../components/pageComponents/about/aboutContent';
import SeeLocation from '../../components/common/seeLocation';
import BottomRectangle from '../../components/common/bottomRectangle';
import BcgBulb from '../../components/common/bcgBulb';
import { styles } from '../../styles/pagesStyles/aboutStyles';

const worldContentSection = {
   flexDirMd: 'row',
   imgXs: '/assets/about/mobile/image-world-class-talent.jpg',
   imgSm: '/assets/about/tablet/image-world-class-talent.jpg',
   imgMd: '/assets/about/desktop/image-world-class-talent.jpg',
   heading: 'World-class talent',
   paragraphOne: 'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.',
   paragraphTwo: 'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.',
}

const realContentSection = {
   flexDirMd: 'row-reverse',
   imgXs: '/assets/about/mobile/image-real-deal.jpg',
   imgSm: '/assets/about/tablet/image-real-deal.jpg',
   imgMd: '/assets/about/desktop/image-real-deal.jpg',
   heading: 'The real deal',
   paragraphOne: 'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.',
   paragraphTwo: 'We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.',
}

const About = () => {
   return (
      <Box component="main" sx={styles} >
         <AboutHero />
         <AboutContent props={worldContentSection} />
         <SeeLocation />
         <AboutContent props={realContentSection} />

         <Container maxWidth='lg'>
            <BottomRectangle />
         </Container>

         <BcgBulb className='bulb-top'/>
         <BcgBulb className='bulb-bottom'/>
      </Box>
   );
}

export default About;
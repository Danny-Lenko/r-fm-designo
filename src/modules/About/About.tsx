import Container from '@mui/material/Container'
import AboutHero from './AboutHero/AboutHero';
import AboutContentSection from './AboutContentSection/AboutContentSection';
import worldImgXs from '../../resources/assets/about/mobile/image-world-class-talent.jpg'
import worldImgSm from '../../resources/assets/about/tablet/image-world-class-talent.jpg'
import worldImgMd from '../../resources/assets/about/desktop/image-world-class-talent.jpg'

const About = () => {

   const worldContentSection = {
      flexDirMd: 'row',
      imgXs: worldImgXs,
      imgSm: worldImgSm,
      imgMd: worldImgMd,
      heading: 'World-class talent',
      paragraphOne: 'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.',
      paragraphTwo: 'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.',
   }

   return (
      <>
         <AboutHero />

         <Container maxWidth='lg'>

            <AboutContentSection props={worldContentSection} />

         </Container>
      </>
   );
}

export default About;
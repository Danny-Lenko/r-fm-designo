import { Routes, Route } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ToggleColorMode } from './library/utilities/ToggleColorMode'
import Appbar from './library/common/components/Appbar/Appbar';
import Footer from './library/common/components/Footer/Footer';
// modules
import Home from './modules/Home/Home'
import WebDesign from './modules/WebDesign/WebDesign';
import AppDesign from './modules/AppDesign/AppDesign';
import GraphicDesign from './modules/GraphicDesign/GraphicDesign';
import About from './modules/About/About';
import Locations from './modules/Locations/Locations';
import Contact from './modules/Contact/Contact';
import NotFound from './modules/NotFound/NotFound';

function App() {
  const myColorMode = ToggleColorMode()

  return(
    <ThemeProvider theme = { myColorMode.theme } >
      <CssBaseline />

      <Appbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/web-design' element={<WebDesign />} />
        <Route path='/app-design' element={<AppDesign />} />
        <Route path='/graphic-design' element={<GraphicDesign />} />
        <Route path='/about' element={<About />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </ThemeProvider >
  );
}

export default App;

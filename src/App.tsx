import { Routes, Route } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ToggleColorMode } from './library/utilities/ToggleColorMode'
import Appbar from './library/common/components/Appbar/Appbar';
import Footer from './library/common/components/Footer/Footer';

import Home from './modules/Home/Home'
import WebDesign from './modules/WebDesign/WebDesign';


function App() {
  const myColorMode = ToggleColorMode()

  return(
    <ThemeProvider theme = { myColorMode.theme } >
      <CssBaseline />

      <Appbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/web-design' element={<WebDesign />} />
        {/* <Route path='*' element={<NotFount />} /> */}
      </Routes>

      <Footer />
    </ThemeProvider >
  );
}

export default App;

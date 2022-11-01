import { Routes, Route } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ToggleColorMode } from './library/utilities/ToggleColorMode'
import Appbar from './library/common/components/Appbar/Appbar';
import Home from './modules/Home/Home'

function App() {
  const myColorMode = ToggleColorMode()

  return(
    <ThemeProvider theme = { myColorMode.theme } >
      <CssBaseline />

      <Appbar />

      <Routes>
        <Route path='/' element={<Home />} />

        {/* <Route path='*' element={<NotFount />} /> */}
      </Routes>

    </ThemeProvider >
  );
}

export default App;

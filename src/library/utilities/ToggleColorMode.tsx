import { createContext, useState, useMemo } from 'react'
import { createTheme } from '@mui/material/styles';
import { assembleThemeObj } from './themeConstructor';
// import { useTheme } from '@emotion/react';

const ColorModeContext = createContext({ toggleClrMode: () => { } });

function ToggleColorMode() {
   const [mode, setMode] = useState<'light' | 'dark'>('light');
   const defaultTheme = createTheme()
   console.log(defaultTheme)
   const colorMode = useMemo(
      () => ({
         toggleClrMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
         },
      }),
      [],
   );

   let theme = useMemo(() => createTheme(assembleThemeObj(mode, defaultTheme)), [mode, defaultTheme]);

   return { colorMode, theme }
}

export { ColorModeContext, ToggleColorMode }
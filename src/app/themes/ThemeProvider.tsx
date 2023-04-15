import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  StyledEngineProvider,
  responsiveFontSizes,
  useMediaQuery,
} from '@mui/material';
import {ReactNode, useMemo, useReducer} from 'react';
import {createContext} from 'use-context-selector';
import defaultTheme from './default';

interface IProps {
  children: ReactNode;
}

export const ThemeProviderContext = createContext({
  toggleTheme: () => {return;},
});

const ThemeProvider = (props: IProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const mode = prefersDarkMode ? 'dark' : 'light';
  const [activeTheme, setActiveTheme] = useReducer((state) => (state === 'dark' ? 'light' : 'dark'), mode);

  const theme = useMemo(() => {
    return responsiveFontSizes(
      defaultTheme({
        palette: {mode: activeTheme},
      })
    );
  }, [activeTheme]);

  const contextValue = useMemo(
    () => ({
      toggleTheme: setActiveTheme,
    }),
    []
  );

  return (
    <ThemeProviderContext.Provider value={contextValue}>
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {props.children}
        </MuiThemeProvider>
      </StyledEngineProvider>
    </ThemeProviderContext.Provider>
  );
};

export default ThemeProvider;

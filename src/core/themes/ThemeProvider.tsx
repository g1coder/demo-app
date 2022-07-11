import {ReactNode, useMemo} from 'react';
import {ThemeProvider as MuiThemeProvider, CssBaseline, StyledEngineProvider, createTheme} from '@mui/material';
import defaultTheme from './default';

interface IProps {
  children: ReactNode;
}

const ThemeProvider = (props: IProps) => {
  const theme = useMemo(() => {
    return createTheme(defaultTheme());
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;

import _ from 'lodash';
import {Theme, ThemeOptions} from '@mui/material/styles';
import {createTheme} from '@mui/material';

/**
 *
 * The 'main', 'light' and 'dark' variants are generated using the Color Tool
 * https://material.io/tools/color
 *
 * The rest of shades are generated using the Material palette generator
 * https://material.io/design/color/the-color-system.html#tools-for-picking-colors
 */

const defaultTheme = (themeOptions: Partial<ThemeOptions>): Theme => {
  const palette = _.merge(
    {},
    {
      primary: {
        main: '#1475ec',
        light: '#21b6ff',
        dark: '#002c8f',
      },
      secondary: {
        main: '#aec556',
        light: '#e5ffff',
        dark: '#81b9bb',
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.6)',
        whitePrimary: '#fff',
      },
    },
    themeOptions.palette
  );

  const breakpoints = _.merge(
    {},
    {
      keys: ['xs', 'sm', 'md', 'lg', 'xl', 'exl'],
      values: {
        xs: 0,
        sm: 480,
        md: 768,
        lg: 1024,
        xl: 1440,
        exl: 1800,
      },
    },
    themeOptions.breakpoints
  );

  const typography = _.merge(
    {},
    {
      fontFamily: ['Merriweather', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'].join(','),
      h2: {
        fontWeight: 900,
        lineHeight: 1.2,
        color: palette.text.whitePrimary,
      },
      h3: {
        fontSize: 48,
        fontWeight: 900,
        lineHeight: 1.2,
        color: palette.text.whitePrimary,
      },
      h4: {
        fontSize: 36,
        fontWeight: 900,
        lineHeight: 1.1,
        color: palette.primary.light,
      },
      h5: {
        fontSize: 24,
        fontWeight: 900,
        lineHeight: 1.6,
        color: palette.text.whitePrimary,
      },
      h6: {
        fontSize: 20,
        fontWeight: 500,
        lineHeight: 1.3,
        letterSpacing: '0.15px',
        color: palette.text.whitePrimary,
      },
      subtitle1: {
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 1.6,
        color: palette.primary.light,
      },
      body1: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.6,
        color: palette.text.whitePrimary,
      },
      body2: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 1.4,
        letterSpacing: '0.25px',
        color: palette.text.whitePrimary,
      },
      button: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.4,
        letterSpacing: '1.25px',
      },
      caption: {
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 1.3,
        letterSpacing: '0.4px',
      },
      overline: {
        fontSize: 10,
        fontWeight: 400,
        lineHeight: 1.6,
        letterSpacing: '1.5px',
      },
    },
    themeOptions.typography
  );

  return createTheme({
    ...themeOptions,
    palette,
    breakpoints,
    typography,
  });
};

export default defaultTheme;

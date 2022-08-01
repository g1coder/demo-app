import _ from 'lodash';
import {ThemeOptions} from '@mui/material/styles';

/**
 *
 * The 'main', 'light' and 'dark' variants are generated using the Color Tool
 * https://material.io/tools/color
 *
 * The rest of shades are generated using the Material palette generator
 * https://material.io/design/color/the-color-system.html#tools-for-picking-colors
 */

const defaultTheme = (themeOptions: ThemeOptions = {}): ThemeOptions => {
  const palette = _.merge(
    {},
    {
      primary: {
        main: '#1475ec',
        light: '#21b6ff',
        dark: '#002c8f',
      },
      secondary: {
        main: '#b2ebed',
        light: '#e5ffff',
        dark: '#81b9bb',
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

  const typography = _.merge({}, {
    fontFamily: [
      "Merriweather",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif"
    ].join(",")
  })

  return {palette, breakpoints, typography};
};

export default defaultTheme;

declare module '@mui/material/styles/createPalette' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface TypeText {
    whitePrimary: string;
  }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {TypeText} from '@mui/material/styles/createPalette';

declare module '@mui/styles' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface DefaultTheme extends Theme {}
}

declare module '@mui/material/styles/createPalette' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface TypeText {
    whitePrimary: string;
  }
}

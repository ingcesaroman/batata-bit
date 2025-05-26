import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
      accent: string;
      white: string;
      black: string;
      gray: string;
      lightGray: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
    };
    typography: {
      fontFamily: {
        primary: string;
        secondary: string;
      };
      fontWeight: {
        regular: number | string;
        medium: number | string;
        bold: number | string;
      };
    };
  }
} 
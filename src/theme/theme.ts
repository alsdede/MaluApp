import {createTheme} from '@shopify/restyle';

const palette = {

    primary: '#3CD3C1',
    mainBg: '#06092B',
    lightBg: '#F2F2F2',
    white: '#FAFAFA',
    black: '#030517',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    red: '#FF6347'
};

const theme = createTheme({
  colors: {
    ...palette,
    mainBackground: palette.white,
    
  },
  spacing: {
    xs:4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 34,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {
      // We can define a default text variant here.
    },
  },
  borderRadii: {
    s8: 8,
    s12: 12,
    s16: 16,
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
export default theme;

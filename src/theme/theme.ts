import { DefaultMantineColor, Tuple } from '@mantine/core';
import { gilory } from '@/app/font';

type ExtendedCustomColors =
  | 'brand'
  | 'golden'
  | 'darkBlue'
  | 'lightGrey'
  | 'placeHolder'
  | 'borderColor'
  | 'lightText'
  | 'lightWhite'
  | 'lightBlue'
  | 'grayBorder'
  | 'grey'
  | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}

export const theme = {
  breakpoint: {
    xs: '30em',
    sm: '40em',
    md: '48em',
    lg: '64em',
    xl: '80em',
    '2xl': '96em',
  },
  colors: {
    brand: ['rgba(29, 43, 57, 0.50)'],
    darkBlue: ['#1D2B39'],
    golden: ['#CD9646'],
    lightGrey: ['#F9F9F9'],
    placeHolder: ['#1D2B3966'],
    borderColor: ['#ECECEC'],
    lightText: ['#A0A0A0'],
    lightWhite: ['#FFFFFF66'],
    grayBorder: ['#E8E9EC'],
    lightBlue: [
      'linear-gradient(0deg, rgba(29, 43, 57, 0.39), rgba(29, 43, 57, 0.39))',
    ],
    grey: ['#1D2B3933'],
    greyText: ['#1D2B3980'],
    darkGray: ['#1D2B3999'],
    lightGolder: ['#CD964612'],
  },
  primaryColor: 'golden',
  fontFamily: `${gilory.style.fontFamily}, sans-serif`,
  fontFamilyMonospace: `${gilory.style.fontFamily}, sans-serif`,
  headings: { fontFamily: `${gilory.style.fontFamily}, sans-serif` },
};

export const containerMaxWidth = '1520px';
export const containerMaxWidth2 = '1280px';

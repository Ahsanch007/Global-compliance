import localFont from 'next/font/local';

export const gilory = localFont({
  src: [
    {
      path: '../../public/fonts/Gilroy-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gilroy-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Gilroy-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gilroy-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gilroy-ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gilroy-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-gilory',
});

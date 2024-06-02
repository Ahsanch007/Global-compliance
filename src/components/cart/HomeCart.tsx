'use client';
import { Text } from '@mantine/core';
import React from 'react';
import { cartData } from './cartData';
// import Image from 'next/image';
import { theme } from '@/theme/theme';
import { CartCard } from '../Cards/CartCard';
import { CheackoutCard } from '../Cards/CheackoutCard';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import { useMediaQuery } from '@mantine/hooks';
interface HomeCartProps {
  selectedComponent: string;
  onChangeComponent: (componentName: string) => void;
}

export const HomeCart: React.FC<HomeCartProps> = ({
  selectedComponent,
  onChangeComponent,
}) => {
  // const isLargeScreen = useMediaQuery('(max-width: 1700px)');
  // const isMediumScreen = useMediaQuery('(max-width: 1500px)');
  const handleButtonClick = () => {
    // Call the function from the prop to change the selected component
    onChangeComponent('cart');
  };

  return (
    <>
      <div>
        <div className="my-[2rem]">
          <Text
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '30px',
                // lineHeight: '29.82px',
              },
              fontSize: '45px',
              color: theme.colors.darkBlue,
              lineHeight: '67.5px',
            })}
            className=" font-semibold "
          >
            {cartData.title}
          </Text>
        </div>
        <div className="flex  flex-wrap justify-between">
          <div
            className={`grid max-w-[335px] mx-auto md:mx-0 lg:max-w-[1000px] 2xl:max-w-[1049px]  w-full`}
          >
            <CartCard />
            <CartCard />
            <CartCard />
          </div>
          <div
            className={` 'max-w-[335px] md:max-w-[421px]
            w-full mt-4`}
          >
            <CheackoutCard handleButtonClick={handleButtonClick} />
          </div>
        </div>
        <div className="my-5 max-w-[235px] w-full mx-auto">
          <ButtonPrimary
            sx={{
              color: theme.colors.darkBlue,
              borderRadius: '70px',
              height: '60px',
              width: '100%',
              border: '1px solid #1D2B39',
              fontSize: '18px',
            }}
            className="font-semibold"
          >
            {cartData.certificate}
          </ButtonPrimary>
        </div>
      </div>
    </>
  );
};

'use client';
import { Cart } from '@/components/cart/Cart';
import { HomeCart } from '@/components/cart/HomeCart';
import { cartData } from '@/components/cart/cartData';
import { containerMaxWidth } from '@/theme/theme';
import { Container, Text } from '@mantine/core';
import Image from 'next/image';
import React, { useState } from 'react';

const Page = () => {
  const [selectedComponent, setSelectedComponent] = useState('home');
  const [showAdditionalText, setShowAdditionalText] = useState(false);

  const handleClick = (componentName: string) => {
    setSelectedComponent(componentName);

    // Show additional text when "Cart" is clicked
    if (componentName === 'cart') {
      setShowAdditionalText(true);
    } else {
      setShowAdditionalText(false);
    }
  };
  return (
    <>
      <Container size={containerMaxWidth} px="lg" className="navbar my-[3rem]">
        <div
          className={`${
            showAdditionalText ? 'max-w-[267px]' : 'max-w-[137px]'
          } w-full flex justify-between items-center`}
        >
          <Text
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '16px',
                // lineHeight: '29.82px',
              },
              fontSize: '16px',
              color:
                selectedComponent === 'home' || selectedComponent === 'cart'
                  ? theme.colors.darkBlue
                  : theme.colors.greyText,
              lineHeight: '18.83px',
            })}
            className=" font-medium cursor-pointer"
            onClick={() => handleClick('home')}
          >
            {cartData.home}
          </Text>
          <Image src={cartData.arrow} height={5} width={19} alt="arrow" />
          <Text
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '16px',
                // lineHeight: '29.82px',
              },
              fontSize: '16px',
              color:
                selectedComponent === 'cart'
                  ? theme.colors.darkBlue
                  : theme.colors.greyText,
              lineHeight: '18.83px',
            })}
            className=" font-medium cursor-pointer"
            onClick={() => handleClick('cart')}
          >
            {cartData.cart}
          </Text>
          {showAdditionalText ? (
            <>
              <Image src={cartData.arrow} height={5} width={19} alt="arrow" />
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '16px',
                    // lineHeight: '29.82px',
                  },
                  fontSize: '16px',
                  color: theme.colors.greyText,
                  lineHeight: '18.83px',
                })}
                className=" font-medium cursor-pointer"
              >
                {cartData.checkout}
              </Text>
            </>
          ) : (
            ''
          )}
        </div>
        <div>
          {selectedComponent === 'home' ? (
            <HomeCart
              selectedComponent={selectedComponent}
              onChangeComponent={handleClick}
            />
          ) : (
            <Cart />
          )}
        </div>
      </Container>
    </>
  );
};

export default Page;

import { Text } from '@mantine/core';
import React from 'react';
import { cartData } from '../cart/cartData';
import { theme } from '@/theme/theme';
import Image from 'next/image';
import { useMediaQuery } from '@mantine/hooks';

export const CartCard = () => {
  const isSmallScreen = useMediaQuery('(max-width: 840px)');

  return (
    <div className={`flex ${isSmallScreen ? 'justify-center' : ''}  my-[1rem]`}>
      <div
        className="max-w-[335px] md:hidden w-full rounded-[20px]"
        style={{
          border: '1px solid #EEEEEE',
          boxShadow: '0px 25px 46px -17px #0000000D',
        }}
      >
        <div className=" ">
          <div className="relative">
            <Image
              src={cartData.ship}
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: ' 15px ',
              }}
              width={1000}
              height={1000}
              alt="ship"
            />
            <div className="cross absolute top-[14px] right-[18px]">
              <Image
                src={cartData.cross}
                style={{
                  maxWidth: '15px',
                  height: 'auto',
                  cursor: 'pointer',
                }}
                width={1000}
                height={1000}
                alt="cross"
              />
            </div>
          </div>
          <div className="p-4  w-full  justify-between">
            <div className="title max-w-[300px] flex items-center gap-4 w-full ">
              <div className="icon">
                <Image
                  src={cartData.fatca}
                  style={{ maxWidth: '50px', height: 'auto' }}
                  width={1000}
                  height={1000}
                  alt="fatca"
                />
              </div>
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '18px',
                    // lineHeight: '29.82px',
                  },
                  fontSize: '20px',
                  color: theme.colors.darkBlue,
                  lineHeight: '25px',
                })}
                className=" font-semibold "
              >
                {cartData.scs}
              </Text>
            </div>
            <div className="title max-w-[336px] flex items-center justify-between  w-full ">
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '18px',
                    // lineHeight: '29.82px',
                  },
                  fontSize: '35px',
                  color: theme.colors.darkBlue,
                  lineHeight: '42.31px',
                })}
                className=" font-bold "
              >
                {cartData.value}
              </Text>
              <Text
                sx={{
                  fontSize: '15px',
                  color: theme.colors.darkBlue,
                  lineHeight: '17.4px',
                }}
                className=" font-normal "
              >
                {cartData.subText}
              </Text>
            </div>
          </div>
        </div>
      </div>

      <div
        className="max-w-[1049px] hidden md:block w-full rounded-[20px]"
        style={{
          border: '1px solid #EEEEEE',
          boxShadow: '0px 25px 46px -17px #0000000D',
        }}
      >
        <div className="flex ">
          <div>
            <Image
              src={cartData.ship}
              style={{ maxWidth: '285px', height: 'auto' }}
              width={1000}
              height={1000}
              alt="ship"
            />
          </div>
          <div className="p-4 flex w-full  justify-between">
            <div className="title max-w-[396px] flex items-center gap-4 w-full ">
              <div className="icon">
                <Image
                  src={cartData.fatca}
                  style={{ maxWidth: '72px', height: 'auto' }}
                  width={1000}
                  height={1000}
                  alt="fatca"
                />
              </div>
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '18px',
                    // lineHeight: '29.82px',
                  },
                  fontSize: '25px',
                  color: theme.colors.darkBlue,
                  lineHeight: '37.5px',
                })}
                className=" font-semibold "
              >
                {cartData.scs}
              </Text>
            </div>
            <div className="title max-w-[128px] items-center flex w-full ">
              <div>
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '18px',
                      // lineHeight: '29.82px',
                    },
                    fontSize: '35px',
                    color: theme.colors.darkBlue,
                    lineHeight: '42.31px',
                  })}
                  className=" font-bold "
                >
                  {cartData.value}
                </Text>
                <Text
                  sx={{
                    fontSize: '15px',
                    color: theme.colors.darkBlue,
                    lineHeight: '17.4px',
                  }}
                  className=" font-normal "
                >
                  {cartData.subText}
                </Text>
              </div>
            </div>
            <div className="cross">
              <Image
                src={cartData.cross}
                style={{
                  maxWidth: '15px',
                  height: 'auto',
                  cursor: 'pointer',
                }}
                width={1000}
                height={1000}
                alt="cross"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

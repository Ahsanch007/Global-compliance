import { theme } from '@/theme/theme';
import { Text } from '@mantine/core';
import React from 'react';
import { cartData } from '../cart/cartData';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';

export const PayCard = () => {
  return (
    <>
      <div
        className=" w-full rounded-[20px] p-4"
        style={{
          border: '1px solid #EEEEEE',
          boxShadow: '0px 25px 46px -17px #0000000D',
        }}
      >
        <div className="my-5">
          <Text
            sx={{
              fontSize: '16px',
              color: theme.colors.greyText,
              lineHeight: '19.09px',
              letterSpacing: '20%',
            }}
            className=" font-semibold text-center"
          >
            {cartData.totals}
          </Text>
        </div>
        <div className="mb-[2rem]">
          <Text
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '18px',
                // lineHeight: '29.82px',
              },
              fontSize: '55px',
              color: theme.colors.darkBlue,
              lineHeight: '66.49px',
            })}
            className=" font-bold text-center"
          >
            {cartData.value}
          </Text>
        </div>

        <div className="checkout max-w-[318px] w-full mx-auto">
          <ButtonPrimary
            sx={{
              backgroundColor: theme.colors.golden,
              borderRadius: '70px',
              height: '60px',
              width: '100%',
            }}
          >
            {cartData.pay}
          </ButtonPrimary>
        </div>
        <div className="my-[2rem]">
          <Text
            sx={{
              fontSize: '15px',
              color: theme.colors.greyText,
              lineHeight: '25.49px',
            }}
            className=" font-semibold   text-center"
          >
            {cartData.secured}
          </Text>
        </div>
      </div>
    </>
  );
};

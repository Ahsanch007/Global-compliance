import { Text } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import { bundlesData } from '../mainPage/bundlesData';

export const BundleCard = () => {
  return (
    <>
      <div
        className=" border border-solid text-center border-golden max-w-100  w-100 p-[15px]"
        style={{ borderRadius: '0px 70px 0px 70px' }}
      >
        <Image
          src={bundlesData.icon}
          width={1000}
          height={1000}
          alt="Rectangle"
          style={{ maxWidth: '151px', height: 'auto' }}
        />
        <Text
          sx={(theme) => ({
            [theme.fn.smallerThan('md')]: {
              fontSize: '20px',
              // lineHeight: '29.82px',
            },
            fontSize: '20px',
            color: 'white',
            lineHeight: '30px',
          })}
          className=" mt-3"
        >
          {bundlesData.cardText}
        </Text>
      </div>
    </>
  );
};

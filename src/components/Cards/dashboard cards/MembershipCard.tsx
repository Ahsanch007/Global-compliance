import React from 'react';
import { cardData } from './cardData';
import { Text } from '@mantine/core';
// import { theme } from '@/theme/theme';
import Image from 'next/image';
import { theme } from '@/theme/theme';

export const MembershipCard = () => {
  return (
    <>
      <div
        className="rounded-[20px]  bg-darkBlue p-4"
        style={{ boxShadow: '0px 25px 46px -17px #0000000D' }}
      >
        <div className="flex justify-between">
          <Text
            sx={{
              fontSize: '10px',
              lineHeight: '11.93px',
              color: '#FFFFFF33',
            }}
            className="font-semibold"
          >
            {cardData.member}
          </Text>
        </div>
        <div className="my-[.7rem] flex justify-between">
          <div>
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '18px',
                  lineHeight: '30.6px',
                },
                fontSize: '18px',
                lineHeight: '30.6px',
                color: 'white',
              })}
              className="font-semibold "
            >
              {cardData.subTitle}
            </Text>
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '18px',
                  lineHeight: '30.6px',
                },
                fontSize: '18px',
                lineHeight: '30.6px',
                color: 'white',
              })}
              className="font-normal  mt-2"
            >
              {cardData.dateJoined}
            </Text>
          </div>
          <Image
            src={cardData.arrow}
            style={{ maxWidth: '32px', height: 'auto' }}
            width={1000}
            height={1000}
            alt="arrow"
          />
          <div>
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '18px',
                  lineHeight: '30.6px',
                },
                fontSize: '18px',
                lineHeight: '30.6px',
                color: 'white',
              })}
              className="font-semibold "
            >
              {cardData.expire}
            </Text>
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '18px',
                  lineHeight: '30.6px',
                },
                fontSize: '18px',
                lineHeight: '30.6px',
                color: 'white',
              })}
              className="font-normal  mt-2"
            >
              {cardData.expireDate}
            </Text>
          </div>
        </div>
        <div className="text-end">
          <Text
            sx={{
              fontSize: '15px',
              lineHeight: '25.5px',
              color: theme.colors.golden,
              textDecoration: 'underline',
            }}
            className="cursor-pointer"
          >
            {cardData.renew}
          </Text>
        </div>
      </div>
    </>
  );
};

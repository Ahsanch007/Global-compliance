'use client';
import { containerMaxWidth } from '@/theme/theme';
import { Container, Text } from '@mantine/core';
import React from 'react';
import { homeData } from './homeData';
import Image from 'next/image';
import { Event } from './Event';

export const Home = () => {
  return (
    <>
      <Container size={containerMaxWidth} px="lg" className="navbar my-[3rem]">
        <div className="flex flex-wrap max-w-[789px] w-full items-center justify-between mb-[2rem]">
          <Text
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '16px',
                // lineHeight: '29.82px',
              },
              fontSize: '16px',
              color: theme.colors.darkBlue,
              lineHeight: '18.83px',
            })}
            className=" font-medium"
          >
            {homeData.text}
          </Text>
          <Image src={homeData.arrow} height={5} width={19} alt="arrow" />
          <Text
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '16px',
                // lineHeight: '29.82px',
              },
              fontSize: '16px',
              color: theme.colors.darkBlue,
              lineHeight: '18.83px',
            })}
            className=" font-medium"
          >
            {homeData.text2}
          </Text>
          <Image src={homeData.arrow} height={5} width={19} alt="arrow" />
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
            className=" font-medium"
          >
            {homeData.subText}
          </Text>
        </div>
        <div>
          <Event />
        </div>
      </Container>
    </>
  );
};

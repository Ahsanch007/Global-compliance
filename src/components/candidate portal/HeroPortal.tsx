import React from 'react';
import { portalData } from './portalData';
import { Text } from '@mantine/core';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import Image from 'next/image';

export const HeroPortal = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-[3rem]">
        <div className="md:max-w-[590px] md:w-100 max-w-[335px] w-100 grid gap-[2rem] ">
          <Text
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '35px',
                lineHeight: '42.31px',
              },
              fontSize: '55px',
              color: 'white',
              lineHeight: '66.49px',
            })}
            className="md:max-w-[590px] text-center md:w-100 max-w-[335px]  w-100 font-bold "
          >
            {portalData.heading}
          </Text>
          <Text
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '14px',
                lineHeight: '28px',
              },
              fontSize: '23px',
              lineHeight: '39.1px',
              color: 'white',
            })}
            className="md:max-w-[370px] mx-auto md:w-100 max-w-[298px]  w-100 font-medium "
          >
            {portalData.subHeading}
          </Text>
          <ButtonPrimary
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '14px',
                height: '45px',
              },
              fontSize: '21px',
              color: theme.colors.darkBlue,
              backgroundColor: 'white',
              borderRadius: '70px',
              height: '65px',
            })}
            className=" mx-auto   md:max-w-[198px] md:w-100   mt-[2rem]"
          >
            {portalData.ctaText}
            <Image
              className="mx-2"
              src="/icons/arrow.svg"
              width={27}
              height={10}
              alt="arrow"
            />
          </ButtonPrimary>
        </div>
      </div>
    </>
  );
};

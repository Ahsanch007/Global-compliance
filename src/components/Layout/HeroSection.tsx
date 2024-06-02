import { containerMaxWidth } from '@/theme/theme';
import { Box, Container, Text } from '@mantine/core';
import React from 'react';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import Image from 'next/image';
import { headerData } from './headerConfig';

interface Props {
  homePageData: any;
}
export const HeroSection: React.FC<Props> = ({ homePageData }) => {
  return (
    <>
      <Container size={containerMaxWidth} px="lg" className="navbar">
        <Box className="max-w-[718px] w-100 grid gap-4">
          <div className="mt-[5rem]">
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
              className=" py-2  font-semibold  "
            >
              {homePageData.HEADER_TITLE}
            </Text>
            <Box className="md:max-w-[661px] md:w-100 max-w-[298px] w-100">
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '14px',
                    lineHeight: '28px',
                  },
                  fontSize: '23px',
                  color: 'white',
                  lineHeight: '39px',
                })}
                className=" md:leading-[39px] leading-[28px] "
              >
                {homePageData.HEADER_SUBTITLE}
              </Text>
            </Box>
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
              className="   mt-[2rem]"
            >
              {headerData.ctaText}
              <Image
                className="mx-2"
                src="/icons/arrow.svg"
                width={27}
                height={10}
                alt="arrow"
              />
            </ButtonPrimary>
          </div>
        </Box>
      </Container>
    </>
  );
};

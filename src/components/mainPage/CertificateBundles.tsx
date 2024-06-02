'use client';
import { containerMaxWidth, containerMaxWidth2 } from '@/theme/theme';
import { Text } from '@mantine/core';
import { Box, Container } from '@mantine/core';
import React from 'react';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import { BundleCard } from '../Cards/BundleCard';
import { useMediaQuery } from '@mantine/hooks';
import { bundlesData } from './bundlesData';

export const CertificateBundles = () => {
  const isLargeScreen = useMediaQuery('(max-width: 800px)');

  return (
    <>
      <Container size={containerMaxWidth} px="lg" className="navbar my-[3rem]">
        <div
          className="bg-darkBlue p-5"
          style={{ borderRadius: '40px 0px 40px 0px' }}
        >
          <Container
            size={containerMaxWidth2}
            px="lg"
            className="navbar my-[3rem]"
          >
            <Box className="flex items-center justify-between">
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '25px',
                    lineHeight: '29.82px',
                  },
                  fontSize: '45px',
                  color: 'white',
                  lineHeight: '53.68px',
                })}
                className="  font-semibold"
              >
                {bundlesData.heading}
              </Text>

              <ButtonPrimary
                sx={{
                  height: '45px',
                  color: 'white',
                  borderRadius: '60px',
                  border: '1px solid white',
                }}
                className="hidden md:block md:max-w-[127px] md:w-100 "
              >
                {bundlesData.ctaText}
              </ButtonPrimary>
            </Box>
            <Box className="flex my-[2rem]">
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '16px',
                    // lineHeight: '29.82px',
                  },
                  fontSize: '35px',
                  color: theme.colors.golden,
                  lineHeight: '41.75px',
                })}
                className=" font-semibold"
              >
                {bundlesData.bundles}
              </Text>
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '16px',
                    // lineHeight: '29.82px',
                  },
                  fontSize: '35px',
                  color: theme.colors.golden,
                  lineHeight: '41.75px',
                })}
                className=" font-light"
              >
                {bundlesData.des}
              </Text>
            </Box>
            <Box className="md:max-w-[928px] md:w-100 max-w-[295px] w-100">
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '14px',
                    lineHeight: '23.8px',
                  },
                  fontSize: '18px',
                  color: 'white',
                  lineHeight: '30.6px',
                })}
                className="font-light "
              >
                {bundlesData.subHeading}
              </Text>
            </Box>
            <Box className="flex flex-wrap my-[2rem]">
              <div className="max-w-[295px]  xl:max-w-[308px] pl-0 p-4">
                <div>
                  <BundleCard />
                </div>
              </div>
              <div className="max-w-[295px] md:max-w-[308px] p-4">
                <div>
                  <BundleCard />
                </div>
              </div>
              <div className="max-w-[295px] md:max-w-[308px] p-4">
                <div>
                  <BundleCard />
                </div>
              </div>
              <div className="max-w-[295px] md:max-w-[308px] p-4">
                <div>
                  <BundleCard />
                </div>
              </div>
            </Box>
            <Box className="flex flex-wrap items-center justify-between my-[2rem]">
              <div className="flex md:gap-[4rem] gap-4">
                <div>
                  <Text
                    sx={(theme) => ({
                      [theme.fn.smallerThan('md')]: {
                        fontSize: '21px',
                        lineHeight: '25.39px',
                      },
                      fontSize: '55px',
                      color: theme.colors.lightWhite,
                      lineHeight: '64.74px',
                    })}
                    className=" font-medium "
                  >
                    {bundlesData.value}
                  </Text>
                  <Text
                    sx={(theme) => ({
                      [theme.fn.smallerThan('md')]: {
                        fontSize: '12px',
                        // lineHeight: '25.39px',
                      },
                      fontSize: '18px',
                      color: 'white',
                      lineHeight: '20.88px',
                    })}
                    className=" font-medium  "
                  >
                    {bundlesData.valueText}
                  </Text>
                </div>

                <div>
                  <Text
                    sx={(theme) => ({
                      [theme.fn.smallerThan('md')]: {
                        fontSize: '21px',
                        lineHeight: '23.39px',
                      },
                      fontSize: '55px',
                      color: 'white',
                      lineHeight: '66.49px',
                    })}
                    className=" font-bold "
                  >
                    {bundlesData.subValue}
                  </Text>
                  <Text
                    sx={(theme) => ({
                      [theme.fn.smallerThan('md')]: {
                        fontSize: '12px',
                        // lineHeight: '25.39px',
                      },
                      fontSize: '18px',
                      color: 'white',
                      lineHeight: '20.88px',
                    })}
                    className="  font-medium"
                  >
                    {bundlesData.subValueText}
                  </Text>
                </div>
              </div>
              <ButtonPrimary
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '14px',
                    height: '45px',
                  },
                  height: '60px',
                  backgroundColor: theme.colors.golden,
                  borderRadius: '70px',
                })}
                className=" w-[295px]  md:max-w-[230px] md:w-100  my-5 md:mt-0"
              >
                {bundlesData.btnText}
              </ButtonPrimary>
              {isLargeScreen ? (
                <ButtonPrimary
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '14px',
                      height: '45px',
                    },
                    height: '60px',
                    borderRadius: '60px',
                    border: '1px solid white',
                  })}
                  className="   w-[295px]  md:max-w-[230px]"
                >
                  {bundlesData.ctaText}
                </ButtonPrimary>
              ) : (
                ''
              )}
            </Box>
          </Container>

          <Container
            size={containerMaxWidth2}
            px="lg"
            className="navbar mt-[6rem] hidden md:block"
          >
            <Box className="flex my-[2rem]">
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '16px',
                    // lineHeight: '29.82px',
                  },
                  fontSize: '35px',
                  color: theme.colors.golden,
                  lineHeight: '41.75px',
                })}
                className=" font-semibold"
              >
                {bundlesData.bundles}
              </Text>
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '16px',
                    // lineHeight: '29.82px',
                  },
                  fontSize: '35px',
                  color: theme.colors.golden,
                  lineHeight: '41.75px',
                })}
                className=" font-light"
              >
                {bundlesData.des}
              </Text>
            </Box>
            <Box className="md:max-w-[928px] md:w-100 max-w-[295px] w-100">
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '14px',
                    lineHeight: '23.8px',
                  },
                  fontSize: '18px',
                  color: 'white',
                  lineHeight: '30.6px',
                })}
                className="font-light "
              >
                {bundlesData.subHeading}
              </Text>
            </Box>
            <Box className="flex flex-wrap my-[2rem]">
              <div className="max-w-[295px] md:max-w-[308px] pl-0 p-4">
                <div>
                  <BundleCard />
                </div>
              </div>
              <div className="max-w-[295px] md:max-w-[308px] p-4">
                <div>
                  <BundleCard />
                </div>
              </div>
              <div className="max-w-[295px] md:max-w-[308px] p-4">
                <div>
                  <BundleCard />
                </div>
              </div>
              <div className="max-w-[295px] md:max-w-[308px] p-4">
                <div>
                  <BundleCard />
                </div>
              </div>
            </Box>
            <Box className="flex flex-wrap items-center justify-between my-[2rem]">
              <div className="flex gap-[4rem]">
                <div>
                  <Text
                    sx={(theme) => ({
                      [theme.fn.smallerThan('md')]: {
                        fontSize: '21px',
                        lineHeight: '25.39px',
                      },
                      fontSize: '55px',
                      color: theme.colors.lightWhite,
                      lineHeight: '64.74px',
                    })}
                    className="font-medium "
                  >
                    {bundlesData.value}
                  </Text>
                  <Text
                    sx={(theme) => ({
                      [theme.fn.smallerThan('md')]: {
                        fontSize: '12px',
                        // lineHeight: '25.39px',
                      },
                      fontSize: '18px',
                      color: 'white',
                      lineHeight: '20.88px',
                    })}
                    className="font-medium "
                  >
                    {bundlesData.valueText}
                  </Text>
                </div>

                <div>
                  <Text
                    sx={(theme) => ({
                      [theme.fn.smallerThan('md')]: {
                        fontSize: '21px',
                        lineHeight: '23.39px',
                      },
                      fontSize: '55px',
                      color: 'white',
                      lineHeight: '66.49px',
                    })}
                    className="font-bold "
                  >
                    {bundlesData.subValue}
                  </Text>
                  <Text
                    sx={(theme) => ({
                      [theme.fn.smallerThan('md')]: {
                        fontSize: '12px',
                        // lineHeight: '25.39px',
                      },
                      fontSize: '18px',
                      color: 'white',
                      lineHeight: '20.88px',
                    })}
                    className=" font-medium "
                  >
                    {bundlesData.subValueText}
                  </Text>
                </div>
              </div>
              <ButtonPrimary
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '14px',
                    height: '45px',
                  },
                  height: '60px',
                  backgroundColor: theme.colors.golden,
                  borderRadius: '70px',
                })}
                className="w-[295px]  md:max-w-[230px] md:w-100  "
              >
                {bundlesData.btnText}
              </ButtonPrimary>
            </Box>
          </Container>
        </div>
      </Container>
    </>
  );
};

'use client';
import { containerMaxWidth } from '@/theme/theme';
import { Box, Container, Text } from '@mantine/core';
import React from 'react';
import { CertificateCard } from '../Cards/CertificateCard';
import Image from 'next/image';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import { useMediaQuery } from '@mantine/hooks';
import { certificateData } from './certificateData';
import Link from 'next/link';

export const Certificate = () => {
  const isMediumScreen = useMediaQuery('(max-width: 1366px)');

  const isSmallScreen = useMediaQuery('(max-width: 500px)');

  return (
    <>
      <Container size={containerMaxWidth} px="lg" className="navbar my-[3rem]">
        <Box className="my-[2rem]">
          <Text
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '25px',
                lineHeight: '30px',
              },
              fontSize: '45px',
              color: theme.colors.darkBlue,
              lineHeight: '53.68px',
            })}
            className="    font-semibold"
          >
            {certificateData.heading}
          </Text>
        </Box>

        <div className="flex flex-wrap justify-center">
          <div className="max-w-[335px] md:max-w-[486px] md:p-3 py-3 ">
            <div className="h-full">
              <Link style={{ textDecoration: 'none' }} href="/certificate">
                <CertificateCard />
              </Link>
            </div>
          </div>

          <div className="max-w-[335px] md:max-w-[486px] md:p-3 py-3 ">
            <Link style={{ textDecoration: 'none' }} href="/certificate">
              <CertificateCard />
            </Link>
          </div>
          <div className="max-w-[335px] md:max-w-[486px] md:p-3 py-3 ">
            <Link style={{ textDecoration: 'none' }} href="/certificate">
              <CertificateCard />
            </Link>
          </div>
          <div className="max-w-[335px] md:max-w-[486px] md:p-3 py-3 ">
            <Link style={{ textDecoration: 'none' }} href="/certificate">
              <CertificateCard />
            </Link>
          </div>
          <div className="max-w-[335px] md:max-w-[486px] md:p-3 py-3 ">
            <Link style={{ textDecoration: 'none' }} href="/certificate">
              <CertificateCard />
            </Link>
          </div>
          <div className="max-w-[335px] md:max-w-[486px] md:p-3 py-3 ">
            <Link style={{ textDecoration: 'none' }} href="/certificate">
              <CertificateCard />
            </Link>
          </div>
        </div>

        <div
          className={`rounded-[20px] max-w-100 w-100 my-[3rem]  flex flex-wrap mx-auto `}
          style={{
            border: '1px solid #CD9646',
            boxShadow: '0px 17px 46px -17px #0000001A',
            overflow: 'hidden',
            maxWidth: isSmallScreen
              ? '335px'
              : isMediumScreen
              ? '700px'
              : '100%',
          }}
        >
          <div className="img max-w-[335px] md:max-w-[759px] md:w-100">
            <Image
              src="/images/Rectangle 24.webp"
              width={1000}
              height={1000}
              alt="Rectangle"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <div className="p-[30px]   max-w-[759px] w-100">
            <div className="flex  gap-[3rem] max-w-[600px] w-100">
              <Image
                src="/images/FATCA.svg"
                width={1000}
                height={1000}
                alt="Rectangle"
                className="max-w-[42px] md:max-w-[132px]"
                style={{
                  // maxWidth: isLargeScreen ? '42px' : '132px',
                  height: 'auto',
                }}
              />

              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '16px',
                    lineHeight: '24px',
                  },
                  fontSize: '35px',
                  color: theme.colors.darkBlue,
                  lineHeight: '52.5px',
                })}
                className="  font-semibold  md:max-w-[419px] max-w-[243px] w-100"
              >
                {certificateData.awardHeading}
              </Text>
            </div>
            <div className=" max-w-[600px] w-100 my-[1rem]">
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '12px',
                    lineHeight: '20.4px',
                  },
                  fontSize: '18px',
                  color: theme.colors.darkBlue,
                  lineHeight: '30.6px',
                })}
                className="font-normal  "
              >
                {certificateData.subAwardHeading}
              </Text>
            </div>
            <Box className="flex justify-between items-center my-[2rem]  max-w-[530px] w-100">
              <div>
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '13px',
                      lineHeight: '22.1px',
                    },
                    fontSize: '18px',
                    color: theme.colors.golden,
                    lineHeight: '30.6px',
                  })}
                  className="  font-semibold "
                >
                  {' '}
                  {certificateData.hour}
                </Text>
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '13px',
                      lineHeight: '22.1px',
                    },
                    fontSize: '18px',
                    color: theme.colors.lightText,
                    lineHeight: '30.6px',
                  })}
                  className=" font-normal "
                >
                  {certificateData.subHour}
                </Text>
              </div>
              <div>
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '13px',
                      lineHeight: '22.1px',
                    },
                    fontSize: '18px',
                    color: theme.colors.golden,
                    lineHeight: '30.6px',
                  })}
                  className="  font-semibold"
                >
                  {certificateData.mint}
                </Text>
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '13px',
                      lineHeight: '22.1px',
                    },
                    fontSize: '18px',
                    color: theme.colors.lightText,
                    lineHeight: '30.6px',
                  })}
                  className=" font-normal "
                >
                  {certificateData.subMint}
                </Text>
              </div>
              <div>
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '13px',
                      lineHeight: '22.1px',
                    },
                    fontSize: '18px',
                    color: theme.colors.golden,
                    lineHeight: '30.6px',
                  })}
                  className="  font-semibold"
                >
                  {' '}
                  {certificateData.questions}
                </Text>
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '13px',
                      lineHeight: '22.1px',
                    },
                    fontSize: '18px',
                    color: theme.colors.lightText,
                    lineHeight: '30.6px',
                  })}
                  className=" font-normal "
                >
                  {certificateData.subQuestions}
                </Text>
              </div>
            </Box>
            <Box className="flex justify-between items-center max-w-[600px] w-100 ">
              <div>
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '21px',
                      lineHeight: '25.49px',
                    },
                    fontSize: '45px',
                    color: theme.colors.darkBlue,
                    lineHeight: '54.4px',
                  })}
                  className=" font-bold  "
                >
                  {certificateData.subAwardValue}
                </Text>
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '12px',
                      lineHeight: '18.56px',
                    },
                    fontSize: '16px',
                    color: theme.colors.darkBlue,
                    lineHeight: '18.56px',
                  })}
                  className="font-normal "
                >
                  {certificateData.subAwardMemberShip}
                </Text>
              </div>
              <div>
                <ButtonPrimary
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '14px',
                      height: '45px',
                    },
                    height: '60px',
                    fontSize: '18px',
                    color: 'white',
                    backgroundColor: theme.colors.darkBlue,
                    borderRadius: '70px',
                  })}
                  className=" rounded-[70px] md:max-w-[235px] md:w-100 md:h-[60px] h-[45px]"
                >
                  {certificateData.ctaText}
                </ButtonPrimary>
              </div>
            </Box>
          </div>
        </div>
      </Container>
    </>
  );
};

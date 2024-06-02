'use client';
import { Box, Text } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import { certificateData } from '../mainPage/certificateData';

export const CertificateCard = () => {
  return (
    <>
      <div
        className="rounded-[20px]  w-100"
        style={{ boxShadow: '0px 17px 46px -17px #0000001A' }}
      >
        <div className="card-img max-w-[335px] md:max-w-[486px]">
          <img
            src={certificateData.cardImg}
            alt="Rectangle"
            style={{ maxWidth: '100%', width: '100%', height: '200px' }}
          />
        </div>
        <Box className="p-[25px]">
          <div className="flex justify-between items-center max-w-100 w-100 gap-[20px] md:gap-0">
            <Image
              src={certificateData.cardIcon}
              width={71}
              height={87}
              alt="fatca"
            />
            <div className="max-w-[295px] w-100">
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '16px',
                    lineHeight: '24px',
                  },
                  fontSize: '25px',
                  color: theme.colors.darkBlue,
                  lineHeight: '37.5px',
                })}
                className="font-semibold"
              >
                {certificateData.cardHeading}
              </Text>
            </div>
          </div>
          <Box>
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '12px',
                  lineHeight: '20.4px',
                },
                fontSize: '18px',
                color: theme.colors.darkBlue,
                lineHeight: '30px',
              })}
              className="mt-4  font-normal  "
            >
              {certificateData.subHeading}
            </Text>
          </Box>
          <Box className="flex justify-between my-[3rem]">
            <div>
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '13px',
                    lineHeight: '22.1px',
                  },
                  fontSize: '15px',
                  color: theme.colors.golden,
                  lineHeight: '25.5px',
                })}
                className=" font-semibold "
              >
                {certificateData.hour}
              </Text>
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '13px',
                    lineHeight: '22.1px',
                  },
                  fontSize: '15px',
                  color: theme.colors.lightText,
                  lineHeight: '25.5px',
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
                  fontSize: '15px',
                  color: theme.colors.golden,
                  lineHeight: '25.5px',
                })}
                className=" font-semibold "
              >
                {certificateData.mint}
              </Text>
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '13px',
                    lineHeight: '22.1px',
                  },
                  fontSize: '15px',
                  color: theme.colors.lightText,
                  lineHeight: '25.5px',
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
                  fontSize: '15px',
                  color: theme.colors.golden,
                  lineHeight: '25.5px',
                })}
                className=" font-semibold "
              >
                {certificateData.questions}
              </Text>
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '13px',
                    lineHeight: '22.1px',
                  },
                  fontSize: '15px',
                  color: theme.colors.lightText,
                  lineHeight: '25.5px',
                })}
                className=" font-normal "
              >
                {certificateData.subQuestions}
              </Text>
            </div>
          </Box>
          <Box className="flex justify-between items-center ">
            <div>
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '21px',
                    lineHeight: '25.39px',
                  },
                  fontSize: '35px',
                  color: theme.colors.darkBlue,
                  lineHeight: '42.31px',
                })}
                className="  font-bold "
              >
                {certificateData.value}
              </Text>
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '12px',
                    lineHeight: '13.92px',
                  },
                  fontSize: '15px',
                  color: theme.colors.darkBlue,
                  lineHeight: '17.4px',
                })}
                className=" font-normal "
              >
                {certificateData.memberShip}
              </Text>
            </div>
            <div>
              <ButtonPrimary
                onClick={(e) => {
                  e.preventDefault();
                }}
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '14px',
                    height: '45px',
                  },
                  height: '60px',
                  fontSize: '18px',
                  color: 'white',
                  backgroundColor: theme.colors.golden,
                  borderRadius: '70px',
                })}
                className=" md:max-w-[235px] md:w-100 w-[162px]"
              >
                {certificateData.ctaText}
              </ButtonPrimary>
            </div>
          </Box>
        </Box>
      </div>
    </>
  );
};

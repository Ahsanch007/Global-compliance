import { Text } from '@mantine/core';
import { Box } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import { useMediaQuery } from '@mantine/hooks';
import { eventsData } from '../mainPage/eventsData';
import Link from 'next/link';

export const UpcomingEventCard = () => {
  const isLargeScreen = useMediaQuery('(max-width: 800px)');

  return (
    <>
      <div
        className=" md:max-w-[1026px] max-w-[335px] lg:max-w-[500px] xl:max-w-[1026px] w-100 my-[3rem] m-auto   gap-[3rem] flex flex-wrap"
        style={{
          border: '1px solid #CD9646',
          boxShadow: '0px 17px 46px -17px #0000001A',
          borderRadius: '20px',
          // maxWidth: isSmallScreen
          //   ? '335px'
          //   : isMediumScreen
          //   ? '500px'
          //   : '1026px',
        }}
      >
        <div className="img md:max-w-[513px] md:w-100">
          <Image
            src={eventsData.img}
            width={1000}
            height={1000}
            alt="Rectangle"
            style={{
              maxWidth: isLargeScreen ? '100%' : '100%',
              height: 'auto',
            }}
          />
        </div>
        <div className="md:py-[35px] p-[25px] md:max-w-[513px] md:w-100 ">
          <div className="md:max-w-[500px] max-w-[295px] ">
            <div className=" max-w-[393px] w-100 my-[1rem]">
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '14px',
                  },
                  fontSize: '20px',
                  color: theme.colors.golden,
                  lineHeight: '30.6px',
                })}
                className=" md:text-[20px] my-[1rem] text-[14px]  font-semibold  "
              >
                {eventsData.date}
              </Text>
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '16px',
                    lineHeight: '24px',
                  },
                  fontSize: '30px',
                  color: theme.colors.darkBlue,
                  lineHeight: '45.6px',
                })}
                className="font-semibold "
              >
                {eventsData.text}
              </Text>
            </div>
            <Box className="flex justify-between my-[3rem] ">
              <div>
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '13px',
                      lineHeight: '24px',
                    },
                    fontSize: '15px',
                    color: theme.colors.golden,
                    lineHeight: '25.5px',
                  })}
                  className="font-semibold "
                >
                  {eventsData.subText1}
                </Text>
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '13px',
                      lineHeight: '24px',
                    },
                    fontSize: '15px',
                    color: theme.colors.lightText,
                    lineHeight: '25.5px',
                  })}
                  className=" font-normal "
                >
                  {eventsData.duration}
                </Text>
              </div>
              <div>
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '13px',
                      lineHeight: '24px',
                    },
                    fontSize: '15px',
                    color: theme.colors.golden,
                    lineHeight: '25.5px',
                  })}
                  className="font-semibold "
                >
                  {eventsData.subText2}
                </Text>
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '13px',
                      lineHeight: '24px',
                    },
                    fontSize: '15px',
                    color: theme.colors.lightText,
                    lineHeight: '25.5px',
                  })}
                  className=" font-normal "
                >
                  {eventsData.delivery}
                </Text>
              </div>
              <div>
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '13px',
                      lineHeight: '24px',
                    },
                    fontSize: '15px',
                    color: theme.colors.golden,
                    lineHeight: '25.5px',
                  })}
                  className=" font-semibold"
                >
                  {eventsData.subText3}
                </Text>
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '13px',
                      lineHeight: '24px',
                    },
                    fontSize: '15px',
                    color: theme.colors.lightText,
                    lineHeight: '25.5px',
                  })}
                  className=" font-normal "
                >
                  {eventsData.event}
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
                  className="font-bold "
                >
                  {eventsData.value}
                </Text>
              </div>
              <div className="mt-[1rem]">
                <Link href="/events" style={{ textDecoration: 'none' }}>
                  <ButtonPrimary
                    sx={(theme) => ({
                      [theme.fn.smallerThan('md')]: {
                        fontSize: '14px',
                        height: '45px',
                      },
                      fontSize: '18px',
                      height: '60px',
                      color: theme.colors.darkBlue,
                      border: '1px solid #1D2B39',
                      borderRadius: '70px',
                    })}
                    className="  max-w-[235px] w-100"
                    style={{ border: '1px solid #1D2B39' }}
                  >
                    {eventsData.ctxText}
                  </ButtonPrimary>
                </Link>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

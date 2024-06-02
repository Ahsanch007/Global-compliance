import React from 'react';
import { homeData } from './homeData';
import { Text } from '@mantine/core';
import Image from 'next/image';
import { useMediaQuery } from '@mantine/hooks';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import { theme } from '@/theme/theme';

export const Event = () => {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex flex-wrap gap-4 p-2">
          <div>
            <div className="  text-center md:text-start md:max-w-[997px] max-w-[335px]">
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '16px',
                    // lineHeight: '29.82px',
                  },
                  fontSize: '23px',
                  color: theme.colors.golden,
                  lineHeight: '34.5px',
                })}
                className=" font-semibold my-5"
              >
                {homeData.date}
              </Text>
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '25px',
                    // lineHeight: '29.82px',
                  },
                  fontSize: '45px',
                  color: theme.colors.darkBlue,
                  lineHeight: '67.5px',
                })}
                className=" font-semibold my-5"
              >
                {homeData.title}
              </Text>
            </div>
            <div className="text-center md:text-start md:max-w-[1105px] max-w-[335px]">
              <Image
                src={homeData.eventss}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
                width={1000}
                height={1000}
                alt="eventss"
              />
            </div>
            <div
              className="p-5 md:max-w-[1105px] max-w-[335px]  mx-auto rounded-[20px] mt-5"
              style={{
                border: '1px solid #EEEEEE',
                boxShadow: '0px 25px 46px -17px #0000000D',
              }}
            >
              <div className="flex justify-between">
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '15px',
                      // lineHeight: '29.82px',
                    },
                    fontSize: '25px',
                    color: theme.colors.darkBlue,
                    lineHeight: '37.5px',
                  })}
                  className=" font-semibold "
                >
                  {homeData.event}
                </Text>
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '15px',
                      // lineHeight: '29.82px',
                    },
                    fontSize: '35px',
                    color: theme.colors.darkBlue,
                    lineHeight: '42.31px',
                  })}
                  className=" font-bold "
                >
                  {homeData.value}
                </Text>
              </div>
              <div className="my-5 flex-wrap md:gap-0 gap-2 flex justify-between">
                <div className="max-w-[664px]  flex justify-between">
                  <div className="duration">
                    <Text
                      sx={(theme) => ({
                        [theme.fn.smallerThan('md')]: {
                          fontSize: '13px',
                          lineHeight: '22.1px',
                        },
                        fontSize: '21px',
                        color: theme.colors.golden,
                        lineHeight: '35.7px',
                      })}
                      className="font-semibold"
                    >
                      {homeData.hour}
                    </Text>
                    <Text
                      sx={(theme) => ({
                        [theme.fn.smallerThan('md')]: {
                          fontSize: '13px',
                          lineHeight: '22.1px',
                        },
                        fontSize: '21px',
                        color: theme.colors.lightText,
                        lineHeight: '35.7px',
                      })}
                      className="font-normal"
                    >
                      {homeData.subHour}
                    </Text>
                  </div>
                  <div className="duration">
                    <Text
                      sx={(theme) => ({
                        [theme.fn.smallerThan('md')]: {
                          fontSize: '13px',
                          lineHeight: '22.1px',
                        },
                        fontSize: '21px',
                        color: theme.colors.golden,
                        lineHeight: '35.7px',
                      })}
                      className="font-semibold"
                    >
                      {homeData.virtual}
                    </Text>
                    <Text
                      sx={(theme) => ({
                        [theme.fn.smallerThan('md')]: {
                          fontSize: '13px',
                          lineHeight: '22.1px',
                        },
                        fontSize: '21px',
                        color: theme.colors.lightText,
                        lineHeight: '35.7px',
                      })}
                      className="font-normal"
                    >
                      {homeData.delivery}
                    </Text>
                  </div>
                  <div className="duration">
                    <Text
                      sx={(theme) => ({
                        [theme.fn.smallerThan('md')]: {
                          fontSize: '13px',
                          lineHeight: '22.1px',
                        },
                        fontSize: '21px',
                        color: theme.colors.golden,
                        lineHeight: '35.7px',
                      })}
                      className="font-semibold"
                    >
                      {homeData.webinar}
                    </Text>
                    <Text
                      sx={(theme) => ({
                        [theme.fn.smallerThan('md')]: {
                          fontSize: '13px',
                          lineHeight: '22.1px',
                        },
                        fontSize: '21px',
                        color: theme.colors.lightText,
                        lineHeight: '35.7px',
                      })}
                      className="font-normal"
                    >
                      {homeData.type}
                    </Text>
                  </div>
                  <div className="duration">
                    <Text
                      sx={(theme) => ({
                        [theme.fn.smallerThan('md')]: {
                          fontSize: '13px',
                          lineHeight: '22.1px',
                        },
                        fontSize: '21px',
                        color: theme.colors.golden,
                        lineHeight: '35.7px',
                      })}
                      className="font-semibold"
                    >
                      {homeData.subDate}
                    </Text>
                    <Text
                      sx={(theme) => ({
                        [theme.fn.smallerThan('md')]: {
                          fontSize: '13px',
                          lineHeight: '22.1px',
                        },
                        fontSize: '21px',
                        color: theme.colors.lightText,
                        lineHeight: '35.7px',
                      })}
                      className="font-normal"
                    >
                      {homeData.eventDate}
                    </Text>
                  </div>
                </div>
                <ButtonPrimary
                  sx={{
                    backgroundColor: theme.colors.golden,
                    borderRadius: '70px',
                    height: '60px',
                    width: '235px',
                  }}
                >
                  {homeData.register}
                </ButtonPrimary>
              </div>
              <div className="mt-[4rem]">
                <div>
                  <Text
                    sx={(theme) => ({
                      [theme.fn.smallerThan('md')]: {
                        fontSize: '15px',
                        // lineHeight: '29.82px',
                      },
                      fontSize: '25px',
                      color: theme.colors.darkBlue,
                      lineHeight: '37.5px',
                    })}
                    className=" font-semibold "
                  >
                    {homeData.descr}
                  </Text>
                </div>
                <div className="md:max-w-[1025px] max-w-[335px] text-center md:text-start  mt-[2rem]">
                  <Text
                    sx={(theme) => ({
                      [theme.fn.smallerThan('md')]: {
                        fontSize: '15px',
                        // lineHeight: '29.82px',
                      },
                      fontSize: '18px',
                      color: theme.colors.darkBlue,
                      lineHeight: '30.5px',
                    })}
                    className=" font-semibold "
                  >
                    {homeData.session}
                    <span
                      style={{
                        fontSize: '18px',
                        lineHeight: '30.5px',
                      }}
                      className=" font-medium "
                    >
                      {homeData.city}
                    </span>
                  </Text>
                </div>
              </div>
            </div>

            <div className="my-[4rem]">
              <div className="md:max-w-[1000px] max-w-[335px]   mx-auto mt-[2rem]">
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '15px',
                      // lineHeight: '29.82px',
                    },
                    fontSize: '21px',
                    color: theme.colors.darkBlue,
                    lineHeight: '31.5px',
                  })}
                  className=" font-semibold italic"
                >
                  {homeData.sunction}
                </Text>
              </div>
            </div>
            <div className="my-[4rem]">
              <div className=" md:max-w-[1025px] max-w-[335px]   mx-auto mt-[2rem]">
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '15px',
                      // lineHeight: '29.82px',
                    },
                    fontSize: '18px',
                    color: theme.colors.darkBlue,
                    lineHeight: '30.5px',
                  })}
                  className=" font-normal "
                >
                  {homeData.program}
                </Text>
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '15px',
                      // lineHeight: '29.82px',
                    },
                    fontSize: '18px',
                    color: theme.colors.darkBlue,
                    lineHeight: '30.5px',
                  })}
                  className=" font-normal "
                >
                  {homeData.listen}
                </Text>
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '15px',
                      // lineHeight: '29.82px',
                    },
                    fontSize: '18px',
                    color: theme.colors.darkBlue,
                    lineHeight: '30.5px',
                  })}
                  className=" font-normal mt-[2rem] "
                >
                  {homeData.panel}
                </Text>
              </div>
            </div>
            <div className=" ">
              <div className="relative text-center md:text-start md:max-w-[1105px] max-w-[335px]">
                <Image
                  src={homeData.eventss}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                  width={1000}
                  height={1000}
                  alt="eventss"
                />
                <div className="absolute flex items-center justify-center inset-0">
                  <Image
                    src={homeData.playButton}
                    style={{
                      maxWidth: '83px',
                      height: 'auto',
                      cursor: 'pointer',
                    }}
                    width={1000}
                    height={1000}
                    alt="play button"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" xl:pt-[10rem] pt-0">
            <div className="grid gap-4">
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '25px',
                    // lineHeight: '29.82px',
                  },
                  fontSize: '35px',
                  color: theme.colors.darkBlue,
                  lineHeight: '52.5px',
                })}
                className=" font-semibold "
              >
                {homeData.othr}
              </Text>

              <div className="">
                <img
                  src={homeData.mask}
                  style={{
                    height: 'auto',
                  }}
                  className="max-w-[300px] md:max-w-[355px]"
                  alt="mask"
                />
              </div>
              <div>
                <img
                  src={homeData.mask}
                  style={{
                    height: 'auto',
                  }}
                  className="max-w-[300px] md:max-w-[355px]"
                  alt="mask"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max- my-[3rem]">
          <div>
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '25px',
                  // lineHeight: '29.82px',
                },
                fontSize: '45px',
                color: theme.colors.darkBlue,
                lineHeight: '67.5px',
              })}
              className=" font-semibold "
            >
              {homeData.expert}
            </Text>
          </div>
          <div
            className="rounded-[20px] bg-white my-3"
            style={{
              border: '1px solid #EEEEEE',
              boxShadow: '0px 25px 46px -17px #0000000D',
            }}
          >
            <div className={`md:flex`}>
              <img
                src={homeData.expertPerson}
                style={{
                  height: 'auto',
                }}
                className="max-w-[335px] md:max-w-[373px]"
                alt="expertPerson"
              />
              <div className="p-[30px]">
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '18px',
                      lineHeight: '22.1px',
                    },
                    fontSize: '25px',
                    color: theme.colors.golden,
                    lineHeight: '35.7px',
                  })}
                  className="font-semibold"
                >
                  {homeData.expertName}
                </Text>
                <div className="max-w-[1032px]  mt-6">
                  <div className="flex mb-5">
                    <Text
                      sx={(theme) => ({
                        [theme.fn.smallerThan('md')]: {
                          fontSize: '13px',
                          lineHeight: '22.1px',
                        },
                        fontSize: '21px',
                        color: theme.colors.darkBlue,
                        lineHeight: '30.7px',
                      })}
                      className="font-semibold "
                    >
                      {homeData.gci}
                    </Text>{' '}
                    <Text
                      sx={(theme) => ({
                        [theme.fn.smallerThan('md')]: {
                          fontSize: '13px',
                          lineHeight: '22.1px',
                        },
                        fontSize: '21px',
                        color: theme.colors.darkBlue,
                        lineHeight: '30.7px',
                      })}
                      className="font-semibold "
                    >
                      {homeData.moderator}
                    </Text>
                  </div>

                  <Text
                    sx={(theme) => ({
                      [theme.fn.smallerThan('md')]: {
                        fontSize: '13px',
                        lineHeight: '22.1px',
                      },
                      fontSize: '18px',
                      color: theme.colors.darkBlue,
                      lineHeight: '30.7px',
                    })}
                    className="font-normal"
                  >
                    {homeData.experience}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div
            className="rounded-[20px] bg-white my-3"
            style={{
              border: '1px solid #EEEEEE',
              boxShadow: '0px 25px 46px -17px #0000000D',
            }}
          >
            <div className={`md:flex`}>
              <img
                src={homeData.expertPerson}
                style={{
                  height: 'auto',
                }}
                className="max-w-[335px] md:max-w-[373px]"
                alt="expertPerson"
              />
              <div className="p-[30px]">
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '18px',
                      lineHeight: '22.1px',
                    },
                    fontSize: '25px',
                    color: theme.colors.golden,
                    lineHeight: '35.7px',
                  })}
                  className="font-semibold"
                >
                  {homeData.expertName}
                </Text>
                <div className="max-w-[1032px]  mt-6">
                  <div className="flex mb-5">
                    <Text
                      sx={(theme) => ({
                        [theme.fn.smallerThan('md')]: {
                          fontSize: '13px',
                          lineHeight: '22.1px',
                        },
                        fontSize: '21px',
                        color: theme.colors.darkBlue,
                        lineHeight: '30.7px',
                      })}
                      className="font-semibold "
                    >
                      {homeData.gci}
                    </Text>{' '}
                    <Text
                      sx={(theme) => ({
                        [theme.fn.smallerThan('md')]: {
                          fontSize: '13px',
                          lineHeight: '22.1px',
                        },
                        fontSize: '21px',
                        color: theme.colors.darkBlue,
                        lineHeight: '30.7px',
                      })}
                      className="font-semibold "
                    >
                      {homeData.moderator}
                    </Text>
                  </div>
                  <Text
                    sx={(theme) => ({
                      [theme.fn.smallerThan('md')]: {
                        fontSize: '13px',
                        lineHeight: '22.1px',
                      },
                      fontSize: '18px',
                      color: theme.colors.darkBlue,
                      lineHeight: '30.7px',
                    })}
                    className="font-normal"
                  >
                    {homeData.experience}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

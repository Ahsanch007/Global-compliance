import { Box, Text } from '@mantine/core';
import React from 'react';
import { signupData } from './signupData';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import Image from 'next/image';
import Link from 'next/link';
import { theme } from '@/theme/theme';

export const Signup = () => {
  return (
    <>
      <div className="grid gap-[3rem]">
        <div className="md:max-w-[406px] md:w-100 max-w-[336px] w-100">
          <div className="grid gap-4">
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '25px',
                  lineHeight: '37.5px',
                },
                fontSize: '40px',
                color: theme.colors.darkBlue,
                lineHeight: '60px',
              })}
              className="font-semibold  max-w-[232px] w-[100] md:max-w-[373px] md:w-100"
            >
              {signupData.headingText}
            </Text>
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '14px',
                  lineHeight: '23.8px',
                },
                fontSize: '18px',
                color: theme.colors.darkBlue,
                lineHeight: '30.6px',
              })}
              className=" font-normal  max-w-[327px] w-[100] md:max-w-[406px] md:w-100"
            >
              {signupData.subText}
            </Text>
          </div>
        </div>
        <div className="md:max-w-[373px] md:w-100 max-w-[336px] w-100">
          <div className="flex justify-between md:max-w-[373px] md:w-100 max-w-[336px] w-100">
            <ButtonPrimary
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '13px',
                  height: '45px',
                },
                fontSize: '13px',
                backgroundColor: theme.colors.darkBlue,
                borderRadius: '10px',
                height: '45px',
              })}
              className="   md:max-w-[243px] md:w-100"
            >
              <Image
                src="/icons/google-glass-logo 1.svg"
                className="mx-2"
                height={18}
                width={18}
                alt="google"
              />
              {signupData.ctxText}
            </ButtonPrimary>
            <div className="flex gap-2">
              <Box className="rounded-[10px] w-[45px] cursor-pointer h-45px justify-center flex items-center border border-solid  border-grayBorder  ">
                <Image
                  src="/icons/linkedin (3) 1.svg"
                  className="mx-2"
                  height={18}
                  width={18}
                  alt="linkedin"
                />
              </Box>
              <Box className="rounded-[10px] w-[45px] cursor-pointer h-45px justify-center flex items-center border border-solid  border-grayBorder  ">
                <Image
                  src="/icons/apple 1.svg"
                  className="mx-2"
                  height={18}
                  width={18}
                  alt="apple"
                />
              </Box>
            </div>
          </div>
          <div>
            <Image
              className="md:max-w-[373px] md:w-100 max-w-[336px] w-100 my-3"
              src="/icons/Group 1593.svg"
              height={14}
              width={1000}
              alt="divider"
            />
          </div>

          <form className="md:max-w-[373px] md:w-100 max-w-[336px] w-100 my-3">
            <div className="grid gap-3">
              <div className="rounded-[10px] border border-solid border-grayBorder p-3 flex">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-100 outline-none border-none"
                />
              </div>
              <div className="rounded-[10px] border border-solid border-grayBorder p-3 flex ">
                <input
                  type="text"
                  className="w-100 outline-none border-none"
                  placeholder="Your E-mail"
                />
              </div>
              <div className="rounded-[10px] border border-solid border-grayBorder p-3 flex justify-between">
                <input
                  type="Password"
                  className="w-100 outline-none border-none"
                  placeholder="Password"
                />
                <Image
                  src="/icons/info.svg"
                  className="cursor-pointer"
                  height={17}
                  width={17}
                  alt="info"
                />
              </div>
            </div>
            <div>
              <Image
                className="md:max-w-[373px] md:w-100 max-w-[336px] w-100 my-3"
                src="/icons/Group 1589.svg"
                height={4}
                width={1000}
                alt="divider"
              />
            </div>
            <div className="terms :max-w-[336px] :w-100 flex ">
              {/* <Checkbox size="md" label="I agree to sell my privacy" color="indigo" /> */}
              <input
                type="checkbox"
                className="h-[18px] cursor-pointer w-[18px] text-indigo-600"
              />
              <div className="max-w-[308px] w-100 ">
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '12px',
                      lineHeight: '20.4px',
                    },
                    fontSize: '14px',
                    color: theme.colors.darkBlue,
                    lineHeight: '20.4px',
                  })}
                  className="ml-3  font-normal "
                >
                  {signupData.termsText}
                  <Text
                    sx={(theme) => ({
                      [theme.fn.smallerThan('md')]: {
                        fontSize: '12px',
                        lineHeight: '20.4px',
                      },
                      fontSize: '14px',
                      color: theme.colors.golden,
                      lineHeight: '20.4px',
                      display: 'inline-block',
                      textDecoration: 'underline',
                    })}
                    className=" cursor-pointer  font-normal "
                  >
                    {signupData.terms}
                  </Text>
                  <span className=" mx-2 md:text-[14px] text-[12px] font-normal leading-[20.4px]  ">
                    {signupData.subTermsText}
                  </span>
                  <Text
                    sx={(theme) => ({
                      [theme.fn.smallerThan('md')]: {
                        fontSize: '12px',
                        lineHeight: '20.4px',
                      },
                      fontSize: '14px',
                      color: theme.colors.golden,
                      lineHeight: '20.4px',
                      display: 'inline-block',
                      textDecoration: 'underline',
                    })}
                    className="  cursor-pointer font-normal "
                  >
                    {signupData.privacy}
                  </Text>
                </Text>
              </div>
            </div>
            <div className="terms md:max-w-[373px] md:w-100 max-w-[335px] w-100 mt-5 ">
              <ButtonPrimary
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '14px',
                    height: '45px',
                    width: '335px',
                  },
                  fontSize: '15px',
                  backgroundColor: theme.colors.golden,
                  borderRadius: '10px',
                  height: '45px',
                  width: '373px',
                })}
              >
                {signupData.ctxText2}
              </ButtonPrimary>
            </div>
            <div className="md:max-w-[227px] md:mx-auto justify-center mt-3 md:w-100 max-w-[335px] flex">
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '15px',
                    lineHeight: '17.66px',
                  },
                  fontSize: '15px',
                  color: theme.colors.lightBlue,
                  lineHeight: '17.66px',
                })}
                className="font-medium"
              >
                {signupData.text}
              </Text>
              <Link
                href="../auth/login"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '15px',
                      lineHeight: '17.66px',
                    },
                    fontSize: '15px',
                    color: theme.colors.lightBlue,
                    lineHeight: '17.66px',
                  })}
                  className="cursor-pointer    font-semibold"
                >
                  {signupData.login}
                </Text>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

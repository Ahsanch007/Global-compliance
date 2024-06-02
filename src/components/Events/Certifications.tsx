import React, { useState } from 'react';
import { homeData } from './homeData';
import { Text } from '@mantine/core';
import Image from 'next/image';
import { theme } from '@/theme/theme';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import { CustomTab } from '../Tabs/CustomTab';

export const Certifications = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0); // State to track selected tab index

  const handleTabClick = (index: number) => {
    setSelectedTabIndex(index); // Update the selectedTabIndex when a tab is clicked
  };
  return (
    <>
      <div className="w-full">
        <div className="max-w-[918px] w-full mb-[2rem]">
          <Text
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '25px',
                lineHeight: '40.82px',
              },
              fontSize: '45px',
              color: theme.colors.darkBlue,
              lineHeight: '67.5px',
            })}
            className=" font-semibold"
          >
            {homeData.scx}
          </Text>
        </div>
        <div className="flex flex-wrap justify-between gap-2">
          {/* first column  */}
          <div className={`max-w-[335px] md:max-w-[1039px] `}>
            <div className="max-w-[335px] md:max-w-[750px] lg:max-w-[900px] xl:max-w-[1039px]">
              <Image
                src={homeData.certifImg}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
                height={1000}
                width={1000}
                alt="ship"
              />
            </div>

            <div className="max-w-[959px]  mx-auto my-[2rem]">
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '1opx',
                    // lineHeight: '29.82px',
                  },
                  fontSize: '18px',
                  color: theme.colors.darkBlue,
                  lineHeight: '30.6px',
                })}
                className=" font-normal my-[2rem]"
              >
                {homeData.latest}
              </Text>
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '1opx',
                    // lineHeight: '29.82px',
                  },
                  fontSize: '18px',
                  color: theme.colors.darkBlue,
                  lineHeight: '30.6px',
                })}
                className=" font-normal mt-3"
              >
                {homeData.more}
              </Text>
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '1opx',
                    // lineHeight: '29.82px',
                  },
                  fontSize: '18px',
                  color: theme.colors.darkBlue,
                  lineHeight: '30.6px',
                })}
                className=" font-normal mb-3"
              >
                {homeData.much}
              </Text>
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '1opx',
                    // lineHeight: '29.82px',
                  },
                  fontSize: '18px',
                  color: theme.colors.darkBlue,
                  lineHeight: '30.6px',
                })}
                className=" font-semibold my-[2rem]"
              >
                {homeData.price}
              </Text>
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '1opx',
                    // lineHeight: '29.82px',
                  },
                  fontSize: '18px',
                  color: theme.colors.darkBlue,
                  lineHeight: '30.6px',
                })}
                className=" font-normal my-[2rem]"
              >
                {homeData.year}
              </Text>{' '}
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '1opx',
                    // lineHeight: '29.82px',
                  },
                  fontSize: '18px',
                  color: theme.colors.darkBlue,
                  lineHeight: '30.6px',
                })}
                className=" font-normal "
              >
                {homeData.enrol}
              </Text>
            </div>
          </div>
          {/* second column  */}

          <div className=" ">
            <div>
              <div
                className="rounded-[20px] max-w-[421px] w-full p-4 "
                style={{
                  background: theme.colors.darkBlue[0],
                }}
              >
                <div className="max-w-[341] w-full text-center">
                  <Text
                    sx={(theme) => ({
                      [theme.fn.smallerThan('md')]: {
                        fontSize: '20px',
                        // lineHeight: '29.82px',
                      },
                      fontSize: '30px',
                      color: 'white',
                      lineHeight: '51px',
                    })}
                    className=" font-semibold"
                  >
                    {homeData.download}
                  </Text>
                </div>
                <div className="max-w-[341] w-full text-center my-5">
                  <Text
                    sx={(theme) => ({
                      [theme.fn.smallerThan('md')]: {
                        fontSize: '13px',
                        // lineHeight: '29.82px',
                      },
                      fontSize: '21px',
                      color: 'white',
                      lineHeight: '35.7px',
                    })}
                    className=" font-normal"
                  >
                    {homeData.subDownload}
                  </Text>
                </div>
                <div className="max-w-[318px] mx-auto w-full text-center my-5">
                  <ButtonPrimary
                    sx={{
                      backgroundColor: theme.colors.golden,
                      borderRadius: '70px',
                      height: '60px',
                      width: '100%',
                    }}
                  >
                    {homeData.ctxDownload}
                  </ButtonPrimary>
                </div>
              </div>
              <div className="mt-[2rem]">
                <div className="title">
                  <Text
                    sx={(theme) => ({
                      [theme.fn.smallerThan('md')]: {
                        fontSize: '13px',
                        // lineHeight: '29.82px',
                      },
                      fontSize: '35px',
                      color: theme.colors.darkBlue,
                      lineHeight: '52.5px',
                    })}
                    className=" font-semibold"
                  >
                    {homeData.other}
                  </Text>
                </div>

                <div
                  className="mt-[2rem] rounded-[20px] max-w-[421px] "
                  style={{
                    boxShadow: '0px 25px 46px -17px #0000000D',
                    border: '1px solid #EEEEEE',
                  }}
                >
                  <ul>
                    {homeData.certificateList.map((certificate, index) => (
                      <li
                        style={{
                          fontSize: '18px',
                          lineHeight: '64.8px',
                        }}
                        className="list-none p-1 font-medium cursor-pointer"
                        key={index}
                      >
                        {certificate}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between  my-[2rem]">
          <div className="max-w-[247px] w-full">
            {homeData.links.map((links, index) => (
              <Text
                key={links.id}
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '18px',
                    // lineHeight: '29.82px',
                  },
                  fontSize: '25px',
                  color:
                    index === selectedTabIndex
                      ? theme.colors.golden
                      : theme.colors.darkGray,
                  lineHeight: '37.5px',
                  transition: 'color 0.3s ease', // Add a transition for a smooth color change
                  '&:hover': {
                    color: theme.colors.golden, // Change the color on hover
                  },
                  '&:focus, &:active': {
                    color: theme.colors.golden, // Change the color on focus and active
                  },
                })}
                onClick={() => handleTabClick(index)}
                className={`font-semibold py-5 cursor-pointer `}
              >
                {links.text}
              </Text>
            ))}
          </div>
          <div className="max-w-[1147px] w-full ">
            <CustomTab selectedTabIndex={selectedTabIndex} />
          </div>
        </div>
        <div className="flex justify-end my-[2rem] gap-4">
          <ButtonPrimary
            sx={{
              backgroundColor: theme.colors.darkBlue,
              borderRadius: '70px',
              height: '60px',
              color: 'white',
              width: '235px',
              fontSize: '18px',
            }}
          >
            {homeData.syllabus}
          </ButtonPrimary>
          <ButtonPrimary
            sx={{
              backgroundColor: theme.colors.golden,
              borderRadius: '70px',
              height: '60px',
              width: '235px',
              fontSize: '18px',
            }}
          >
            {homeData.apply}
          </ButtonPrimary>
        </div>
      </div>
    </>
  );
};

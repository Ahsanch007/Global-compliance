import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';
import React from 'react';

import { Text } from '@mantine/core';
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary';
import { programData } from '../programs/programData';
import { cardData } from './cardData';
import { ScheduleExamModal } from '@/components/Modal/ScheduleExamModal';

export const ExamCard = () => {
  const isSmallScreen = useMediaQuery('(max-width: 500px)');
  // const isMediumScreen = useMediaQuery('(max-width: 1200px)');
  const [
    scheduleExamOpened,
    { open: openScheduleExam, close: closeScheduleExam },
  ] = useDisclosure(false);

  return (
    <>
      <ScheduleExamModal
        opened={scheduleExamOpened}
        close={closeScheduleExam}
      />
      <div
        // className={` ${
        //   isSmallScreen
        //     ? 'max-w-[245px]'
        //     : isMediumScreen
        //     ? 'max-w-[500px] w-full mx-auto'
        //     : 'max-w-[1175px]'
        // }   bg-white rounded-[20px]`}
        className="sm:max-w-[412px] sm:mx-auto xl:max-w-[1175px] w-full mx-auto bg-white rounded-[20px] overflow-hidden"
        style={{
          boxShadow: '0px 17px 46px -17px #0000001A',
        }}
      >
        <div className="flex flex-nowrap flex-col xl:flex-row  ">
          <div className={`mt-0`}>
            <Image
              src={programData.img}
              width={1000}
              height={1000}
              // style={{
              //   maxWidth: isSmallScreen ? '100%' : isMediumScreen ? '500px' : '412px',
              //   height: 'auto',
              // }}
              className="max-w-full sm:max-w-[500px] lg:max-w-[412px] w-full h-full object-cover"
              alt="program"
            />
          </div>
          <div
            // className={`card-content ${
            //   isSmallScreen ? 'max-w-[245px]' : isMediumScreen ? 'max-w-[500px]' : 'max-w-[763px]'
            // }  w-full   p-3 px-6  my-0`}
            className="max-w-full text-center sm:max-w-[600px]  lg:max-w-[581px] 2xl:max-w-[763px] sm:text-start w-full  px-8 py-3 "
          >
            <div className="md:max-w-[586px] md:w-full w-full flex items-center gap-4 md:gap-6">
              <Image
                src={cardData.cardIcon}
                style={{
                  maxWidth: '52px',
                  height: 'auto',
                }}
                height={1000}
                width={1000}
                alt="fatca"
              />
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '16px',
                    lineHeight: '24px',
                  },
                  fontSize: '25px',
                  lineHeight: '37.5px',
                  color: theme.colors.darkBlue,
                })}
                className="font-semibold md:max-w-[510px] md:w-full max-w-[205px] text-left"
              >
                {cardData.title}
              </Text>
            </div>

            <div className="md:max-w-[586px] md:w-full w-full flex items-center justify-between my-[2rem]">
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
                  className="font-semibold"
                >
                  {cardData.virtual}
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
                  className="font-normal"
                >
                  {cardData.delivery}
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
                  className="font-semibold"
                >
                  {cardData.virtual}
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
                  className="font-normal"
                >
                  {cardData.delivery}
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
                  className="font-semibold"
                >
                  {cardData.virtual}
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
                  className="font-normal"
                >
                  {cardData.delivery}
                </Text>
              </div>
            </div>
            <div className="md:max-w-[586px] md:w-full w-full flex items-center justify-between my-[2rem]">
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
                  className="font-semibold"
                >
                  {cardData.virtual}
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
                  className="font-normal"
                >
                  {cardData.delivery}
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
                  className="font-semibold"
                >
                  {cardData.virtual}
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
                  className="font-normal"
                >
                  {cardData.delivery}
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
                  className="font-semibold"
                >
                  {cardData.virtual}
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
                  className="font-normal"
                >
                  {cardData.delivery}
                </Text>
              </div>
            </div>

            <div className="flex flex-wrap flex-col xl:flex-row md:gap-4 gap-3  md:max-w-[600px] lg:w-full">
              <ButtonPrimary
                sx={(theme) => ({
                  [theme.fn.smallerThan('lg')]: {
                    fontSize: '14px',
                    lineHeight: '23.8px',
                    width: '100%',
                  },
                  borderRadius: '40px',
                  backgroundColor: theme.colors.darkBlue,
                  fontSize: '15px',
                  lineHeight: '25.5px',
                })}
                onClick={() => {
                  openScheduleExam();
                }}
                className=" font-medium w-full md:auto "
              >
                {programData.btn2}
              </ButtonPrimary>
              <ButtonPrimary
                sx={(theme) => ({
                  [theme.fn.smallerThan('lg')]: {
                    fontSize: '14px',
                    lineHeight: '23.8px',
                    width: '100%',
                  },
                  borderRadius: '40px',
                  backgroundColor: theme.colors.golden,
                  fontSize: '15px',
                  lineHeight: '25.5px',
                })}
                className=" font-medium w-full  "
              >
                {programData.btn1}
              </ButtonPrimary>

              <ButtonPrimary
                sx={(theme) => ({
                  [theme.fn.smallerThan('lg')]: {
                    fontSize: '14px',
                    lineHeight: '23.8px',
                    width: '100%',
                  },
                  borderRadius: '40px',
                  backgroundColor: 'white',
                  fontSize: '15px',
                  lineHeight: '25.5px',
                  border: '1px solid #1D2B39',
                  color: theme.colors.darkBlue,
                })}
                className={` w-full  font-medium`}
              >
                {cardData.btnPract}
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

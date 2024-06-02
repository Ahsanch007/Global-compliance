import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import React from 'react';
import { programData } from './programData';
import { Button, Text } from '@mantine/core';
import { ScheduleExamModal } from '@/components/Modal/ScheduleExamModal';
import { MoreModal } from '@/components/Modal/ViewMorePopup';
import { GuidePopup } from '@/components/Modal/GuidePopup';

export const ProgramsCard = () => {
  // const [opened, { open, close }] = useDisclosure(false);
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
        //   isSmallScreen ? 'max-w-[245px]' : isMediumScreen ? 'max-w-[500px] w-full mx-auto' : 'max-w-[1175px]'
        // }   bg-white rounded-[20px]`}
        className=" sm:max-w-[412px] sm:mx-auto xl:max-w-[1175px] w-full mx-auto bg-white rounded-[20px] overflow-hidden"
        style={{
          boxShadow: '0px 17px 46px -17px #0000001A',
        }}
      >
        <div className="flex flex-col xl:flex-row flex-nowrap xl:justify-between">
          <div className={`img relative`}>
            <img
              src={programData.img}
              style={{
                height: 'auto',
              }}
              className="max-w-full sm:max-w-[500px] lg:max-w-[412px] w-full  object-cover"
              alt="program"
            />

            {/*   three dots image*/}
            <div
              className={`absolute sm:hidden max-w-[45px]  w-full rounded-[10px]  flex justify-center p-4 top-[10px] right-[10px] bg-white `}
            >
              <Image
                src={programData.union}
                height={18}
                width={4.15}
                alt="union"
                className="mx-4"
              />
            </div>
          </div>
          <div
            // className={`card-content ${
            //   isSmallScreen ? 'max-w-full text-center' : isMediumScreen ? 'max-w-[500px]' : 'max-w-[650px]'
            // }  w-full   p-3 md:my-[2rem] my-0`}
            className="flex justify-center flex-col max-w-full text-center md:max-w-[500px] lg:max-w-[550px] 2xl:max-w-[650px] sm:text-start w-full   px-4 md:py-8 py-3 my-0"
          >
            <div className="lg:max-w-[554px] lg:w-full w-full mx-auto md:mx-0">
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
                className="font-semibold md:max-w-[554px] lg:w-full max-w-full "
              >
                {programData.text}
              </Text>
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '14px',
                    lineHeight: '23.8px',
                  },
                  fontSize: '18px',
                  lineHeight: '30.6px',
                  color: theme.colors.darkBlue,
                })}
                className="font-normal lg:max-w-[534px] lg:w-full my-[1.5rem]"
              >
                {programData.subText}
              </Text>
            </div>
            <div className="flex flex-wrap flex-col xl:flex-row lg:gap-3 gap-2 lg:max-w-[600px] lg:w-full ">
              <Button
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
                className=" font-medium  "
              >
                {programData.btn1}
              </Button>
              <Button
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
                onClick={openScheduleExam}
                className="button-primary"
              >
                {programData.btn2}
              </Button>

              <GuidePopup />
            </div>
          </div>

          <MoreModal />
        </div>
      </div>
    </>
  );
};

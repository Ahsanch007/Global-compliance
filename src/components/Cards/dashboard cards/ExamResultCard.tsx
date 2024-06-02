import { Text } from '@mantine/core';
import React from 'react';
import { cardData } from './cardData';
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary';

export const ExamResultCard = () => {
  return (
    <>
      <div
        className="rounded-[20px] max-w-[546px] w-full bg-white p-4"
        style={{
          boxShadow: '0px 17px 46px -17px #0000001A',
        }}
      >
        <div>
          <Text
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '12px',
                lineHeight: '19.09px',
              },
              fontSize: '16px',
              color: theme.colors.greyText,
              lineHeight: '19.09px',
            })}
            className="font-semibold text-center my-3"
          >
            {cardData.result}
          </Text>
        </div>
        {/* <div className="max-w-[269px] w-full mx-auto  my-3">
          <Text
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '18px',
                lineHeight: '19.09px',
              },
              fontSize: '23px',
              color: theme.colors.darkBlue,
              lineHeight: '34.5px',
            })}
            className="font-semibold  text-center"
          >
            {cardData.congrats}
          </Text>
        </div> */}
        <div className="max-w-[322px] w-full mx-auto  my-3">
          <Text
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '18px',
                lineHeight: '19.09px',
              },
              fontSize: '23px',
              color: theme.colors.darkBlue,
              lineHeight: '34.5px',
            })}
            className="font-semibold  "
          >
            {cardData.fail}
          </Text>
        </div>
        <div className="my-[2rem] max-w-[490px] w-full flex justify-between  mx-auto">
          <ButtonPrimary
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '14px',
                color: theme.colors.darkBlue,
                backgroundColor: 'transparent',
                border: '1px solid #1D2B39',
              },
              fontSize: '18px',
              color: theme.colors.darkBlue,
              borderRadius: '70px',
              height: '45px',
              width: '235px',
              border: '1px solid #1D2B39',
            })}
            className="  w-full  "
          >
            {cardData.btnText}
          </ButtonPrimary>
          <ButtonPrimary
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '14px',
                color: theme.colors.darkBlue,
                backgroundColor: 'transparent',
                border: '1px solid #1D2B39',
              },
              fontSize: '18px',
              color: 'white',
              borderRadius: '70px',
              backgroundColor: theme.colors.golden,
              height: '45px',
              width: '235px',
            })}
            className="  w-full  "
          >
            {cardData.report}
          </ButtonPrimary>
        </div>
        {/* <div className="my-[2rem] text-center">
          <ButtonPrimary
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '14px',
                color: theme.colors.darkBlue,
                backgroundColor: 'transparent',
                border: '1px solid #1D2B39',
              },
              fontSize: '18px',
              color: 'white',
              borderRadius: '70px',
              backgroundColor: theme.colors.golden,
              height: '45px',
              maxWidth: '235px',
            })}
            className="  w-full  "
          >
            {cardData.btnText}
          </ButtonPrimary>
        </div> */}
      </div>
    </>
  );
};

'use client';
import React from 'react';
import { dashboardData } from './dashboardData';
import { Text } from '@mantine/core';
// import { ExamResultCard } from '../Cards/dashboard cards/ExamResultCard';
import { ExamCard } from '../Cards/dashboard cards/ExamCard';

export const Exam = () => {
  return (
    <>
      <div className="p-4">
        <div className="py-5 max-w-[584px] w-full flex items-center justify-between">
          <Text
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '18px',
                lineHeight: '21.47px',
              },
              fontSize: '25px',
              color: theme.colors.darkBlue,
              lineHeight: '29.82px',
            })}
            className="font-semibold"
          >
            {dashboardData.exam}
          </Text>
          <Text
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '18px',
                lineHeight: '21.47px',
              },
              fontSize: '21px',
              color: theme.colors.greyText,
              lineHeight: '24.72px',
            })}
            className="font-medium"
          >
            {dashboardData.examSUbText}
          </Text>
        </div>
        <div className="grid gap-6 my-[2rem]">
          <ExamCard />
          <ExamCard />
        </div>
        {/* <div className="py-4 flex justify-center items-center mt-[5rem]">
          <ExamResultCard />
        </div> */}
      </div>
    </>
  );
};

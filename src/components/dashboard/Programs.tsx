'use client';
import { Text } from '@mantine/core';
import React from 'react';
import { dashboardData } from './dashboardData';
import { ProgramsCard } from '../Cards/programs/ProgramsCard';

export const Programs = () => {
  return (
    <>
      <div className="rightbar md:flex-1 md:max-w-[1235px] w-full">
        <div className="p-4 mt-5">
          <div>
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '18px',
                  lineHeight: '21px',
                },
                fontSize: '25px',
                lineHeight: '29.82px',
              })}
              className="font-semibold text-darkBlue"
            >
              {dashboardData.text}
            </Text>
          </div>
          <div className="mt-[2rem] grid gap-4">
            <ProgramsCard />
            <ProgramsCard />
            <ProgramsCard />
          </div>
        </div>
      </div>
    </>
  );
};

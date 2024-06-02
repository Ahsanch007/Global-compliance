'use client';
import { Text } from '@mantine/core';
import React from 'react';
import { Personalinfo } from '../Cards/dashboard cards/Personalinfo';
import { ContactCard } from '../Cards/dashboard cards/ContactCard';
import { MembershipCard } from '../Cards/dashboard cards/MembershipCard';
import { useMediaQuery } from '@mantine/hooks';
import { dashboardData } from './dashboardData';
import { CCMCards } from '../Cards/dashboard cards/CCMCards';

export const Main = () => {
  const isLargeScreen = useMediaQuery('(max-width: 1366px)');
  const isSmallScreen = useMediaQuery('(max-width: 932px)');

  return (
    <>
      <div className="rightbar md:flex-1 md:max-w-[1235px] w-full">
        <div
          className={`grid xl:grid-cols-[minmax(329px,1fr),1.5fr,minmax(293px,1fr)] flex-wrap  justify-center gap-4 p-4 mt-[2rem]`}
        >
          <Personalinfo />
          <ContactCard />
          <MembershipCard />
        </div>
        <div className="p-4 bg-white">
          <div className="py-5">
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
              {dashboardData.title}
            </Text>
          </div>
          <div className=" py-4">
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <CCMCards status={'complete'} />
              <CCMCards status={'inprogress'} />
              <CCMCards status={'already-purchased'} />
              <CCMCards />
              <CCMCards />
              <CCMCards />
              {/*<div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 ">*/}
              {/*  <div>*/}
              {/*    <CCMCards status={'complete'} />*/}
              {/*  </div>*/}
              {/*</div>*/}
              {/*<div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 ">*/}
              {/*  <div>*/}
              {/*    <CCMCards status={'inprogress'} />*/}
              {/*  </div>*/}
              {/*</div>*/}
              {/*<div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 ">*/}
              {/*  <div>*/}
              {/*    <CCMCards status={'already-purchased'} />*/}
              {/*  </div>*/}
              {/*</div>*/}
              {/*<div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 ">*/}
              {/*  <div>*/}
              {/*    <CCMCards />*/}
              {/*  </div>*/}
              {/*</div>*/}
              {/*<div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 ">*/}
              {/*  <div>*/}
              {/*    <CCMCards />*/}
              {/*  </div>*/}
              {/*</div>*/}
              {/*<div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 ">*/}
              {/*  <div>*/}
              {/*    <CCMCards />*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

'use client';
import { Text } from '@mantine/core';
import React from 'react';
import { dashboardData } from './dashboardData';
import { CCMCards } from '../Cards/dashboard cards/CCMCards';
import { DashboardCertificate } from '../Cards/dashboard cards/DashboardCertificate';
import { CCMCard } from '../Cards/dashboard cards/CCMCard2';

export const CertificateDashboard = () => {
  return (
    <>
      <div className="p-4 ">
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
            {dashboardData.certificate}
          </Text>
        </div>
        <div className=" py-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 ">
              <div>
                <DashboardCertificate />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 ">
              <div>
                <DashboardCertificate />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 ">
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
            {dashboardData.secondTitle}
          </Text>
        </div>
        <div className=" py-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 ">
              <div>
                <CCMCard />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 ">
              <div>
                <CCMCard />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 ">
              <div>
                <CCMCard />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 ">
              <div>
                <CCMCard />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 ">
              <div>
                <CCMCard />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 ">
              <div>
                <CCMCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 ">
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
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 ">
              <div>
                <CCMCards status={'complete'} />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 ">
              <div>
                <CCMCards status={'inprogress'} />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 ">
              <div>
                <CCMCards status={'already-purchased'} />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 ">
              <div>
                <CCMCards />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 ">
              <div>
                <CCMCards />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 ">
              <div>
                <CCMCards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

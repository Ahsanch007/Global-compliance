import { Text } from '@mantine/core';
import React from 'react';
import { homeData } from '../Events/homeData';
import { theme } from '@/theme/theme';

interface CustomTabProps {
  selectedTabIndex: number;
}
export const CustomTab: React.FC<CustomTabProps> = ({ selectedTabIndex }) => {
  return (
    <>
      {selectedTabIndex === 0 && (
        <div
          className="rounded-[20px] p-6 "
          style={{
            boxShadow: '0px 25px 46px -17px #0000000D',
            border: '1px solid #EEEEEE',
          }}
        >
          <div className="max-w-[905px] my-[2rem]">
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '18px',
                  // lineHeight: '29.82px',
                },
                fontSize: '21px',
                color: theme.colors.golden,
                lineHeight: '36.7px',
              })}
              className=" font-semibold "
            >
              {homeData.compliance}
            </Text>
            <div className="my-5">
              <ul>
                {homeData.financialEntities.map((finance, index) => (
                  <li
                    key={index}
                    style={{
                      color: theme.colors.darkBlue[0],
                      fontSize: '18px',
                      lineHeight: '30.6px',
                    }}
                    className="  font-medium"
                  >
                    {finance.category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="max-w-[905px] ">
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '18px',
                  // lineHeight: '29.82px',
                },
                fontSize: '21px',
                color: theme.colors.golden,
                lineHeight: '36.7px',
              })}
              className=" font-semibold "
            >
              {homeData.workers}
            </Text>
            <div className="my-5">
              <ul>
                {homeData.financial.map((finance, index) => (
                  <li
                    key={index}
                    style={{
                      color: theme.colors.darkBlue[0],
                      fontSize: '18px',
                      lineHeight: '30.6px',
                    }}
                    className="  font-medium"
                  >
                    {finance.category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="max-w-[905px] mt-[2rem]">
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '18px',
                  // lineHeight: '29.82px',
                },
                fontSize: '21px',
                color: theme.colors.golden,
                lineHeight: '36.7px',
              })}
              className=" font-semibold "
            >
              {homeData.itSolution}
            </Text>
          </div>
        </div>
      )}
      {selectedTabIndex === 1 && (
        <div
          className="rounded-[20px] p-6 "
          style={{
            boxShadow: '0px 25px 46px -17px #0000000D',
            border: '1px solid #EEEEEE',
          }}
        >
          <div className="max-w-[905px] my-[2rem]">
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '18px',
                  // lineHeight: '29.82px',
                },
                fontSize: '21px',
                color: theme.colors.golden,
                lineHeight: '36.7px',
              })}
              className=" font-semibold "
            >
              {homeData.candidates}
            </Text>
            <div className="my-5">
              <ul>
                {homeData.financialEntities.map((finance, index) => (
                  <li
                    key={index}
                    style={{
                      color: theme.colors.darkBlue[0],
                      fontSize: '18px',
                      lineHeight: '30.6px',
                    }}
                    className="  font-medium"
                  >
                    {finance.category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="max-w-[905px] ">
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '18px',
                  // lineHeight: '29.82px',
                },
                fontSize: '21px',
                color: theme.colors.golden,
                lineHeight: '36.7px',
              })}
              className=" font-semibold "
            >
              {homeData.workers}
            </Text>
            <div className="my-5">
              <ul>
                {homeData.financial.map((finance, index) => (
                  <li
                    key={index}
                    style={{
                      color: theme.colors.darkBlue[0],
                      fontSize: '18px',
                      lineHeight: '30.6px',
                    }}
                    className="  font-medium"
                  >
                    {finance.category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      {selectedTabIndex === 2 && (
        <div
          className="rounded-[20px] p-6 "
          style={{
            boxShadow: '0px 25px 46px -17px #0000000D',
            border: '1px solid #EEEEEE',
          }}
        >
          <div className="max-w-[905px] my-[2rem]">
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '18px',
                  // lineHeight: '29.82px',
                },
                fontSize: '21px',
                color: theme.colors.golden,
                lineHeight: '36.7px',
              })}
              className=" font-semibold "
            >
              {homeData.examination}
            </Text>
            <div className="my-5">
              <ul>
                {homeData.financialEntities.map((finance, index) => (
                  <li
                    key={index}
                    style={{
                      color: theme.colors.darkBlue[0],
                      fontSize: '18px',
                      lineHeight: '30.6px',
                    }}
                    className="  font-medium"
                  >
                    {finance.category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="max-w-[905px] ">
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '18px',
                  // lineHeight: '29.82px',
                },
                fontSize: '21px',
                color: theme.colors.golden,
                lineHeight: '36.7px',
              })}
              className=" font-semibold "
            >
              {homeData.workers}
            </Text>
            <div className="my-5">
              <ul>
                {homeData.financial.map((finance, index) => (
                  <li
                    key={index}
                    style={{
                      color: theme.colors.darkBlue[0],
                      fontSize: '18px',
                      lineHeight: '30.6px',
                    }}
                    className="  font-medium"
                  >
                    {finance.category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="max-w-[905px] mt-[2rem]">
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '18px',
                  // lineHeight: '29.82px',
                },
                fontSize: '21px',
                color: theme.colors.golden,
                lineHeight: '36.7px',
              })}
              className=" font-semibold "
            >
              {homeData.itSolution}
            </Text>
          </div>
        </div>
      )}
      {selectedTabIndex === 3 && (
        <div
          className="rounded-[20px] p-6 "
          style={{
            boxShadow: '0px 25px 46px -17px #0000000D',
            border: '1px solid #EEEEEE',
          }}
        >
          <div className="max-w-[905px] my-[2rem]">
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '18px',
                  // lineHeight: '29.82px',
                },
                fontSize: '21px',
                color: theme.colors.golden,
                lineHeight: '36.7px',
              })}
              className=" font-semibold "
            >
              {homeData.languages}
            </Text>
            <div className="my-5">
              <ul>
                {homeData.financialEntities.map((finance, index) => (
                  <li
                    key={index}
                    style={{
                      color: theme.colors.darkBlue[0],
                      fontSize: '18px',
                      lineHeight: '30.6px',
                    }}
                    className="  font-medium"
                  >
                    {finance.category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      {selectedTabIndex === 4 && (
        <div
          className="rounded-[20px] p-6 "
          style={{
            boxShadow: '0px 25px 46px -17px #0000000D',
            border: '1px solid #EEEEEE',
          }}
        >
          <div className="max-w-[905px] my-[2rem]">
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '18px',
                  // lineHeight: '29.82px',
                },
                fontSize: '21px',
                color: theme.colors.golden,
                lineHeight: '36.7px',
              })}
              className=" font-semibold "
            >
              {homeData.compliance}
            </Text>
            <div className="my-5">
              <ul>
                {homeData.financialEntities.map((finance, index) => (
                  <li
                    key={index}
                    style={{
                      color: theme.colors.darkBlue[0],
                      fontSize: '18px',
                      lineHeight: '30.6px',
                    }}
                    className="  font-medium"
                  >
                    {finance.category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="max-w-[905px] ">
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '18px',
                  // lineHeight: '29.82px',
                },
                fontSize: '21px',
                color: theme.colors.golden,
                lineHeight: '36.7px',
              })}
              className=" font-semibold "
            >
              {homeData.workers}
            </Text>
            <div className="my-5">
              <ul>
                {homeData.financial.map((finance, index) => (
                  <li
                    key={index}
                    style={{
                      color: theme.colors.darkBlue[0],
                      fontSize: '18px',
                      lineHeight: '30.6px',
                    }}
                    className="  font-medium"
                  >
                    {finance.category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="max-w-[905px] mt-[2rem]">
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '18px',
                  // lineHeight: '29.82px',
                },
                fontSize: '21px',
                color: theme.colors.golden,
                lineHeight: '36.7px',
              })}
              className=" font-semibold "
            >
              {homeData.itSolution}
            </Text>
          </div>
        </div>
      )}
    </>
  );
};

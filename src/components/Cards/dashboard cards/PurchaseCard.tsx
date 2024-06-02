import Image from 'next/image';
import React from 'react';
import { cardData } from './cardData';
import { Text } from '@mantine/core';
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary';

export const PurchaseCard = () => {
  return (
    <>
      <div
        className={`rounded-[20px] bg-white max-w-[245px] md:max-w-[486px] w-full`}
        style={{ boxShadow: '0px 17px 46px -17px #0000001A' }}
      >
        <div className="img">
          <Image
            src={cardData.purchaseImg}
            className="h-auto "
            style={{
              maxWidth: '100%',
            }}
            height={1000}
            width={1000}
            alt="purchase"
          />
        </div>
        <div className="py-4 px-5">
          <div className="date my-3">
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '14px',
                  lineHeight: '21px',
                },
                fontSize: '20px',
                color: theme.colors.golden,
                lineHeight: '30px',
              })}
              className="font-semibold"
            >
              {cardData.purchaseDate}
            </Text>
          </div>
          <div className="md:max-w-[396px] max-w-[205px] w-full">
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '16px',
                  lineHeight: '24px',
                },
                fontSize: '23px',
                color: theme.colors.darkBlue,
                lineHeight: '34.5px',
              })}
              className="font-semibold"
            >
              {cardData.purchaseTitle}
            </Text>
          </div>
          <div className="md:max-w-[363px] max-w-[205px] w-full my-[2rem]">
            <div className="flex flex-wrap justify-between">
              <div className="duration">
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
                  {cardData.hour}
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
                  {cardData.subHour}
                </Text>
              </div>
              <div className="duration">
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
              <div className="duration">
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
                  {cardData.webinar}
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
                  {cardData.event}
                </Text>
              </div>
              <div className="p-3 mr-3 sm:hidden">
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '21px',
                      lineHeight: '25.39px',
                    },
                    fontSize: '35px',
                    color: theme.colors.darkBlue,
                    lineHeight: '42.31px',
                  })}
                  className="font-bold"
                >
                  {cardData.value}
                </Text>
              </div>
            </div>
          </div>
          <div className="md:max-w-[406px] max-w-[205px] w-full my-[2rem]">
            <div className="flex flex-wrap justify-between">
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '21px',
                    lineHeight: '25.39px',
                  },
                  fontSize: '35px',
                  color: theme.colors.darkBlue,
                  lineHeight: '42.31px',
                })}
                className="font-bold hidden md:block"
              >
                {cardData.value}
              </Text>

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
                })}
                className=" md:max-w-[235px] max-w-[205px] w-full  "
              >
                {cardData.ctx}
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

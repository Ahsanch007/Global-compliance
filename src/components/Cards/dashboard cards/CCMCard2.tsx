import React from 'react';
import { cardData } from './cardData';
import Image from 'next/image';
import { useMediaQuery } from '@mantine/hooks';
import { Text } from '@mantine/core';

export const CCMCard = () => {
  return (
    <>
      <div
        className={`rounded-[20px] p-4 bg-white `}
        style={{
          boxShadow: '0px 25px 46px -17px #0000000D',
          border: '1px solid #EEEEEE',
        }}
      >
        <div
          className={`flex max-w-[213px] md:max-w-[301px]
           gap-4 items-center `}
        >
          <Image
            src={cardData.cardIcon}
            width={1000}
            height={1000}
            style={{
              // maxWidth: isSmallScreen ? '37px' : '63px',
              height: 'auto',
            }}
            className="max-w-[37px] md:max-w-[63px]"
            alt="fatca"
          />

          <div className={`max-w-[164px] md:max-w-[218px]  w-full`}>
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '13px',
                  lineHeight: '21px',
                },
                fontSize: '18px',
                lineHeight: '27px',
              })}
              className="font-semibold"
            >
              {cardData.title}
            </Text>
          </div>
        </div>
        <div className={`max-w-[205px]  md:max-w-[318px] mt-4`}>
          <Text
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '12px',
                lineHeight: '18px',
              },
              fontSize: '15px',
              lineHeight: '27.2px',
            })}
            className="font-normal"
          >
            {cardData.subText}
          </Text>
        </div>
        {/* <div className="mt-3">
          <Text
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '14px',
                lineHeight: '23.8px',
              },
              fontSize: '15px',
              lineHeight: '25.5px',
              textDecoration: 'underline',
              cursor: 'pointer',
            })}
            className="font-semibold"
          >
            {cardData.cart}
          </Text>
        </div> */}
      </div>
    </>
  );
};

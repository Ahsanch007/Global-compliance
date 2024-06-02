import React from 'react';
import { cardData } from './cardData';
import Image from 'next/image';
import { useMediaQuery } from '@mantine/hooks';
import { Text } from '@mantine/core';

interface CCMCardsProps {
  status?: 'complete' | 'already-purchased' | 'inprogress';
}

export const CCMCards: React.FC<CCMCardsProps> = ({ status }) => {
  const getBgColorForStatus = (status?: string) => {
    if (status === 'complete') {
      return 'rgba(157,239,130,0.2)';
    } else if (status === 'inprogress') {
      return 'rgba(248,205,98,0.2)';
    } else if (status === 'already-purchased') {
      return 'rgba(157,239,130,0.1)';
    }
    return '#fff';
  };

  const getBorder = (status?: string) => {
    if (status === 'complete') {
      return '1px solid #CD9646';
    } else if (status === 'inprogress') {
      return '1px solid #CD9646';
    } else if (status === 'already-purchased') {
      return '1px solid #CD9646';
    }

    return '1px solid #EEEEEE';
  };

  const getBadgeImage = (status?: string) => {
    if (status === 'complete') {
      return '/images/Group 1656.svg';
    } else if (status === 'inprogress') {
      return '/images/inprogress.svg';
    } else if (status == 'already-purchased') {
      return '/images/already-bought.svg';
    }
    return '';
  };

  console.log(getBadgeImage(status));

  return (
    <>
      <div
        className={`rounded-[20px] p-4  relative w-full sm:w-auto sm:min-w-[325px] flex-1`}
        style={{
          boxShadow: '0px 25px 46px -17px #0000000D',
          background: getBgColorForStatus(status),
          border: getBorder(status),
        }}
      >
        <div className={`flex  gap-4 items-center w-full`}>
          <Image
            src={cardData.cardIcon}
            width={1000}
            height={1000}
            style={{
              // maxWidth: isSmallScreen ? '37px' : '63px',
              height: 'auto',
            }}
            className="max-w-[37px] md:max-w-[63px}"
            alt="fatca"
          />

          {getBadgeImage(status) && (
            <Image
              src={getBadgeImage(status)}
              width={1000}
              height={1000}
              style={{
                // maxWidth: '90px',
                height: 'auto',
                position: 'absolute',
                top: '28px',
                right: 0,
              }}
              className="absolute top-[28px] right-[0] !w-full !h-auto max-w-[45px] sm:max-w-[70px]"
              alt="fatca"
            />
          )}

          <div className={`max-w-[164px]  md:max-w-[218px]  w-full`}>
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
        <div className="mt-3">
          <Text
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '14px',
                lineHeight: '23.8px',
              },
              fontSize: '15px',
              lineHeight: '25.5px',
              color:
                status === 'already-purchased' ? theme.colors.greyText : '',
              textDecoration: status === 'complete' ? 'underline' : '',
              cursor: 'pointer',
            })}
            className="font-semibold"
          >
            {status === 'complete' && cardData.comp}
            {status === 'inprogress' && cardData.inprogress}
            {status === 'already-purchased' && cardData.already}
            {status !== 'complete' &&
              status !== 'inprogress' &&
              status !== 'already-purchased' &&
              cardData.cart}
          </Text>
        </div>
      </div>
    </>
  );
};

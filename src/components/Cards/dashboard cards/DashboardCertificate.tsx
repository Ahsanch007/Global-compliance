import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { cardData } from './cardData';
import { Text } from '@mantine/core';
import Image from 'next/image';
import { SendModal } from '@/components/Modal/SendModal';
import { ShareSocailModal } from '@/components/Modal/ShareSocialModal';

export const DashboardCertificate = () => {
  const [
    scheduleExamOpened,
    { open: openScheduleExam, close: closeScheduleExam },
  ] = useDisclosure(false);
  const [shareSocialModal, { open: openShareSocail, close: closeShareSocail }] =
    useDisclosure(false);
  return (
    <>
      <SendModal opened={scheduleExamOpened} close={closeScheduleExam} />
      <ShareSocailModal opened={shareSocialModal} close={closeShareSocail} />
      <div
        className="rounded-[20px] p-4 bg-white"
        style={{
          boxShadow: '0px 25px 46px -17px #0000000D',
          border: '1px solid #EEEEEE',
        }}
      >
        <div className={`text-center relative`}>
          <div className="icon">
            <Image
              src={cardData.cardIcon}
              style={{
                // maxWidth: isSmallScreen ? '102px' : '148px',
                height: 'auto',
              }}
              className="max-w-[102px] md:max-w-[148px]"
              height={1000}
              width={1000}
              alt="fatca"
            />
          </div>
          <div className="title">
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '14px',
                  lineHeight: '21px',
                },
                fontSize: '23px',
                lineHeight: '34.5px',
              })}
              className="font-semibold"
            >
              {cardData.title}
            </Text>
          </div>
          <Image
            src={cardData.share}
            className="absolute top-[22px] md:hidden flex right-[0px]"
            height={19}
            width={19}
            alt="share"
          />
        </div>
        <div className="flex mt-6 justify-between">
          <div className="share flex items-center hidden md:block">
            <Image src={cardData.share} height={16} width={16} alt="share" />
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '14px',
                  lineHeight: '21px',
                },
                fontSize: '15px',
                lineHeight: '25.5px',
              })}
              onClick={() => {
                openShareSocail();
              }}
              className="font-medium mx-2 cursor-pointer"
            >
              {cardData.shareText}
            </Text>
          </div>

          <div className="share flex items-center">
            <Image src={cardData.download} height={16} width={16} alt="share" />
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '14px',
                  lineHeight: '21px',
                },
                fontSize: '15px',
                lineHeight: '25.5px',
              })}
              className="font-medium mx-2 cursor-pointer"
            >
              {cardData.downloadText}
            </Text>
          </div>
          <div className="share flex items-center">
            <Image src={cardData.forword} height={16} width={16} alt="share" />
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '14px',
                  lineHeight: '21px',
                },
                fontSize: '15px',
                lineHeight: '25.5px',
              })}
              onClick={openScheduleExam}
              className="font-medium mx-2 cursor-pointer"
            >
              {cardData.forwordText}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

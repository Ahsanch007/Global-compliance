import { theme } from '@/theme/theme';
import { Image, Text } from '@mantine/core';
import React from 'react';
import { cardData } from './cardData';
import { useDisclosure } from '@mantine/hooks';
import { EditContactModal } from '@/components/Modal/EditContactModal';

export const ContactCard = () => {
  const [moreModalOpened, { open: openMoreModal, close: closeMoreModal }] =
    useDisclosure(false);

  return (
    <>
      <EditContactModal opened={moreModalOpened} close={closeMoreModal} />
      <div
        className="rounded-[20px] bg-white p-4"
        style={{
          border: ' 1px solid #EEEEEE',
          boxShadow: '0px 25px 46px -17px #0000000D',
        }}
      >
        <div className="flex justify-between">
          <Text
            sx={{
              fontSize: '10px',
              lineHeight: '11.93px',
              color: theme.colors.grey,
            }}
            className="font-semibold"
          >
            {cardData.contact}
          </Text>

          <Image
            src={cardData.edit}
            height={19}
            width={19}
            onClick={openMoreModal}
            className="cursor-pointer"
            alt="edit"
          />
        </div>
        <div className="flex my-[1.7rem] justify-between flex-wrap">
          <div className="mb-2 md:mb-0">
            <div className="flex flex-wrap">
              <Image
                src={cardData.phoneIcon}
                height={16}
                width={16}
                alt="phone"
              />
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '16px',
                    lineHeight: '18.83px',
                  },
                  fontSize: '16px',
                  color: theme.colors.darkBlue,
                  lineHeight: '18.83px',
                })}
                className="font-medium mx-2"
              >
                {cardData.phone}
              </Text>
            </div>
            <div className="flex flex-wrap mt-5">
              <Image
                src={cardData.mailIcon}
                height={16}
                width={16}
                alt="phone"
              />
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '16px',
                    lineHeight: '18.83px',
                  },
                  fontSize: '16px',
                  color: theme.colors.darkBlue,
                  lineHeight: '18.83px',
                })}
                className="font-medium mx-2"
              >
                {cardData.email}
              </Text>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap">
              <Image
                src={cardData.locationIcon}
                height={16}
                width={16}
                alt="phone"
              />
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '16px',
                    lineHeight: '18.83px',
                  },
                  fontSize: '16px',
                  color: theme.colors.darkBlue,
                  lineHeight: '18.83px',
                })}
                className="font-medium mx-2"
              >
                {cardData.location}
              </Text>
            </div>
            <div className="flex flex-wrap mt-5">
              <Image
                src={cardData.timerIcon}
                height={16}
                width={16}
                alt="phone"
              />
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '16px',
                    lineHeight: '18.83px',
                  },
                  fontSize: '16px',
                  color: theme.colors.darkBlue,
                  lineHeight: '18.83px',
                })}
                className="font-medium mx-2"
              >
                {cardData.time}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

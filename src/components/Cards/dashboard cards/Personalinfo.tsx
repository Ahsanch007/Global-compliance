import { theme } from '@/theme/theme';
import { Text } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';
import React from 'react';
import { cardData } from './cardData';
import { EditInfoModal } from '@/components/Modal/EditInfoModal';

export const Personalinfo = () => {
  const [editInfoModal, { open: openEditInfo, close: closeEditInfo }] =
    useDisclosure(false);

  return (
    <>
      <EditInfoModal opened={editInfoModal} close={closeEditInfo} />

      <div
        className=" rounded-[20px]  bg-white p-4"
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
            {cardData.info}
          </Text>

          <Image
            onClick={openEditInfo}
            className="cursor-pointer"
            src={cardData.edit}
            height={19}
            width={19}
            alt="edit"
          />
        </div>
        <div className="flex  mt-3">
          <div>
            <Image
              src={cardData.profileImg}
              height={1000}
              width={1000}
              style={{
                // maxWidth: isLargeScreen ? '62px' : '101px',
                height: 'auto',
              }}
              className="max-w-[62px] md:max-w-[101px]"
              alt="profile"
            />
          </div>
          <div className="p-5">
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '16px',
                  lineHeight: '19.09px',
                },
                fontSize: '21px',
                color: theme.colors.darkBlue,
                lineHeight: '25.5px',
              })}
              className="font-semibold"
            >
              {cardData.name}
            </Text>
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '14px',
                  lineHeight: '16.14px',
                },
                fontSize: '18px',
                color: theme.colors.darkBlue,
                lineHeight: '20.75px',
              })}
              className="font-light mt-3  italic"
            >
              {cardData.company}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

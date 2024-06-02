import { Menu, Text } from '@mantine/core';
import React from 'react';
import { modalData } from './modalData';
import { theme } from '@/theme/theme';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import { useMediaQuery } from '@mantine/hooks';
import { programData } from '../Cards/programs/programData';

export const MoreModal = () => {
  return (
    <>
      <Menu
        shadow="lg"
        width={200}
        transitionProps={{ transition: 'rotate-right', duration: 150 }}
        withArrow
        arrowPosition="center"
        radius="20px"
        position="bottom-end"
      >
        <Menu.Target>
          <div
            className={`xl:max-w-[63px] md:w-full cursor-pointer max-w-full p-2 w-full h-[100] rounded-[20px] flex items-center justify-center`}
            style={{
              border: '1px solid #1D2B3933',
              boxShadow: '-17px 0px 46px -17px #0000001A',
              overflow: 'hidden',
            }}
            // onClick={openMoreModal}
          >
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '14px',
                  lineHeight: '24px',
                  transform: 'none',
                },
                fontSize: '18px',
                lineHeight: '30.5px',
                color: theme.colors.darkBlue,
                whiteSpace: 'nowrap',
                transform: 'rotate(-90deg)', // Rotate on small screens
              })}
              className="font-semibold"
            >
              {programData.view}
            </Text>
          </div>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item>
            <ButtonPrimary
              sx={{
                borderRadius: '40px',
                backgroundColor: theme.colors.darkBlue,
                fontSize: '15px',
                lineHeight: '25.5px',
                width: '100%',
              }}
              className=" font-medium "
            >
              {modalData.syllabus}
            </ButtonPrimary>
          </Menu.Item>
          <Menu.Item>
            <ButtonPrimary
              sx={{
                borderRadius: '40px',
                backgroundColor: theme.colors.golden,
                fontSize: '15px',
                lineHeight: '25.5px',
                width: '100%',
              }}
              className=" font-medium w-[195px]"
            >
              {modalData.slides}
            </ButtonPrimary>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};

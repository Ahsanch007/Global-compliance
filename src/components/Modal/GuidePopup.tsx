import { Button, Text } from '@mantine/core';
import React from 'react';
import { modalData } from './modalData';
import { theme } from '@/theme/theme';
import { Menu } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';
import { programData } from '../Cards/programs/programData';

export const GuidePopup = () => {
  // const isSmallScreen = useMediaQuery('(max-width: 500px)');
  const isMediumScreen = useMediaQuery('(max-width: 1366px)');
  return (
    <>
      <Menu
        shadow="lg"
        width={200}
        transitionProps={{ transition: 'rotate-right', duration: 150 }}
        withArrow
        arrowPosition="center"
        radius="20px"
      >
        <Menu.Target>
          <Button
            sx={(theme) => ({
              [theme.fn.smallerThan('lg')]: {
                fontSize: '14px',
                lineHeight: '23.8px',
                width: '100%',
              },
              borderRadius: '40px',
              backgroundColor: 'white',
              fontSize: '15px',
              lineHeight: '25.5px',
              border: '1px solid #1D2B39',
              color: theme.colors.darkBlue,
            })}
            // onClick={opeGuideModal}
            className={`  button-primary`}
          >
            <Image
              src={programData.icon}
              height={18}
              width={18}
              alt="download"
              className="mx-1"
            />
            {programData.btn3}
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item>
            <Text
              sx={{
                fontSize: '10px',
                lineHeight: '11.93px',
                color: theme.colors.grey,
                letterSpacing: '10%',
              }}
              className="font-semibold"
            >
              {modalData.text2}
            </Text>
            <div className="my-3 ">
              {modalData.languages.map((link) => (
                <Text
                  key={link.id}
                  sx={{
                    fontSize: '16px',
                    lineHeight: '11.93px',
                    color: theme.colors.darkBlue,
                    letterSpacing: '10%',
                    '&:hover': {
                      background: theme.colors.lightGolder,
                    },
                  }}
                  className="font-medium py-4 cursor-pointer"
                >
                  {link.name}
                </Text>
              ))}
            </div>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};

import { theme } from '@/theme/theme';
import { Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';
import React from 'react';
import { dashboardData } from './dashboardData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const SideBar = () => {
  const isLargeScreen = useMediaQuery('(max-width: 1024px)');

  const pathname = usePathname();

  return (
    <>
      <div
        // className={`bg-white  ${
        //   isLargeScreen ? 'max-w-[90px] w-full' : 'max-w-[285px] w-full'
        // } md:w-full h-full py-2 flex`}
        className="max-w-[90px] lg:max-w-[285px] h-full  flex w-full py-2 bg-white "
        style={{
          border: '1px solid #E8E9EC',
          borderRadius: isLargeScreen ? '' : '20px 0px 0px 20px',
        }}
      >
        <div
          // className={`max-w-[90px] ${
          //   isLargeScreen ? 'max-w-[90px] w-100 px-2' : 'max-w-[90px] w-100'
          // } w-full  flex flex-col justify-between`}
          className="flex flex-col justify-between max-w-[90px] px-2 "
          style={{ borderRight: '1px solid #E8E9EC' }}
        >
          <div className="list">
            <ul className="list-none p-0">
              {dashboardData.sidebarLinks.map((link, index) => (
                <Link
                  key={link.id}
                  href={link.path}
                  style={{ textDecoration: 'none' }}
                >
                  <li key={link.id} className="py-4">
                    <div
                      style={{
                        backgroundColor:
                          pathname === link.path
                            ? theme.colors.golden[0]
                            : 'white',
                      }}
                      className="w-[50px] h-[50px] flex justify-center items-center mx-auto  rounded-[10px]"
                    >
                      <Image
                        src={pathname === link.path ? link.active : link.img}
                        height={24}
                        width={24}
                        alt="dashboard"
                      />
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div className="setting">
            <div className="py-4">
              <div className="w-[50px] h-[50px] flex cursor-pointer justify-center items-center mx-auto">
                <Image
                  src={dashboardData.settingIcon}
                  height={24}
                  width={24}
                  alt="settings"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[195px]  flex flex-col justify-between">
          <div className="list hidden lg:block">
            <ul className="list-none p-0">
              {dashboardData.sidebarLinks.map((link, index) => (
                <Link
                  key={link.id}
                  href={link.path}
                  style={{ textDecoration: 'none' }}
                >
                  <li key={link.id} className="py-[30px] px-2">
                    <Text
                      sx={{
                        fontSize: '18px',
                        color:
                          pathname === link.path
                            ? theme.colors.golden
                            : theme.colors.darkBlue,
                        lineHeight: '21.19px',
                        cursor: 'pointer',
                        '&:hover': {
                          color: theme.colors.golden,
                          transition: '0.3s',
                        },
                      }}
                      className="font-medium"
                    >
                      {link.text}
                    </Text>
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div className="setting hidden lg:block">
            <div className="p-[30px] px-2">
              <Text
                sx={{
                  fontSize: '18px',
                  color: theme.colors.placeHolder,
                  lineHeight: '21.19px',
                }}
                className="font-medium cursor-pointer"
              >
                {dashboardData.setting}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

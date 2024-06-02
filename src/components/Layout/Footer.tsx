import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import { useMediaQuery } from '@mantine/hooks';
import { Container, Text } from '@mantine/core';
import { containerMaxWidth } from '@/theme/theme';
import { footerData } from './footerData';
import { getMenuItem } from '@/lib/actions/menuItem';
interface Props {
  homePageData: any;
}
interface MenuItem {
  desc: string;
  listOfItem?: Array<{ desc: string }>;
}
export const Footer: React.FC<Props> = ({ homePageData }) => {
  const isLargeScreen = useMediaQuery('(max-width: 1366px)');
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  console.log(menuItems, 'menuItemsmenuItems');

  useEffect(() => {
    getMenuItem()
      .then((menuItemData) => {
        console.log(menuItemData, 'menuItemData');
        setMenuItems(menuItemData);
      })
      .catch((error) => {
        console.error('Error fetching menu item:', error);
      });
  }, []);
  return (
    <>
      <div
        className="bg-darkBlue py-5   text-white"
        style={{
          borderRadius: '40px 40px 0px 0px',
        }}
      >
        <Container size={containerMaxWidth} px="lg" className="navbar">
          <div className="bg-white p-[25px]" style={{ borderRadius: '40px 0px 40px 0px' }}>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 p-4 text-black">
                <div className="grid md:gap-[1rem] gap-[1rem]  ">
                  <div>
                    <Image
                      src={footerData.conversationImg}
                      style={{
                        // maxWidth: isMediumScreen ? '72px' : '100px',
                        height: 'auto',
                      }}
                      className="max-w-[72px] md:max-w-[100px]"
                      width={1000}
                      height={1000}
                      alt="conversation"
                    />
                  </div>
                  <div className="md:max-w-[506px] md:w-100 max-w-[281px] w-100">
                    <Text
                      sx={(theme) => ({
                        [theme.fn.smallerThan('md')]: {
                          fontSize: '25px',
                          lineHeight: '29px',
                        },
                        fontSize: '45px',
                        color: theme.colors.darkBlue,
                        lineHeight: '53.68px',
                      })}
                      className="font-semibold"
                    >
                      {footerData.discussion}
                    </Text>
                  </div>
                  <div className="md:max-w-[465px] md:w-100 max-w-[281px] w-100">
                    <Text
                      sx={(theme) => ({
                        [theme.fn.smallerThan('md')]: {
                          fontSize: '14px',
                          lineHeight: '29px',
                        },
                        fontSize: '21px',
                        color: theme.colors.darkBlue,
                        lineHeight: '35.7px',
                      })}
                      className=" font-medium"
                    >
                      {footerData.subDiscussion}
                    </Text>
                  </div>
                </div>
              </div>
              <div className={`w-full max-w-[285px]  md:max-w-[684px] md:w-100  md:p-4 text-black`}>
                <div className={` flex flex-wrap`}>
                  <div className={`w-full ${isLargeScreen ? 'w-100' : ' md:w-1/2'} p-2`}>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-lightGrey text-brand-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 border border-solid border-borderColor block w-full p-2.5  dark:placeholder-placeHolder "
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className={`w-full ${isLargeScreen ? 'w-100' : ' md:w-1/2'} p-2`}>
                    {' '}
                    <input
                      type="text"
                      id="first_name"
                      className="bg-lightGrey text-brand-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 border border-solid border-borderColor block w-full p-2.5  dark:placeholder-placeHolder "
                      placeholder="Enter Email"
                      required
                    />
                  </div>
                  <div className={`w-full ${isLargeScreen ? 'w-100' : ' md:w-1/2'} p-2`}>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-lightGrey text-brand-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 border border-solid border-borderColor block w-full p-2.5  dark:placeholder-placeHolder "
                      placeholder="Enter Subject"
                      required
                    />
                  </div>
                  <div className={`w-full ${isLargeScreen ? 'w-100' : ' md:w-1/2'} p-2`}>
                    {' '}
                    <input
                      type="text"
                      id="first_name"
                      className="bg-lightGrey text-brand-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 border border-solid border-borderColor block w-full p-2.5  dark:placeholder-placeHolder "
                      placeholder="Enter Phone"
                      required
                    />
                  </div>
                  <div className="w-full  p-2">
                    {' '}
                    <textarea
                      //   type="text"
                      id="first_name"
                      className="bg-lightGrey h-[132px] text-brand-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 border border-solid border-borderColor block w-full p-2.5 text-left align-text-top dark:placeholder-placeHolder"
                      placeholder="Enter Message"
                      required
                    />
                  </div>
                </div>
                <div className="p-[10px] flex justify-end items-center ">
                  <Text
                    sx={(theme) => ({
                      [theme.fn.smallerThan('md')]: {
                        fontSize: '14px',
                        lineHeight: '20px',
                      },
                      fontSize: '18px',
                      color: theme.colors.darkBlue,
                      lineHeight: '30.6px',
                    })}
                    className="  font-semibold mx-4"
                  >
                    {footerData.reset}
                  </Text>
                  <ButtonPrimary
                    sx={(theme) => ({
                      [theme.fn.smallerThan('md')]: {
                        fontSize: '14px',
                        height: '45px',
                      },
                      fontSize: '18px',
                      height: '60px',
                      backgroundColor: theme.colors.golden,
                      borderRadius: '70px',
                    })}
                    className=" md:max-w-[255px] md:w-100 max-w-[205px] w-100 "
                  >
                    {footerData.ctxText}
                  </ButtonPrimary>
                </div>
              </div>
            </div>
          </div>
          <div className="my-[4rem] flex justify-between flex-wrap">
            <div className="my-[4rem] md:hidden flex justify-start gap-5 flex-wrap">
              <div className=" mt-[3rem]">
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '21px',
                      lineHeight: '29px',
                    },
                    fontSize: '21px',
                    lineHeight: '31.5px',
                  })}
                  className="font-semibold mb-[4rem]"
                >
                  {footerData.title}
                </Text>
                <div className="grid gap-[2rem]">
                  <Text
                    sx={(theme) => ({
                      [theme.fn.smallerThan('md')]: {
                        fontSize: '16px',
                        lineHeight: '29px',
                      },
                      fontSize: '16px',
                      lineHeight: '28.8px',
                    })}
                    className="max-w-[220px] w-100  font-light "
                  >
                    {homePageData.FOOTER_CONCATS}
                  </Text>
                  {/* <Text
                    sx={(theme) => ({
                      [theme.fn.smallerThan('md')]: {
                        fontSize: '16px',
                        lineHeight: '29px',
                      },
                      fontSize: '16px',
                      lineHeight: '28.8px',
                    })}
                    className=" max-w-[220px] w-100  font-light"
                  >
                    {footerData.number}
                  </Text> */}
                </div>
              </div>
              <div>
                <div className="grid ">
                  <div className="icon my-[3rem]">
                    <Text
                      sx={(theme) => ({
                        [theme.fn.smallerThan('md')]: {
                          fontSize: '21px',
                          lineHeight: '29px',
                        },
                        fontSize: '21px',
                        lineHeight: '31.5px',
                      })}
                      className=" font-semibold"
                    >
                      {footerData.links}
                    </Text>
                  </div>
                  <div className="flex justify-start flex-wrap gap-[75px] ">
                    <div className="list max-w-[162px]">
                      {menuItems.map((link, index) => (
                        <ul key={index} className="p-0">
                          <li className="list-none cursor-pointer">{link.desc} </li>
                        </ul>
                      ))}
                    </div>
                    <div className="list">
                      {footerData.subLinks.map((link, index) => (
                        <ul key={index} className="p-0">
                          <li className="list-none cursor-pointer ">{link.text} </li>
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-[335px] items-center  mt-[3rem]">
                <div className="icon">
                  <Image src={footerData.logoMob} width={91} height={90} alt="icon" />
                </div>
                <div className="social-icon grid gap-[2rem] ">
                  <div className="flex max-w-[145px] w-100 justify-between">
                    <Image src={footerData.linkedin} width={35} height={35} alt="linkedin" />
                    <Image src={footerData.facebook} width={35} height={35} alt="facebook" />
                    <Image src={footerData.youtube} width={35} height={35} alt="youtube" />
                  </div>
                  <Text
                    sx={(theme) => ({
                      [theme.fn.smallerThan('md')]: {
                        fontSize: '14px',
                      },
                      fontSize: '12px',
                      lineHeight: '18px',
                    })}
                    className="font-light "
                  >
                    {footerData.rights}
                  </Text>
                </div>
              </div>
            </div>

            <div className="hidden md:block ">
              <div className="icon mb-[3rem]">
                <Image
                  src={footerData.logoImg}
                  width={1000}
                  height={1000}
                  style={{ maxWidth: '248px', height: 'auto' }}
                  alt="icon"
                />
              </div>
              <div className="social-icon  ">
                <div className="flex max-w-[105px] justify-between mb-[2rem]">
                  <Image className="cursor-pointer" src={footerData.linkedin} width={25} height={25} alt="linkedin" />
                  <Image className="cursor-pointer" src={footerData.facebook} width={25} height={25} alt="facebook" />

                  <Image className="cursor-pointer" src={footerData.youtube} width={25} height={25} alt="youtube" />
                </div>
                <Text className="md:text-[12px] font-light">{footerData.rights}</Text>
              </div>
            </div>
            <div className="hidden md:block  ">
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '21px',
                    lineHeight: '29px',
                  },
                  fontSize: '21px',
                  lineHeight: '31.5px',
                })}
                className=" font-semibold mb-[2rem]"
              >
                {footerData.title}
              </Text>
              <div className="grid gap-[1rem]">
                <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '16px',
                      lineHeight: '29px',
                    },
                    fontSize: '16px',
                    lineHeight: '28.8px',
                  })}
                  className=" max-w-[220px] w-100  font-light "
                >
                  {homePageData.FOOTER_CONCATS}
                </Text>
                {/* <Text
                  sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: {
                      fontSize: '16px',
                      lineHeight: '29px',
                    },
                    fontSize: '16px',
                    lineHeight: '28.8px',
                  })}
                  className="max-w-[220px] w-100 font-light"
                >
                  {footerData.number}
                </Text> */}
              </div>
            </div>
            <div>
              <div className="hidden md:block  ">
                <div className="icon">
                  <Text
                    sx={(theme) => ({
                      [theme.fn.smallerThan('md')]: {
                        fontSize: '21px',
                        lineHeight: '29px',
                      },
                      fontSize: '21px',
                      lineHeight: '31.5px',
                    })}
                    className="font-semibold"
                  >
                    {footerData.links}
                  </Text>
                </div>
                <div className="flex justify-between flex-wrap gap-[75px] ">
                  <div className="list">
                    {menuItems.map((link, index) => (
                      <ul key={index} className="p-0">
                        <li className="list-none cursor-pointer text-[16px] max-w-[220px] w-100 leading-[28.8px] font-light">
                          {link.desc}{' '}
                        </li>
                      </ul>
                    ))}
                  </div>
                  <div className="list">
                    {menuItems.map((link, index) => (
                      <div>
                        {link.listOfItem?.map((subLinks) => (
                          <ul key={index} className="p-0">
                            <li className="list-none text-[16px] cursor-pointer max-w-[220px] w-100 leading-[28.8px] font-light">
                              {subLinks.desc}{' '}
                            </li>
                          </ul>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

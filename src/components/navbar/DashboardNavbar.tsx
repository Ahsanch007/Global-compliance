import Image from 'next/image';
import React from 'react';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import DropdownMenu from './NavbarList';
import { Container } from '@mantine/core';
import { containerMaxWidth } from '@/theme/theme';
import { headerData } from '../Layout/headerConfig';

export const DashboardNavbar = () => {
  const isLargeScreen = useMediaQuery('(max-width: 800px)');
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div
        className="bg-darkBlue  text-white "
        style={{
          borderRadius: '0px, 0px, 40px, 40px',
        }}
      >
        <Container size={containerMaxWidth} px="lg" className="navbar">
          {isLargeScreen ? (
            ''
          ) : (
            <div className="flex justify-end">
              <div className="flex items-center">
                <p className="text-base font-semibold text-white mx-[25px]">
                  Log In / Register
                </p>
                <Image
                  src="/icons/Group 63.svg"
                  width={30}
                  height={30}
                  alt="bag"
                />
              </div>
            </div>
          )}
          <div className="flex justify-between items-center ">
            {isLargeScreen ? (
              <Image
                src="/icons/mobile.svg"
                width={50}
                height={50}
                alt="icon"
              />
            ) : (
              <div className="icon">
                <Image
                  src="/images/image 1.svg"
                  width={195.56}
                  height={80}
                  alt="icon"
                />
              </div>
            )}
            <div className="flex items-center">
              <div className="hidden w-full md:block md:w-auto">
                <ul className="font-medium flex flex-col   md:p-0 md:flex-row">
                  <li className="list-none p-3 flex items-center">
                    Certifications
                    <Image
                      src="/icons/Vector 1.svg"
                      className="mx-2"
                      width={10}
                      height={10}
                      alt="bag"
                    />
                  </li>
                  <li className="list-none p-3 flex items-center">
                    Membership
                    <Image
                      src="/icons/Vector 1.svg"
                      className="mx-2"
                      width={10}
                      height={10}
                      alt="bag"
                    />
                  </li>
                  <li className="list-none p-3 flex items-center">
                    Examination Process
                  </li>
                  <li className="list-none p-3 flex items-center">
                    Corporate
                    <Image
                      src="/icons/Vector 1.svg"
                      className="mx-2"
                      width={10}
                      height={10}
                      alt="bag"
                    />
                  </li>
                </ul>
              </div>
              {isLargeScreen ? (
                <>
                  <ButtonPrimary>
                    <Image
                      onClick={open}
                      src={headerData.hamBurger}
                      width={30}
                      height={30}
                      alt="burger"
                    />
                  </ButtonPrimary>

                  <Image
                    src="/icons/Group 63.svg"
                    width={30}
                    height={30}
                    alt="bag"
                  />
                </>
              ) : (
                <ButtonPrimary className="bg-golden rounded-[60px]">
                  Candidate Portal
                </ButtonPrimary>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/*  Navbar Drawer  */}
      <DropdownMenu opened={opened} onClose={close} />
    </>
  );
};

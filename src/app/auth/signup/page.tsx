'use client';

import { Box, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';
import React from 'react';
import { headerData } from '@/components/Layout/headerConfig';
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary';
import { Signup } from '@/components/auth/Signup';
import { Header } from '@/components/Layout/HeaderNav';
import { Footer } from '@/components/Layout/Footer';
import { theme } from '@/theme/theme';
import Link from 'next/link';

const SignupContainer = () => {
  // const isLargeScreen = useMediaQuery('(max-width: 1024px)');

  return (
    <>
      <div className="md:hidden">
        <div
          className="bg-darkBlue  text-white"
          style={{ borderRadius: '0px 0px 20px 20px' }}
        >
          <Header />
        </div>
        <div className="bg-brand-200 my-[4rem]">
          <div className="signup-content flex justify-center items-center">
            <Signup />
          </div>
        </div>
        <Box>
          <Footer />
        </Box>
      </div>

      <div className="hidden md:grid  grid-cols-2">
        <div className="bg-brand-200 ">
          <div className="icon py-[2rem] px-[4rem] ">
            <Image
              src={headerData.logoImg}
              width={195.56}
              height={80}
              alt="icon"
            />
          </div>
          <div className="signup-content flex justify-center items-center">
            <Signup />
          </div>
        </div>
        <div
          className="bg-brand-300 "
          style={{
            backgroundImage: 'url("/images/image 2.webp")', // Replace with the actual image path
            backgroundSize: 'cover', // You can adjust this according to your preference
            minHeight: '100vh',
            borderRadius: '20px 0px 0px 20px',
          }}
        >
          <div className="py-[2rem] px-[4rem] flex justify-end">
            <div className="max-w-198px w-100 grid gap-3">
              <div className="flex items-center">
                <Text
                  sx={{ color: 'white' }}
                  className=" font-semibold  cursor-pointer"
                >
                  {headerData.login}{' '}
                </Text>
                <Text
                  sx={{ color: 'white' }}
                  className=" font-semibold mr-[25px] cursor-pointer"
                >
                  {headerData.register}
                </Text>
                <Image
                  src={headerData.cartIcon}
                  width={30}
                  height={30}
                  alt="bag"
                  className="cursor-pointer"
                />
              </div>
              <Link href="/dashboard" style={{ textDecoration: 'none' }}>
                <ButtonPrimary
                  sx={{
                    backgroundColor: theme.colors.golden,
                    borderRadius: '60px',
                    height: '45px',
                  }}
                  className=" md:max-w-[198px] md:w-100 "
                >
                  {headerData.portal}
                </ButtonPrimary>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupContainer;

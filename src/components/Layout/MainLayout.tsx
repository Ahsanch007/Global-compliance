'use client';
import { Box } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { Footer } from './Footer';
import { Header } from './HeaderNav';
import { HeroSection } from './HeroSection';
import { useMediaQuery } from '@mantine/hooks';
import { usePathname } from 'next/navigation';
import { HeroPortal } from '../candidate portal/HeroPortal';
import { getFirstPageData } from '@/lib/actions/firstPageData';

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  // const isLargeScreen = useMediaQuery('(max-width: 1024px)');
  const [homePageData, setHomePageData] = useState('');
  const pathname = usePathname();
  useEffect(() => {
    getFirstPageData()
      .then((menuItemData) => {
        setHomePageData(menuItemData);
      })
      .catch((error) => {
        console.error('Error fetching menu item:', error);
      });
  }, []);
  return (
    <Box>
      {pathname?.includes('auth') ? (
        children
      ) : (
        <>
          {pathname?.includes('dashboard') ||
          pathname?.includes('events') ||
          pathname?.includes('certificate') ||
          pathname?.includes('cart') ? (
            <div
              className="bg-darkBlue pb-3 text-white"
              style={{ borderRadius: '0px 0px 20px 20px' }}
            >
              <Header />
            </div>
          ) : (
            <Box
              className="py-5 h-[600px]"
              sx={{
                backgroundImage: 'url("/images/bgImg.webp")', // Default image for desktop
                backgroundSize: 'cover',
                '@media (max-width: 767px)': {
                  backgroundImage: 'url("/images/bgMobile.webp")', // Mobile image
                },
              }}
            >
              <Header />
              {pathname?.includes('portal') ? (
                <HeroPortal />
              ) : (
                <HeroSection homePageData={homePageData} />
              )}
            </Box>
          )}
          {children}
          <Box>
            <Footer homePageData={homePageData} />
          </Box>
        </>
      )}
    </Box>
  );
};

'use client';
import { containerMaxWidth } from '@/theme/theme';
import { Box, Container, Text } from '@mantine/core';
import React, { useState } from 'react';
import { CertificateCard } from '../Cards/CertificateCard';
import { useMediaQuery } from '@mantine/hooks';
import { certificateData } from './certificateData';
import Link from 'next/link';

export const EventListing = () => {
  const isMediumScreen = useMediaQuery('(max-width: 1366px)');
  const [selectedTabIndex, setSelectedTabIndex] = useState(0); // State to track selected tab index

  const handleTabClick = (index: number) => {
    setSelectedTabIndex(index); // Update the selectedTabIndex when a tab is clicked
  };

  return (
    <>
      <Container size={containerMaxWidth} px="lg" className="navbar my-[3rem]">
        <Box className="my-[2rem]">
          <Text
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '25px',
                lineHeight: '30px',
              },
              fontSize: '45px',
              color: theme.colors.darkBlue,
              lineHeight: '53.68px',
            })}
            className="    font-semibold"
          >
            {certificateData.lisitng}
          </Text>
        </Box>

        <div className="my-4 flex gap-6">
          {certificateData.tabs.map((links, index) => (
            <Text
              key={links.id}
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '18px',
                  // lineHeight: '29.82px',
                },
                fontSize: '25px',
                color:
                  index === selectedTabIndex
                    ? theme.colors.golden
                    : theme.colors.darkGray,
                lineHeight: '37.5px',
                transition: 'color 0.3s ease', // Add a transition for a smooth color change
                '&:hover': {
                  color: theme.colors.golden, // Change the color on hover
                },
                '&:focus, &:active': {
                  color: theme.colors.golden, // Change the color on focus and active
                },
              })}
              onClick={() => handleTabClick(index)}
              className={`font-medium py-5 cursor-pointer `}
            >
              {links.title}
            </Text>
          ))}
        </div>

        {selectedTabIndex === 0 && (
          <div
            className="flex flex-wrap"
            style={{
              justifyContent: isMediumScreen ? 'center' : 'start',
            }}
          >
            <div className="w-full sm:w-1/2 md:max-w-[486px] bg-brand-200 p-3 md:p-4">
              <div className="h-full">
                <Link style={{ textDecoration: 'none' }} href="/certificate">
                  <CertificateCard />
                </Link>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:max-w-[486px] bg-brand-200 p-3 md:p-4">
              <Link style={{ textDecoration: 'none' }} href="/certificate">
                <CertificateCard />
              </Link>
            </div>
            <div className="w-full sm:w-1/2 md:max-w-[486px] bg-brand-200 p-3 md:p-4">
              <Link style={{ textDecoration: 'none' }} href="/certificate">
                <CertificateCard />
              </Link>
            </div>
          </div>
        )}

        {selectedTabIndex === 1 && (
          <div
            className="flex flex-wrap"
            style={{
              justifyContent: isMediumScreen ? 'center' : 'start',
            }}
          >
            <div className="w-full sm:w-1/2 md:max-w-[486px] bg-brand-200 p-3 md:p-4">
              <div className="h-full">
                <Link style={{ textDecoration: 'none' }} href="/certificate">
                  <CertificateCard />
                </Link>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:max-w-[486px] bg-brand-200 p-3 md:p-4">
              <Link style={{ textDecoration: 'none' }} href="/certificate">
                <CertificateCard />
              </Link>
            </div>
            <div className="w-full sm:w-1/2 md:max-w-[486px] bg-brand-200 p-3 md:p-4">
              <Link style={{ textDecoration: 'none' }} href="/certificate">
                <CertificateCard />
              </Link>
            </div>
            <div className="w-full sm:w-1/2 md:max-w-[486px] bg-brand-200 p-3 md:p-4">
              <Link style={{ textDecoration: 'none' }} href="/certificate">
                <CertificateCard />
              </Link>
            </div>
            <div className="w-full sm:w-1/2 md:max-w-[486px] bg-brand-200 p-3 md:p-4">
              <Link style={{ textDecoration: 'none' }} href="/certificate">
                <CertificateCard />
              </Link>
            </div>
            <div className="w-full sm:w-1/2 md:max-w-[486px] bg-brand-200 p-3 md:p-4">
              <Link style={{ textDecoration: 'none' }} href="/certificate">
                <CertificateCard />
              </Link>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

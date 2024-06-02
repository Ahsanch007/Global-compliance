'use client';
import { Text } from '@mantine/core';
import React, { useState } from 'react';
import { dashboardData } from './dashboardData';
import { PurchaseCard } from '../Cards/dashboard cards/PurchaseCard';
import { PurchaseCarousel } from '../Carousel/PurchaseCarousel';

export const Purchase = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0); // State to track selected tab index

  const handleTabClick = (index: number) => {
    setSelectedTabIndex(index); // Update the selectedTabIndex when a tab is clicked
  };

  return (
    <>
      <div className="p-4">
        <div className="py-5">
          <Text
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '18px',
                lineHeight: '21.47px',
              },
              fontSize: '25px',
              color: theme.colors.darkBlue,
              lineHeight: '29.82px',
            })}
            className="font-semibold"
          >
            {dashboardData.purchase}
          </Text>
        </div>
        <div className="py-4 flex gap-6">
          {dashboardData.tabs.map((links, index) => (
            <Text
              key={links.id}
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '18px',
                  lineHeight: '21.47px',
                },
                color:
                  index === selectedTabIndex
                    ? theme.colors.golden
                    : theme.colors.darkGray,
                lineHeight: '37.5px',
                fontSize: '25px',
                transition: 'color 0.3s ease', // Add a transition for a smooth color change
                '&:hover': {
                  color: theme.colors.golden, // Change the color on hover
                },
                '&:focus, &:active': {
                  color: theme.colors.golden, // Change the color on focus and active
                },
              })}
              onClick={() => handleTabClick(index)}
              className={`font-medium py-5 cursor-pointer  `}
            >
              {links.title}
            </Text>
          ))}
        </div>
        {selectedTabIndex === 0 && (
          <div className=" py-4">
            <div className={`flex gap-4 flex-wrap  md:hidden justify-center`}>
              <PurchaseCard />

              <PurchaseCard />
            </div>
            <div className="hidden md:block">
              <PurchaseCarousel />
            </div>
          </div>
        )}
        {selectedTabIndex === 1 && (
          <div className=" py-4">
            <div className={`flex gap-4 flex-wrap  md:hidden justify-center`}>
              <PurchaseCard />

              <PurchaseCard />
            </div>
            <div className="hidden md:block">
              <PurchaseCarousel />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

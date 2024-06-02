'use client';
import { containerMaxWidth } from '@/theme/theme';
import { Container, Text } from '@mantine/core';
import React from 'react';
import { EventCarousel } from '../Carousel/Carousel';
import { eventsData } from './eventsData';

export const UpcomingEvents = () => {
  return (
    <>
      <Container size={containerMaxWidth} px="lg" className="navbar my-[3rem]">
        <Text
          sx={(theme) => ({
            [theme.fn.smallerThan('md')]: {
              fontSize: '25px',
              lineHeight: '29.82px',
            },
            fontSize: '45px',
            color: theme.colors.darkBlue,
            lineHeight: '53.68px',
          })}
          className=" font-semibold "
        >
          {eventsData.heading}
        </Text>
      </Container>
      <div className="my-[3rem]">
        <EventCarousel />
      </div>
    </>
  );
};

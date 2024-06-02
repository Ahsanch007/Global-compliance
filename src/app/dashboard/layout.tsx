'use client';

import { SideBar } from '@/components/dashboard/SideBar';
import { containerMaxWidth } from '@/theme/theme';
import { Container } from '@mantine/core';
import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Container
        size={containerMaxWidth}
        sx={{
          '@media (max-width: 767px)': {
            padding: 0,
          },
        }}
        className="navbar my-[3rem] pl-0  sm:px-4"
      >
        <div
          className="rounded-[20px] bg-grayBorder"
          style={{
            boxShadow: '0px 17px 46px -17px #0000001A',
          }}
        >
          <div className="flex  md:flex-row">
            <div className="leftbar">
              <SideBar />
            </div>
            <div
              className="md:flex-1 md:max-w-[1235px] w-full"
              style={{ overflow: 'hidden' }}
            >
              {children}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Layout;

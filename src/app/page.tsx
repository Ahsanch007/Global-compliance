import React from 'react';
import { Certificate } from '@/components/mainPage/Certificate';
import { CertificateBundles } from '@/components/mainPage/CertificateBundles';
import { UpcomingEvents } from '@/components/mainPage/UpcomingEvents';

const HomePage = () => {
  return (
    <div className={'text-brand'}>
      <Certificate />
      <CertificateBundles />
      <UpcomingEvents />
    </div>
  );
};

export default HomePage;

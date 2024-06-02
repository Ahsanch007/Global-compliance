import React, { useState } from 'react';
import { modalData } from './modalData';
import { Modal, Text } from '@mantine/core';
import { theme } from '@/theme/theme';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import Image from 'next/image';
import { cardData } from '../Cards/dashboard cards/cardData';
import { Select } from '@mantine/core';

interface EditCOntactModal {
  close: () => void;
  opened: boolean;
}

export const EditContactModal: React.FC<EditCOntactModal> = ({
  close,
  opened,
}) => {
  const [currentLocation, setCurrentLocation] = useState('');

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
          console.error('Error getting location:', error);
          setCurrentLocation('Unable to retrieve location.');
        },
      );
    } else {
      setCurrentLocation('Geolocation is not supported by your browser.');
    }
  };
  return (
    <>
      <Modal
        overlayProps={{
          blur: 3,
        }}
        centered
        opened={opened}
        onClose={close}
        radius="20px"
        title={
          <>
            <Text
              sx={{
                fontSize: '18px',
                lineHeight: '21.47px',
                color: theme.colors.darkBlue,
              }}
              className="font-semibold"
            >
              {modalData.contactEdit}
            </Text>
          </>
        }
      >
        <>
          <div className="my-3 grid gap-3">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-darkBlue font-semibold"
              >
                {modalData.phone}
              </label>
              <div
                className="w-full p-2 rounded-[20px] flex items-center gap-2"
                style={{ border: '1px solid #E8E9EC' }}
              >
                <Image
                  src={cardData.phoneIcon}
                  height={16}
                  width={16}
                  alt="phone"
                />

                <input
                  type="text"
                  id="first_name"
                  className="w-100 outline-none border-none"
                  placeholder="Number"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-darkBlue font-semibold"
              >
                {modalData.location}
              </label>
              <div
                className="w-full p-2 rounded-[20px] flex items-center gap-2"
                style={{ border: '1px solid #E8E9EC' }}
              >
                <Image
                  onClick={handleGetCurrentLocation}
                  src={cardData.locationIcon}
                  height={16}
                  width={16}
                  alt="location"
                />
                {/* <input
                  type="text"
                  id="first_name"
                  className="w-100 outline-none border-none"
                  placeholder="Location"
                  value={currentLocation}
                  readOnly
                /> */}
                <Select
                  placeholder="Location"
                  className="w-full"
                  data={['React', 'Angular', 'Vue', 'Svelte']}
                  variant="unstyled"
                />
              </div>
            </div>
          </div>
          <div className="my-3 grid gap-3">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-darkBlue font-semibold"
              >
                {modalData.email}
              </label>
              <div
                className="w-full p-2 rounded-[20px] flex items-center gap-2"
                style={{ border: '1px solid #E8E9EC' }}
              >
                <Image
                  src={cardData.mailIcon}
                  height={16}
                  width={16}
                  alt="phone"
                />

                <input
                  type="text"
                  id="first_name"
                  className="w-100 outline-none border-none"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-darkBlue font-semibold"
              >
                {modalData.time}
              </label>
              <div
                className="w-full p-2 rounded-[20px] flex items-center gap-2"
                style={{ border: '1px solid #E8E9EC' }}
              >
                <Image
                  src={cardData.timerIcon}
                  height={16}
                  width={16}
                  alt="phone"
                />

                <Select
                  placeholder="GMT"
                  className="w-full"
                  data={['React', 'Angular', 'Vue', 'Svelte']}
                  variant="unstyled"
                />
              </div>
            </div>
          </div>
          <div className="my-3 text-center">
            <ButtonPrimary
              sx={{
                borderRadius: '40px',
                backgroundColor: theme.colors.golden,
                fontSize: '15px',
                lineHeight: '25.5px',
                width: '70%',
              }}
              className=" font-medium  "
            >
              {modalData.ctx}
            </ButtonPrimary>
          </div>
        </>
      </Modal>
    </>
  );
};

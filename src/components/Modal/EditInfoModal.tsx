import { theme } from '@/theme/theme';
import { Modal, Text } from '@mantine/core';
import React, { useRef, useState } from 'react';
import { modalData } from './modalData';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';

interface ScheduleExamModalProps {
  close: () => void;
  opened: boolean;
}

export const EditInfoModal: React.FC<ScheduleExamModalProps> = ({
  close,
  opened,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const openFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
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
              {modalData.eidt}
            </Text>
          </>
        }
      >
        <>
          <div className="grid gap-3 items-start justify-center">
            <div
              className="max-w-[101px] w-full rounded-[20px] h-[101px] flex items-center justify-center"
              style={{ border: '1px solid #E8E9EC' }}
              onClick={openFileInput}
            >
              {selectedImage ? (
                <img
                  src={selectedImage}
                  style={{
                    maxWidth: '101px',
                    height: '101',
                    borderRadius: '20px',
                  }}
                />
              ) : (
                <img
                  src={modalData.export}
                  style={{ maxWidth: '50px', height: 'auto' }}
                />
              )}
              <input
                type="file"
                id="file-input"
                style={{ display: 'none' }}
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleImageChange}
                ref={fileInputRef}
              />
            </div>
            <Text
              sx={{
                fontSize: '16px',
                lineHeight: '21.47px',
                color: theme.colors.golden,
              }}
              className="font-semibold underline cursor-pointer"
              onClick={openFileInput}
            >
              {modalData.profileText}
            </Text>
          </div>
          <div className="my-3 grid gap-3">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-darkBlue font-semibold"
              >
                {modalData.name}
              </label>
              <div
                className="w-full p-2 rounded-[20px]"
                style={{ border: '1px solid #E8E9EC' }}
              >
                <input
                  type="text"
                  id="first_name"
                  className="w-100 outline-none border-none"
                  placeholder="John"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-darkBlue font-semibold"
              >
                {modalData.company}
              </label>
              <div
                className="w-full p-2 rounded-[20px]"
                style={{ border: '1px solid #E8E9EC' }}
              >
                <input
                  type="text"
                  id="first_name"
                  className="w-100 outline-none border-none"
                  placeholder="John"
                  required
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

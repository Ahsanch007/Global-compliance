import { Modal, Text } from '@mantine/core';
import React, { useState } from 'react';
import { modalData } from './modalData';
import { theme } from '@/theme/theme';
import { cartData } from '../cart/cartData';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import { DatePicker } from '@mantine/dates';

interface SendModalProps {
  close: () => void;
  opened: boolean;
}

export const SendModal: React.FC<SendModalProps> = ({ close, opened }) => {
  return (
    <div>
      <Modal
        opened={opened}
        overlayProps={{
          blur: 3,
        }}
        radius="20px 0px 20px 0px"
        onClose={close}
        // title={
        //   <>
        //     <Text
        //       sx={{
        //         fontSize: '18px',
        //         lineHeight: '21.47px',
        //         color: theme.colors.darkBlue,
        //       }}
        //       className="font-semibold"
        //     >
        //       {modalData.text}
        //     </Text>
        //   </>
        // }
        centered
        size="350px"
      >
        <>
          <div className="my-4 ">
            <Text
              sx={{
                fontSize: '15px',
                lineHeight: '21.47px',
                color: theme.colors.darkBlue,
              }}
              className="font-semibold"
            >
              {modalData.title}:
            </Text>
            <div className="rounded-[10px] border border-solid border-grayBorder p-3 w-full ">
              <input
                type="text"
                className="w-full outline-none border-none"
                placeholder="Ttile"
              />
            </div>
          </div>
          <div className="my-4 ">
            <Text
              sx={{
                fontSize: '15px',
                lineHeight: '21.47px',
                color: theme.colors.darkBlue,
              }}
              className="font-semibold"
            >
              {modalData.reciverEmail}:
            </Text>
            <div className="rounded-[10px] border border-solid border-grayBorder p-3 w-full ">
              <input
                type="text"
                className="w-full outline-none border-none"
                placeholder="Receiver Email"
              />
            </div>
          </div>

          <div className="flex justify-center my-3">
            <ButtonPrimary
              sx={{
                borderRadius: '40px',
                backgroundColor: theme.colors.darkBlue,
                fontSize: '15px',
                lineHeight: '25.5px',
              }}
              className=" md:max-w-[150px] font-medium md:w-full max-w-[205px] w-full"
            >
              {modalData.confirm}
            </ButtonPrimary>
          </div>
        </>
      </Modal>
    </div>
  );
};

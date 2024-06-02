import { theme } from '@/theme/theme';
import { Text } from '@mantine/core';
import React from 'react';
import { cartData } from '../cart/cartData';
// import { Checkbox } from '@mantine/core';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import Image from 'next/image';
import { modalData } from '../Modal/modalData';
interface CheackoutCardProps {
  handleButtonClick: () => void;
}
export const CheackoutCard: React.FC<CheackoutCardProps> = ({
  handleButtonClick,
}) => {
  return (
    <>
      <div
        className=" w-full rounded-[20px] p-4"
        style={{
          border: '1px solid #EEEEEE',
          boxShadow: '0px 25px 46px -17px #0000000D',
        }}
      >
        <div className="my-5">
          <Text
            sx={{
              fontSize: '16px',
              color: theme.colors.greyText,
              lineHeight: '19.09px',
              letterSpacing: '20%',
            }}
            className=" font-semibold text-center"
          >
            {cartData.total}
          </Text>
        </div>
        <div className="mb-[2rem]">
          <Text
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '18px',
                // lineHeight: '29.82px',
              },
              fontSize: '55px',
              color: theme.colors.darkBlue,
              lineHeight: '66.49px',
            })}
            className=" font-bold text-center"
          >
            {cartData.value}
          </Text>
        </div>
        <div className="my-4 max-w-[318px] mx-auto">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-darkBlue font-semibold"
            >
              {modalData.promo}
            </label>
            <div
              className="w-full p-3 rounded-[10px] flex items-center gap-2"
              style={{ border: '1px solid #E8E9EC' }}
            >
              <input
                type="text"
                id="first_name"
                className="w-100 outline-none border-none"
                placeholder="FRENZ"
              />
            </div>
          </div>
        </div>
        <div className="flex my-[2rem] justify-center items-center gap-2">
          {/* <Checkbox color="dark"  size="md" /> */}
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            style={{ border: '1px solid #E8E9EC' }}
            className="w-[23px] h-[23px] cursor-pointer   rounded-[5px] focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2 bg-white "
          />
          <div className="flex">
            <Text
              sx={{
                fontSize: '18px',
                color: theme.colors.darkBlue,
                lineHeight: '30.49px',
              }}
              className=" font-normal"
            >
              {cartData.agree}
            </Text>

            <Text
              sx={{
                fontSize: '18px',
                color: theme.colors.golden,
                lineHeight: '30.49px',
              }}
              className="mx-2 font-medium  underline"
            >
              {cartData.privacy}
            </Text>
          </div>
        </div>
        <div className="checkout max-w-[318px] w-full mx-auto">
          <ButtonPrimary
            sx={{
              backgroundColor: theme.colors.golden,
              borderRadius: '70px',
              height: '60px',
              width: '100%',
            }}
            onClick={() => {
              handleButtonClick();
            }}
          >
            {cartData.check}
          </ButtonPrimary>
        </div>
        <div className="my-[2rem]">
          <Text
            sx={{
              fontSize: '15px',
              color: theme.colors.darkBlue,
              lineHeight: '25.49px',
            }}
            className=" font-semibold cursor-pointer underline text-center"
          >
            {cartData.back}
          </Text>
        </div>
      </div>
    </>
  );
};

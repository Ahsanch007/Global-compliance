import * as Yup from 'yup';
import { Box, Input, PasswordInput, Text } from '@mantine/core';
import React from 'react';
import { signupData } from './signupData';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import Image from 'next/image';
import { useForm, yupResolver } from '@mantine/form';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Please specify password'),
});

export const Login = () => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: yupResolver(schema),
  });

  const onSubmitForm = async (values: any) => {
    console.log(values);
  };

  return (
    <>
      <div className="grid gap-[3rem]">
        <div className="md:max-w-[406px] md:w-100 max-w-[336px] w-100">
          <div className="grid gap-4">
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '25px',
                  lineHeight: '37.5px',
                },
                fontSize: '40px',
                color: theme.colors.darkBlue,
                lineHeight: '60px',
              })}
              className="font-semibold  max-w-[232px] w-[100] md:max-w-[373px] md:w-100"
            >
              {signupData.headingText2}
            </Text>
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '14px',
                  lineHeight: '23.8px',
                },
                fontSize: '18px',
                color: theme.colors.darkBlue,
                lineHeight: '30.6px',
              })}
              className=" font-normal  max-w-[327px] w-[100] md:max-w-[406px] md:w-100"
            >
              {signupData.subText}
            </Text>
          </div>
        </div>
        <div className="md:max-w-[373px] md:w-100 max-w-[336px] w-100">
          <div className="flex justify-between md:max-w-[373px] md:w-100 max-w-[336px] w-100">
            <ButtonPrimary
              sx={(theme) => ({
                [theme.fn.smallerThan('md')]: {
                  fontSize: '13px',
                  height: '45px',
                },
                fontSize: '13px',
                backgroundColor: theme.colors.darkBlue,
                borderRadius: '10px',
                height: '45px',
              })}
              className="   md:max-w-[243px] md:w-100"
            >
              <Image
                src="/icons/google-glass-logo 1.svg"
                className="mx-2 "
                height={18}
                width={18}
                alt="google"
              />
              {signupData.loginBtn}
            </ButtonPrimary>
            <div className="flex gap-2">
              <Box className="rounded-[10px] w-[45px] cursor-pointer h-45px justify-center flex items-center border border-solid  border-grayBorder  ">
                <Image
                  src="/icons/linkedin (3) 1.svg"
                  className="mx-2"
                  height={18}
                  width={18}
                  alt="linkedin"
                />
              </Box>
              <Box className="rounded-[10px] w-[45px] h-45px cursor-pointer justify-center flex items-center border border-solid  border-grayBorder  ">
                <Image
                  src="/icons/apple 1.svg"
                  className="mx-2"
                  height={18}
                  width={18}
                  alt="apple"
                />
              </Box>
            </div>
          </div>
          <div>
            <Image
              className="md:max-w-[373px] md:w-100 max-w-[336px] w-100 my-3"
              src="/icons/Group 1593.svg"
              height={14}
              width={1000}
              alt="divider"
            />
          </div>

          <form
            onSubmit={form.onSubmit(onSubmitForm)}
            className="md:max-w-[373px] md:w-100 max-w-[336px] w-100 my-3"
          >
            <div className="grid gap-3">
              <div className="rounded-[10px]  ">
                <Input
                  type="email"
                  size="lg"
                  classNames={{
                    input: 'rounded-[10px]',
                  }}
                  placeholder="Your E-mail"
                  {...form.getInputProps('email')}
                />
              </div>
              <div className="rounded-[10px] ">
                <PasswordInput
                  size="lg"
                  className="border-grayBorder rounded-[10px]"
                  placeholder="Password"
                  {...form.getInputProps('password')}
                  classNames={{
                    input: 'rounded-[10px]',
                  }}
                />
                {/* <Image
                  src="/icons/info.svg"
                  className="cursor-pointer"
                  height={17}
                  width={17}
                  alt="info"
                /> */}
              </div>
            </div>

            <div className="terms md:max-w-[373px] md:w-100 max-w-[335px] w-100 mt-5 ">
              <ButtonPrimary
                type="submit"
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '14px',
                    height: '45px',
                    width: '335px',
                  },
                  fontSize: '15px',
                  backgroundColor: theme.colors.golden,
                  borderRadius: '10px',
                  height: '45px',
                  width: '373px',
                })}
              >
                {signupData.ctxText3}
              </ButtonPrimary>
            </div>
            {/* <div className="md:max-w-[227px] md:mx-auto justify-center mt-3 md:w-100 max-w-[335px] flex">
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '15px',
                    lineHeight: '17.66px',
                  },
                  fontSize: '15px',
                  color: theme.colors.lightBlue,
                  lineHeight: '17.66px',
                })}
                className="font-medium"
              >
                {signupData.text}
              </Text>
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '15px',
                    lineHeight: '17.66px',
                  },
                  fontSize: '15px',
                  color: theme.colors.lightBlue,
                  lineHeight: '17.66px',
                })}
                className="cursor-pointer    font-semibold"
              >
                {signupData.login}
              </Text>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

'use client';
import { Text } from '@mantine/core';
import { cartData } from './cartData';

import React from 'react';
// import { CheackoutCard } from '../Cards/CheackoutCard';
import { PayCard } from '../Cards/PayCard';

export const Cart = () => {
  return (
    <>
      <div>
        <div className="my-[2rem]">
          <Text
            sx={(theme) => ({
              [theme.fn.smallerThan('md')]: {
                fontSize: '30px',
                // lineHeight: '29.82px',
              },
              fontSize: '45px',
              color: theme.colors.darkBlue,
              lineHeight: '67.5px',
            })}
            className=" font-semibold "
          >
            {cartData.payment}
          </Text>
        </div>
        <div className="flex justify-between flex-wrap">
          <div
            className="max-w-[1014px] w-full p-4 rounded-[20px]"
            style={{
              border: '1px solid #EEEEEE',
              boxShadow: '0px 25px 46px -17px #0000000D',
            }}
          >
            <div className="max-w-[580px] w-full my-[2rem]">
              <Text
                sx={(theme) => ({
                  [theme.fn.smallerThan('md')]: {
                    fontSize: '14px',
                    // lineHeight: '29.82px',
                  },
                  fontSize: '21px',
                  color: theme.colors.darkBlue,
                  lineHeight: '31.5px',
                })}
                className=" font-semibold "
              >
                {cartData.purchase}
              </Text>
            </div>
            <div className="flex justify-between flex-wrap">
              <div className="max-w-[452px] w-full">
                <div>
                  <label>
                    <Text
                      sx={(theme) => ({
                        [theme.fn.smallerThan('md')]: {
                          fontSize: '14px',
                          // lineHeight: '29.82px',
                        },
                        fontSize: '16px',
                        color: theme.colors.darkBlue,
                        lineHeight: '27.px',
                      })}
                      className=" font-medium mb-4 "
                    >
                      {cartData.cardDet}
                    </Text>
                  </label>
                  <div className="flex justify-between">
                    <div className="max-w-[364px] w-full">
                      <div className="rounded-[10px] bg-lightGrey border border-solid border-grayBorder p-3 flex justify-between">
                        <input
                          type="text"
                          placeholder="Card number"
                          className="w-full bg-lightGrey outline-none border-none"
                        />
                        <Text
                          sx={(theme) => ({
                            [theme.fn.smallerThan('md')]: {
                              fontSize: '14px',
                              // lineHeight: '29.82px',
                            },
                            fontSize: '16px',
                            color: '#A1A7AC',
                            lineHeight: '27.px',
                          })}
                          className=" font-medium  "
                        >
                          {cartData.mm}
                        </Text>
                      </div>
                    </div>
                    <div className="rounded-[10px] bg-lightGrey border border-solid border-grayBorder p-3 max-w-[73px] w-full ">
                      <input
                        type="text"
                        placeholder="CVC"
                        className=" bg-lightGrey outline-none border-none w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="my-[2rem]">
                  <label>
                    <Text
                      sx={(theme) => ({
                        [theme.fn.smallerThan('md')]: {
                          fontSize: '14px',
                          // lineHeight: '29.82px',
                        },
                        fontSize: '16px',
                        color: theme.colors.darkBlue,
                        lineHeight: '27.px',
                      })}
                      className=" font-medium mb-4 "
                    >
                      {cartData.email}
                    </Text>
                  </label>
                  <div className="w-full">
                    <div className="rounded-[10px] bg-lightGrey border border-solid border-grayBorder p-3 flex justify-between">
                      <input
                        type="text"
                        placeholder="Email"
                        className="w-full bg-lightGrey outline-none border-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="my-[2rem]">
                  <label>
                    <Text
                      sx={(theme) => ({
                        [theme.fn.smallerThan('md')]: {
                          fontSize: '14px',
                          // lineHeight: '29.82px',
                        },
                        fontSize: '16px',
                        color: theme.colors.darkBlue,
                        lineHeight: '27.px',
                      })}
                      className=" font-medium mb-4 "
                    >
                      {cartData.address}
                    </Text>
                  </label>
                  <div className="w-full">
                    <div className="rounded-[10px]  bg-lightGrey border border-solid border-grayBorder p-3 flex justify-between">
                      {/* <input
                        type="text"
                        placeholder="Country"
                        className="w-full bg-lightGrey outline-none border-none"
                      /> */}
                      <select
                        id="countries"
                        className="w-full cursor-pointer bg-lightGrey outline-none border-none"
                      >
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-[452px] w-full">
                <div>
                  <label>
                    <Text
                      sx={(theme) => ({
                        [theme.fn.smallerThan('md')]: {
                          fontSize: '14px',
                          // lineHeight: '29.82px',
                        },
                        fontSize: '16px',
                        color: theme.colors.darkBlue,
                        lineHeight: '27.px',
                      })}
                      className=" font-medium mb-4 "
                    >
                      {cartData.holder}
                    </Text>
                  </label>
                  <div className="flex justify-between">
                    <div className=" w-full">
                      <div className="rounded-[10px] bg-lightGrey border border-solid border-grayBorder p-3 flex justify-between">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="w-full bg-lightGrey outline-none border-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-[2rem]">
                  <label>
                    <Text
                      sx={(theme) => ({
                        [theme.fn.smallerThan('md')]: {
                          fontSize: '14px',
                          // lineHeight: '29.82px',
                        },
                        fontSize: '16px',
                        color: theme.colors.darkBlue,
                        lineHeight: '27.px',
                      })}
                      className=" font-medium mb-4 "
                    >
                      {cartData.discount}
                    </Text>
                  </label>
                  <div className="w-full">
                    <div className="rounded-[10px] bg-lightGrey border border-solid border-grayBorder p-3 flex justify-between">
                      <input
                        type="password"
                        placeholder="**********"
                        className="w-full bg-lightGrey outline-none border-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="my-[2rem]">
                  <label>
                    <Text
                      sx={(theme) => ({
                        [theme.fn.smallerThan('md')]: {
                          fontSize: '14px',
                          // lineHeight: '29.82px',
                        },
                        fontSize: '16px',
                        color: theme.colors.darkBlue,
                        lineHeight: '27.px',
                      })}
                      className=" font-medium mb-4 "
                    >
                      {cartData.address}
                    </Text>
                  </label>
                  <div className="w-full flex justify-between flex-wrap">
                    <div className="rounded-[10px] max-w-[218px]  bg-lightGrey border border-solid border-grayBorder p-3 flex justify-between">
                      <input
                        type="text"
                        placeholder="ZIP"
                        className="w-full bg-lightGrey outline-none border-none"
                      />
                    </div>
                    <div className="rounded-[10px] max-w-[218px] bg-lightGrey border border-solid border-grayBorder p-3 flex justify-between">
                      {/* <input type="text" placeholder="City" className="w-full bg-lightGrey outline-none border-none" /> */}
                      <select
                        id="city"
                        className="w-[218px] cursor-pointer w-full bg-lightGrey outline-none border-none"
                      >
                        <option selected>city</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[430px] w-full">
            <PayCard />
          </div>
        </div>
      </div>
    </>
  );
};

import Image from 'next/image';
import React from 'react';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import DropdownMenu from '../navbar/NavbarList';
import { Box, Container, HoverCard, Text } from '@mantine/core';
import { containerMaxWidth, theme } from '@/theme/theme';
import { navLinks } from '@/config/config';

export const Header = () => {
  const isLargeScreen = useMediaQuery('(max-width: 1024px)');
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div
        className="  text-white h-[600px]"
        style={{
          backgroundImage: isLargeScreen
            ? 'url("/images/bgMobile.svg")'
            : 'url("/images/bgImg.svg")', // Replace with the actual image path
          backgroundSize: 'cover', // You can adjust this according to your preference
          // backgroundPosition: 'center', // You can adjust this according to your preference
        }}
      >
        <Container size={containerMaxWidth} px="lg" className="navbar">
          {isLargeScreen ? (
            ''
          ) : (
            <div className="flex justify-end py-3">
              <div className="flex items-center">
                <Text className=" font-semibold text-white cursor-pointer">
                  Log In /{' '}
                </Text>
                <Text className=" font-semibold text-white mr-[25px] cursor-pointer">
                  Register
                </Text>
                <Image
                  src="/icons/Group 63.svg"
                  width={30}
                  height={30}
                  alt="bag"
                />
              </div>
            </div>
          )}
          <div className="flex justify-between items-center py-3 md:py-0 ">
            {isLargeScreen ? (
              <Image
                src="/icons/mobile.svg"
                width={50}
                height={50}
                alt="icon"
              />
            ) : (
              <div className="icon">
                <Image
                  src="/images/image 1.svg"
                  width={195.56}
                  height={80}
                  alt="icon"
                />
              </div>
            )}

            <div className="flex items-center">
              {isLargeScreen ? (
                ''
              ) : (
                <>
                  {navLinks.map((link) => (
                    <HoverCard
                      key={link.id}
                      width={130}
                      closeDelay={0.1}
                      shadow="sm"
                    >
                      <HoverCard.Target>
                        <Box
                          sx={{
                            '& img': {
                              marginLeft: '10px',
                            },
                          }}
                        >
                          <Text
                            sx={{
                              fontSize: '18px',
                              fontWeight: 'bold',
                              padding: '10px',
                              cursor: 'pointer',
                              '&:hover': {
                                backgroundColor: '#2D3B45',
                                transition: '0.3s',
                              },
                            }}
                          >
                            {link.text}
                            {link.subLinks && (
                              <Image
                                src="/icons/Vector 1.svg"
                                className="mx-2"
                                width={10}
                                height={10}
                                alt="bag"
                              />
                            )}
                          </Text>
                        </Box>
                      </HoverCard.Target>
                      {link.subLinks && (
                        <HoverCard.Dropdown
                          sx={{
                            padding: '10px',
                            borderRadius: '10px',
                            backgroundColor: '#2D3B45',
                          }}
                        >
                          {link.subLinks.map((subLink) => (
                            <Text
                              key={subLink.id}
                              size="lg"
                              sx={{
                                fontSize: '18px',
                                fontWeight: 'normal',
                                textAlign: 'center',
                                cursor: 'pointer',
                                lineHeight: '40px',
                                '&:hover': {
                                  backgroundColor: theme.colors.golden,
                                  transition: '0.3s',
                                },
                              }}
                            >
                              {subLink.text}
                            </Text>
                          ))}
                        </HoverCard.Dropdown>
                      )}
                    </HoverCard>
                  ))}
                </>
              )}
              {isLargeScreen ? (
                <>
                  <ButtonPrimary>
                    <Image
                      onClick={open}
                      src="/icons/hamBurger.svg"
                      width={30}
                      height={30}
                      alt="burger"
                    />
                  </ButtonPrimary>

                  <Image
                    src="/icons/Group 63.svg"
                    width={30}
                    height={30}
                    alt="bag"
                  />
                </>
              ) : (
                <ButtonPrimary className="bg-golden rounded-[60px]">
                  Candidate Portal
                </ButtonPrimary>
              )}
            </div>
          </div>
          <Box className="max-w-[718px] w-100 grid gap-4">
            <div className="mt-[5rem]">
              <Text className="text-white text-md md:text-lg font-semibold md:text-md sm:text-md  ">
                Global Compliance Institute
              </Text>
              <Box className="max-w-[470px] w-100">
                <Text className="text-white  leading-[39px] ">
                  We help you build the practical skills you need to keep up
                  with all the latest industry and technological developments in
                  the ever-evolving compliance arena.
                </Text>
              </Box>
              <ButtonPrimary className="bg-golden text-darkBlue bg-white rounded-[70px] mt-[1rem]">
                Explorel
                <Image
                  className="mx-2"
                  src="/icons/arrow.svg"
                  width={27}
                  height={10}
                  alt="arrow"
                />
              </ButtonPrimary>
            </div>
          </Box>
        </Container>
      </div>

      {/*  Navbar Drawer  */}
      <DropdownMenu opened={opened} onClose={close} />
    </>
  );
};

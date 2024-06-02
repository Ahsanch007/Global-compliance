import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import { useDisclosure } from '@mantine/hooks';
import DropdownMenu from '../navbar/NavbarList';
import { Box, Button, Container, HoverCard, Text } from '@mantine/core';
import { containerMaxWidth, theme } from '@/theme/theme';
import { headerData } from './headerConfig';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { getMenuItem } from '@/lib/actions/menuItem';

interface MenuItem {
  desc: string;
  listOfItem?: Array<{ desc: string }>;
}

export const Header: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { data: session } = useSession();

  const signInUser = async () => {
    try {
      await signIn('zitadel', {
        callbackUrl: '/',
      });
    } catch (err) {
      console.log(err);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="text-white">
        <Container size={containerMaxWidth} px="lg" className="navbar">
          <div className="hidden lg:block">
            <div className="flex items-center justify-end">
              {session ? (
                <Button onClick={signOutUser}>
                  <Text className="font-semibold text-white cursor-pointer">
                    {headerData.logout}
                  </Text>
                </Button>
              ) : (
                <Button onClick={signInUser}>
                  <Text className="font-semibold text-white cursor-pointer">
                    {headerData.login}
                  </Text>
                  <Text className="font-semibold text-white mr-[25px] cursor-pointer">
                    {headerData.register}
                  </Text>
                </Button>
              )}
              <Link href="../cart" style={{ textDecoration: 'none' }}>
                <Image
                  src={headerData.cartIcon}
                  width={30}
                  height={30}
                  alt="bag"
                />
              </Link>
            </div>
          </div>

          <div className="flex justify-between items-center py-3 md:py-0 ">
            <div>
              <Link href="/" style={{ textDecoration: 'none' }}>
                <Image
                  src={headerData.logoImgMob}
                  width={50}
                  height={50}
                  alt="icon"
                  className="lg:hidden"
                />
              </Link>
              <Link href="/" style={{ textDecoration: 'none' }}>
                <div className="icon">
                  <Image
                    src={headerData.logoImg}
                    className="hidden lg:block"
                    width={195.56}
                    height={80}
                    alt="icon"
                  />
                </div>
              </Link>
            </div>

            <div className="flex items-center">
              {headerData.navLinks.map((link, index) => (
                <div className="hidden lg:block" key={index}>
                  <HoverCard
                    key={index}
                    width="auto"
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
                          className="font-semibold p-[10px] cursor-pointer"
                          sx={{
                            fontSize: '16px',
                            transition: '0.3s',
                            '&:hover': {
                              backgroundColor: '#2D3B45',
                            },
                          }}
                        >
                          {link.text}
                          {link.subLinks && link.subLinks.length > 0 && (
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
                    {link.subLinks && link.subLinks.length > 0 && (
                      <HoverCard.Dropdown
                        sx={{
                          padding: '10px',
                          borderRadius: '10px',
                          backgroundColor: '#2D3B45',
                        }}
                      >
                        {link.subLinks.map((subLink, subIndex) => (
                          <Text
                            key={subIndex}
                            className="text-xss font-normal text-center leading-[40px] p-[10px] cursor-pointer"
                            size="lg"
                            sx={{
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
                </div>
              ))}

              <>
                <ButtonPrimary className="lg:hidden">
                  <Image
                    onClick={open}
                    className="lg:hidden"
                    src={headerData.hamBurger}
                    width={30}
                    height={30}
                    alt="burger"
                  />
                </ButtonPrimary>
                <Link
                  href="../cart"
                  className="lg:hidden"
                  style={{ textDecoration: 'none' }}
                >
                  <Image
                    src={headerData.cartIcon}
                    width={30}
                    height={30}
                    alt="bag"
                  />
                </Link>
                <Link
                  href="../dashboard"
                  className="hidden lg:block"
                  style={{ textDecoration: 'none' }}
                >
                  <ButtonPrimary
                    sx={{
                      backgroundColor: theme.colors.golden,
                      borderRadius: '60px',
                      height: '45px',
                    }}
                    className="md:max-w-[198px] md:w-100"
                  >
                    {headerData.portal}
                  </ButtonPrimary>
                </Link>
              </>
            </div>
          </div>
        </Container>
      </div>

      <DropdownMenu opened={opened} onClose={close} />
    </>
  );
};

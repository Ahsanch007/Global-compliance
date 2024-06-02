import React from 'react';
import Image from 'next/image';
import { Box, Drawer, HoverCard, Text } from '@mantine/core';
import { Flex } from '@mantine/core';
import { theme } from '@/theme/theme';
import { headerData } from '../Layout/headerConfig';

type Props = {
  opened: boolean;
  onClose: () => void;
};
const DropdownMenu = ({ opened, onClose: close }: Props) => {
  return (
    <Drawer
      opened={opened}
      onClose={close}
      position="right"
      size={300}
      overlayProps={{ opacity: 0.5, blur: 4 }}
    >
      <Flex
        direction="column"
        gap="md"
        justify="flex-start"
        align="center"
        wrap="wrap"
      >
        {headerData.navLinks.map((link) => (
          <HoverCard key={link.id} width={130} closeDelay={0.1} shadow="sm">
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
                      color: 'white',
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
                      color: 'white',
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
      </Flex>
    </Drawer>
  );
};

export default DropdownMenu;

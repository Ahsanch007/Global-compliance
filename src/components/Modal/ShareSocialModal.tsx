import { Modal, Text } from '@mantine/core';
import React, { useState } from 'react';
import { modalData } from './modalData';
import { theme } from '@/theme/theme';
import { cartData } from '../cart/cartData';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import { DatePicker } from '@mantine/dates';
import {
  FacebookIcon,
  FacebookShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';

interface ShareSocialModalProps {
  close: () => void;
  opened: boolean;
}

export const ShareSocailModal: React.FC<ShareSocialModalProps> = ({
  close,
  opened,
}) => {
  return (
    <div>
      <Modal
        opened={opened}
        overlayProps={{
          blur: 3,
        }}
        radius="20px 0px 20px 0px"
        onClose={close}
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
              Social
            </Text>
          </>
        }
        centered
        size="350px"
      >
        <>
          <div className="my-4  flex justify-between">
            <FacebookShareButton
              url={'https://peing.net/ja/'}
              quote={'フェイスブックはタイトルが付けれるようです'}
              hashtag={'#hashtag'}
              // description={'aiueo'}
              className="Demo__some-network__share-button"
            >
              <FacebookIcon size={50} round />
            </FacebookShareButton>
            <TwitterShareButton
              url={'https://peing.net/ja/'}
              // quote={'svfd'}
              // hashtag={'#hashtag'}
              // description={'aiueo'}
              className="Demo__some-network__share-button"
            >
              <TwitterIcon size={50} round />
            </TwitterShareButton>
            <LinkedinShareButton
              url={'https://peing.net/ja/'}
              // quote={'vfjns'}
              // hashtag={'#hashtag'}
              // description={'aiueo'}
              className="Demo__some-network__share-button"
            >
              <LinkedinIcon size={50} round />
            </LinkedinShareButton>
            <InstapaperShareButton
              url={'https://peing.net/ja/'}
              // quote={'vfjns'}
              // hashtag={'#hashtag'}
              // description={'aiueo'}
              className="Demo__some-network__share-button"
            >
              <InstapaperIcon size={50} round />
            </InstapaperShareButton>
          </div>
        </>
      </Modal>
    </div>
  );
};

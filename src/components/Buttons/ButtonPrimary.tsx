'use client';
import { Button, ButtonProps } from '@mantine/core';
import { ButtonHTMLAttributes } from 'react';

export const ButtonPrimary = ({
  children,
  ...props
}: ButtonProps & ButtonHTMLAttributes<any>) => {
  return (
    <Button {...props} className="button-primary">
      {children}
    </Button>
  );
};

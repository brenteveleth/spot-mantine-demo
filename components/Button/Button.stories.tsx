import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconArrowRight, IconSend } from '@tabler/icons-react';
import { Button } from '@mantine/core';

const meta: Meta<typeof Button> = {
  title: 'Actions/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: false, table: { disable: true } },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    leftSection: {
      control: 'select',
      options: ['None', 'Icon'],
      mapping: {
        None: undefined,
        Icon: <IconSend size={16} />,
      },
    },
    rightSection: {
      control: 'select',
      options: ['None', 'Icon'],
      mapping: {
        None: undefined,
        Icon: <IconArrowRight size={16} />,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    size: 'md',
    loading: false,
    fullWidth: false,
    variant: 'default',
    disabled: false,
  },
};

export const Filled: Story = {
  args: {
    children: 'Button',
    size: 'md',
    loading: false,
    fullWidth: false,
    variant: 'filled',
    disabled: false,
  },
};

export const Outline: Story = {
  args: {
    children: 'Button',
    size: 'md',
    loading: false,
    fullWidth: false,
    variant: 'outline',
    disabled: false,
  },
};

export const Link: Story = {
  args: {
    children: 'Button',
    size: 'md',
    loading: false,
    fullWidth: false,
    variant: 'subtle',
    disabled: false,
  },
};

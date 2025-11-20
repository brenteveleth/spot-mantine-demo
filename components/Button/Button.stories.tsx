import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconCircleFilled } from '@tabler/icons-react';
import { Button } from '@mantine/core';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['filled', 'outline', 'light', 'subtle'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    leftSection: {
      control: 'select',
      options: {
        None: undefined,
        Icon: <IconCircleFilled size={16} />,
      },
    },
    rightSection: {
      control: 'select',
      options: {
        None: undefined,
        Icon: <IconCircleFilled size={16} />,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    children: 'Filled Button',
    size: 'md',
    loading: false,
    fullWidth: false,
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    size: 'md',
    loading: false,
    fullWidth: false,
  },
};

export const Light: Story = {
  args: {
    children: 'Light Button',
    size: 'md',
    loading: false,
    fullWidth: false,
  },
};

export const Subtle: Story = {
  args: {
    children: 'Subtle Button',
    size: 'md',
    loading: false,
    fullWidth: false,
  },
};

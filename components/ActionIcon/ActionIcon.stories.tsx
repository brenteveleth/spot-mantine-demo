import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  IconAdjustments,
  IconChevronLeft,
  IconClock,
  IconSend2,
  IconSettings,
  IconTrash,
} from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';

const meta: Meta<typeof ActionIcon> = {
  title: 'Actions/ActionIcon',
  component: ActionIcon,
  tags: ['autodocs'],
  argTypes: {
    children: { control: false, table: { disable: true } },
    variant: {
      control: false,
      table: { disable: true },
      options: ['filled', 'outline', 'light', 'subtle', 'default'],
    },
    size: { control: 'select', options: ['md', 'lg', 'xl'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ActionIcon>;

const iconStyle = { width: '70%', height: '70%' };

export const Default: Story = {
  args: {
    children: <IconAdjustments style={iconStyle} />,
    size: 'lg',
    loading: false,
    variant: 'default',
    disabled: false,
  },
};
export const Primary: Story = {
  args: {
    children: <IconAdjustments style={iconStyle} />,
    size: 'lg',
    loading: false,
    variant: 'filled',
    disabled: false,
  },
};
export const Secondary: Story = {
  args: {
    children: <IconAdjustments style={iconStyle} />,
    size: 'lg',
    loading: false,
    variant: 'outline',
    disabled: false,
  },
};
export const Subtle: Story = {
  args: {
    children: <IconAdjustments style={iconStyle} />,
    size: 'lg',
    loading: false,
    variant: 'subtle',
    disabled: false,
  },
};

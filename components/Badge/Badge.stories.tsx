import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconCalendar } from '@tabler/icons-react';
import { Badge } from './Badge';

const iconSizeMap: Record<string, number> = {
  sm: 12,
  md: 12,
  lg: 16,
};

// const iconStyle = { width: '70%', height: '70%' };

const meta: Meta<typeof Badge> = {
  title: 'Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    role: {
      control: 'select',
      options: ['primary', 'secondary', 'positive', 'negative', 'warning', 'info'],
    },
    iconOnly: { control: false, table: { disable: true } },
    leftSection: {
      control: false,
      table: { disable: true }, // Disable controls for leftSection
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Text: Story = {
  args: {
    children: 'Badge',
    role: 'primary',
    size: 'md',
  },
};

export const Icon: Story = {
  args: {
    size: 'md', // Default size
    iconOnly: true,
    leftSection: <IconCalendar size={12} />, // Default icon size
  },
  render: (args) => {
    const iconSize = iconSizeMap[args.size || 'md']; // Get the icon size based on the size prop
    return <Badge {...args} leftSection={<IconCalendar size={iconSize} />} />;
  },
};

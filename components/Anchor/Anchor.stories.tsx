import React from 'react';
import { hrtime } from 'process';
import type { Meta, StoryObj } from '@storybook/react';
import { Anchor } from '@mantine/core';

const meta: Meta<typeof Anchor> = {
  title: 'Navigation/Anchor',
  component: Anchor,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    target: { control: 'select', options: ['_self', '_blank', '_parent', '_top'] },
  },
};

export default meta;
type Story = StoryObj<typeof Anchor>;

export const Default: Story = {
  args: {
    children: 'Default Anchor',
    href: 'http://www.ipecac.com/',
    target: '_blank',
  },
};

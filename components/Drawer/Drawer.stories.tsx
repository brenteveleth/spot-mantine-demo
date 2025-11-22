import React, { useState } from 'react';
import { hrtime } from 'process';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, Drawer } from '@mantine/core';

const meta: Meta<typeof Drawer> = {
  title: 'Overlay/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    position: { control: 'select', options: ['top', 'right', 'bottom', 'left'] },
    withCloseButton: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const withCloseButton: Story = {
  args: {
    children: 'Default Drawer',
    withCloseButton: true,
  },
};

export const WithButton: React.FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      <Drawer opened={opened} onClose={() => setOpened(false)} title="Example Drawer">
        <p>Drawer content goes here.</p>
      </Drawer>
    </>
  );
};

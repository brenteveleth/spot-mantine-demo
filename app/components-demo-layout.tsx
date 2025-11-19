// Layout for Mantine component demo pages
'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { AppShell, Box, Group, NavLink, Stack, Title } from '@mantine/core';
import { ActionToggle } from '../components/ActionToggle/ActionToggle';

const components = [
  'ActionIcon',
  'Anchor',
  'Badge',
  'Button',
  'Card',
  'Checkbox',
  'Drawer',
  'Fieldset',
  // 'Group',
  // 'Image',
  'Loader',
  'NavLink',
  'NumberInput',
  'Pagination',
  'Paper',
  'PasswordInput',
  'PinInput',
  'Radio',
  'ProgressBar',
  'Search',
  'Select',
  'Switch',
  'Tabs',
  'Text',
  'Textarea',
  'TextInput',
  'Title',
].sort();

export default function ComponentsDemoLayout({ children }: { children: ReactNode }) {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 220, breakpoint: 'sm', collapsed: { mobile: false, desktop: false } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Box>
            <Title order={4}>Spot Mantine Test</Title>
          </Box>
          <ActionToggle />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar className="sidebar">
        <Stack gap={0} p="md">
          {components.map((name) => (
            <NavLink key={name} label={name} component={Link} href={`/${name}`} />
          ))}
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main className="main-content">{children}</AppShell.Main>
    </AppShell>
  );
}

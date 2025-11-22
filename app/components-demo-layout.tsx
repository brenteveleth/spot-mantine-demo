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
  'Menu',
  'NavLink',
  'NumberInput',
  'Pagination',
  'Paper',
  'PasswordInput',
  'PinInput',
  'Radio',
  'Popover',
  'ProgressBar',
  'Search',
  'Select',
  'Switch',
  'Tabs',
  'Text',
  'Textarea',
  'TextInput',
  'Title',
  'Tooltip',
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
          {/* Navigation */}
          <NavLink label="Navigation" variant="section" />
          <NavLink label="ActionIcon" component={Link} href="/ActionIcon" />
          <NavLink label="Anchor" component={Link} href="/Anchor" />
          <NavLink label="Button" component={Link} href="/Button" />
          <NavLink label="NavLink" component={Link} href="/NavLink" />
          <NavLink label="Pagination" component={Link} href="/Pagination" />
          <NavLink label="Tabs" component={Link} href="/Tabs" />
          {/* Display */}
          <NavLink label="Display" variant="section" />
          <NavLink label="Avatar" component={Link} href="/Avatar" />
          <NavLink label="Badge" component={Link} href="/Badge" />
          <NavLink label="Card" component={Link} href="/Card" />
          {/* Feedback */}
          <NavLink label="Feedback" variant="section" />
          <NavLink label="Loader" component={Link} href="/Loader" />
          <NavLink label="Progress" component={Link} href="/Progress" />
          {/* Layout */}
          <NavLink label="Layout" variant="section" />
          {/* Input */}
          <NavLink label="Input" variant="section" />
          {/* Typography */}
          <NavLink label="Typography" variant="section" />
          {/* Misc. */}
          <NavLink label="Misc." variant="section" />
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main className="main-content">{children}</AppShell.Main>
    </AppShell>
  );
}

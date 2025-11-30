// Layout for Mantine component demo pages
'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import the hook
import { AppShell, Box, Group, NavLink, Space, Stack, Title } from '@mantine/core';
import { ActionToggle } from '../components/ActionToggle/ActionToggle';

export default function ComponentsDemoLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname(); // Get the current path

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
          {/* Navigation */}
          <NavLink label="Navigation" variant="section" />
          <NavLink
            label="ActionIcon"
            component={Link}
            href="/ActionIcon"
            active={pathname === '/ActionIcon'}
          />
          <NavLink label="Anchor" component={Link} href="/Anchor" active={pathname === '/Anchor'} />
          <NavLink label="Button" component={Link} href="/Button" active={pathname === '/Button'} />
          <NavLink
            label="SplitButton"
            component={Link}
            href="/SplitButton"
            active={pathname === '/SplitButton'}
          />
          <NavLink
            label="NavLink"
            component={Link}
            href="/NavLink"
            active={pathname === '/NavLink'}
          />
          <NavLink
            label="Pagination"
            component={Link}
            href="/Pagination"
            active={pathname === '/Pagination'}
          />
          <NavLink label="Tabs" component={Link} href="/Tabs" active={pathname === '/Tabs'} />
          {/* Display */}
          <NavLink label="Display" variant="section" mt={12} />
          <NavLink label="Avatar" component={Link} href="/Avatar" active={pathname === '/Avatar'} />
          <NavLink label="Badge" component={Link} href="/Badge" active={pathname === '/Badge'} />
          <NavLink label="Card" component={Link} href="/Card" active={pathname === '/Card'} />
          {/* Feedback */}
          <NavLink label="Feedback" variant="section" mt={12} />
          <NavLink label="Loader" component={Link} href="/Loader" active={pathname === '/Loader'} />
          <NavLink
            label="ProgressBar"
            component={Link}
            href="/ProgressBar"
            active={pathname === '/ProgressBar'}
          />
          {/* Layout */}
          {/* <NavLink label="Layout" variant="section" /> */}
          {/* Input */}
          <NavLink label="Input" variant="section" mt={12} />
          <NavLink
            label="Checkbox"
            component={Link}
            href="/Checkbox"
            active={pathname === '/Checkbox'}
          />
          <NavLink
            label="Fieldset"
            component={Link}
            href="/Fieldset"
            active={pathname === '/Fieldset'}
          />
          <NavLink
            label="NumberInput"
            component={Link}
            href="/NumberInput"
            active={pathname === '/NumberInput'}
          />
          <NavLink
            label="PasswordInput"
            component={Link}
            href="/PasswordInput"
            active={pathname === '/PasswordInput'}
          />
          <NavLink
            label="PhoneNumberInput"
            component={Link}
            href="/PhoneNumberInput"
            active={pathname === '/PhoneNumberInput'}
          />
          <NavLink
            label="PinInput"
            component={Link}
            href="/PinInput"
            active={pathname === '/PinInput'}
          />
          <NavLink label="Radio" component={Link} href="/Radio" active={pathname === '/Radio'} />
          <NavLink
            label="SegmentedControl"
            component={Link}
            href="/SegmentedControl"
            active={pathname === '/SegmentedControl'}
          />
          <NavLink label="Select" component={Link} href="/Select" active={pathname === '/Select'} />
          <NavLink label="Search" component={Link} href="/Search" active={pathname === '/Search'} />
          <NavLink label="Switch" component={Link} href="/Switch" active={pathname === '/Switch'} />
          <NavLink
            label="TextInput"
            component={Link}
            href="/TextInput"
            active={pathname === '/TextInput'}
          />
          <NavLink
            label="Textarea"
            component={Link}
            href="/Textarea"
            active={pathname === '/Textarea'}
          />
          {/* Typography */}
          <NavLink label="Typography" variant="section" mt={12} />
          <NavLink label="Text" component={Link} href="/Text" active={pathname === '/Text'} />
          <NavLink label="Title" component={Link} href="/Title" active={pathname === '/Title'} />
          {/* Overlay */}
          <NavLink label="Overlay" variant="section" mt={12} />
          <NavLink label="Drawer" component={Link} href="/Drawer" active={pathname === '/Drawer'} />
          <NavLink label="Menu" component={Link} href="/Menu" active={pathname === '/Menu'} />
          <NavLink label="Modal" component={Link} href="/Modal" active={pathname === '/Modal'} />
          <NavLink
            label="Popover"
            component={Link}
            href="/Popover"
            active={pathname === '/Popover'}
          />
          <NavLink
            label="Tooltip"
            component={Link}
            href="/Tooltip"
            active={pathname === '/Tooltip'}
          />
          {/* Misc. */}
          <NavLink label="Misc." variant="section" />
          <Space h="xl" />
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main className="main-content">
        {children}
        <Space h="xl" />
      </AppShell.Main>
    </AppShell>
  );
}

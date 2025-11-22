'use client';

import {
  IconArrowsLeftRight,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
} from '@tabler/icons-react';
import { Box, Button, Divider, Menu, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ComponentsDemoLayout from '../components-demo-layout';

export default function MenuDemo() {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <ComponentsDemoLayout>
      <Title order={2}>Menu</Title>
      <Text size="md" mt="xs" c="dimmed">
        Lorem ipsum
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="xl" style={{ display: 'flex', gap: 20 }}>
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Button>Toggle menu</Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Application</Menu.Label>
            <Menu.Item leftSection={<IconSettings size={14} />}>Settings</Menu.Item>
            <Menu.Item leftSection={<IconMessageCircle size={14} />}>Messages</Menu.Item>
            <Menu.Item leftSection={<IconPhoto size={14} />}>Gallery</Menu.Item>
            <Menu.Item
              leftSection={<IconSearch size={14} />}
              rightSection={
                <Text size="xs" c="dimmed">
                  ⌘K
                </Text>
              }
            >
              Search
            </Menu.Item>

            <Menu.Divider />

            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item leftSection={<IconArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>
            <Menu.Item color="red" leftSection={<IconTrash size={14} />}>
              Delete my account
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <Menu width={200} position="bottom-start" withArrow arrowPosition="center">
          <Menu.Target>
            <Button>Toggle Menu with Submenus</Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item>Dashboard</Menu.Item>

            <Menu.Sub openDelay={120} closeDelay={150}>
              <Menu.Sub.Target>
                <Menu.Sub.Item>Products</Menu.Sub.Item>
              </Menu.Sub.Target>

              <Menu.Sub.Dropdown>
                <Menu.Item>All products</Menu.Item>
                <Menu.Item>Categories</Menu.Item>
                <Menu.Item>Tags</Menu.Item>
                <Menu.Item>Attributes</Menu.Item>
                <Menu.Item>Shipping classes</Menu.Item>
              </Menu.Sub.Dropdown>
            </Menu.Sub>

            <Menu.Sub>
              <Menu.Sub.Target>
                <Menu.Sub.Item>Orders</Menu.Sub.Item>
              </Menu.Sub.Target>

              <Menu.Sub.Dropdown>
                <Menu.Item>Open</Menu.Item>
                <Menu.Item>Completed</Menu.Item>
                <Menu.Item>Cancelled</Menu.Item>
              </Menu.Sub.Dropdown>
            </Menu.Sub>

            <Menu.Sub>
              <Menu.Sub.Target>
                <Menu.Sub.Item>Settings</Menu.Sub.Item>
              </Menu.Sub.Target>

              <Menu.Sub.Dropdown>
                <Menu.Item>Profile</Menu.Item>
                <Menu.Item>Security</Menu.Item>
                <Menu.Item>Notifications</Menu.Item>
              </Menu.Sub.Dropdown>
            </Menu.Sub>
          </Menu.Dropdown>
        </Menu>
      </Box>
    </ComponentsDemoLayout>
  );
}

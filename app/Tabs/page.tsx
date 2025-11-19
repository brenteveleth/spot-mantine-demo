'use client';

import { IconMessageCircle, IconPhoto, IconSettings } from '@tabler/icons-react';
import { Alert, Box, Divider, Space, Tabs, Text, Title } from '@mantine/core';
import ComponentsDemoLayout from '../components-demo-layout';

export default function TabsDemo() {
  return (
    <ComponentsDemoLayout>
      <Title order={2}>Tabs</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="md">
        <Tabs radius="none" defaultValue="buttons">
          <Tabs.List>
            <Tabs.Tab value="buttons" leftSection={<IconPhoto size={12} />}>
              Buttons
            </Tabs.Tab>
            <Tabs.Tab value="action-icons" leftSection={<IconMessageCircle size={12} />}>
              Action Icons
            </Tabs.Tab>
            <Tabs.Tab value="headings" leftSection={<IconSettings size={12} />}>
              Headings
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="buttons">
            <Space h="xl" />
            This is a tab panel
          </Tabs.Panel>

          <Tabs.Panel value="action-icons">
            <Space h="xl" />
            This is another tab panel
          </Tabs.Panel>

          <Tabs.Panel value="headings">
            <Space h="xl" />
            This is yet another tab panel
          </Tabs.Panel>
        </Tabs>
        <Space h="xl" />
        <Alert title="Note" color="orange">
          Still need to finish extending Tabs so we can show/hide the baseline
        </Alert>
      </Box>
    </ComponentsDemoLayout>
  );
}

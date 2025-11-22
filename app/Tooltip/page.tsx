'use client';

import { IconInfoCircle } from '@tabler/icons-react';
import { ActionIcon, Box, Button, Divider, Text, TextInput, Title, Tooltip } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ComponentsDemoLayout from '../components-demo-layout';

export default function TooltipDemo() {
  // const [opened, { close, open }] = useDisclosure(false);
  return (
    <ComponentsDemoLayout>
      <Title order={2}>Tooltip</Title>
      <Text size="md" mt="xs" color="dimmed">
        Lorem ipsum
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="xl" style={{ display: 'flex', gap: 20 }}>
        <Tooltip label="Above" position="top">
          <ActionIcon size="lg">
            <IconInfoCircle size={20} />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Right" position="right">
          <ActionIcon size="lg">
            <IconInfoCircle size={20} />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Below" position="bottom">
          <ActionIcon size="lg">
            <IconInfoCircle size={20} />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Left" position="left">
          <ActionIcon size="lg">
            <IconInfoCircle size={20} />
          </ActionIcon>
        </Tooltip>
      </Box>
    </ComponentsDemoLayout>
  );
}

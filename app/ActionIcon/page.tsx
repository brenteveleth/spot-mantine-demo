import { IconAdjustments, IconChevronLeft, IconSend2, IconTrash } from '@tabler/icons-react';
import { ActionIcon, Box, Divider, Group, Space, Text, Title } from '@mantine/core';
import ComponentsDemoLayout from '../components-demo-layout';

export default function ActionIconDemo() {
  return (
    <ComponentsDemoLayout>
      <Title order={2}>ActionIcon</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="md">
        <Group justify="left" gap="xs" role="presentation">
          <ActionIcon variant="filled" aria-label="Send" size="md">
            <IconSend2 size={16} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="filled" aria-label="Send" size="lg">
            <IconSend2 size={20} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="filled" aria-label="Send" size="xl">
            <IconSend2 size={28} stroke={1.5} />
          </ActionIcon>
        </Group>
        <Space h="md" />
        <Group justify="left" gap="xs" role="presentation">
          <ActionIcon variant="outline" aria-label="Adjustments" size="md">
            <IconAdjustments size={16} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="outline" aria-label="Adjustments" size="lg">
            <IconAdjustments size={20} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="outline" aria-label="Adjustments" size="xl">
            <IconAdjustments size={28} stroke={1.5} />
          </ActionIcon>
        </Group>
        <Space h="md" />
        <Group justify="left" gap="xs" role="presentation">
          <ActionIcon aria-label="Back" size="md">
            <IconChevronLeft size={16} stroke={1.5} />
          </ActionIcon>
          <ActionIcon aria-label="Back" size="lg">
            <IconChevronLeft size={20} stroke={1.5} />
          </ActionIcon>
          <ActionIcon aria-label="Back" size="xl">
            <IconChevronLeft size={28} stroke={1.5} />
          </ActionIcon>
        </Group>
        <Space h="md" />
        <Group justify="left" gap="xs" role="presentation">
          <ActionIcon variant="subtle" aria-label="Delete" size="md">
            <IconTrash size={16} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="subtle" aria-label="Delete" size="lg">
            <IconTrash size={20} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="subtle" aria-label="Delete" size="xl">
            <IconTrash size={28} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Box>
    </ComponentsDemoLayout>
  );
}

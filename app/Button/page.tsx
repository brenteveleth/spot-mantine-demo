import { IconCalendar, IconPhoto } from '@tabler/icons-react';
import { Box, Button, Divider, Group, Space, Text, Title } from '@mantine/core';
import ComponentsDemoLayout from '../components-demo-layout';

export default function ButtonDemo() {
  return (
    <ComponentsDemoLayout>
      <Title order={2}>Button</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="md">
        <Group justify="left" gap="xs" role="presentation">
          <Button variant="primary" size="xs">
            Primary
          </Button>
          <Button variant="primary" size="sm">
            Primary
          </Button>
          <Button variant="primary" size="md">
            Primary
          </Button>
          <Button variant="primary" size="xs" leftSection={<IconCalendar size={16} />}>
            Primary
          </Button>
          <Button variant="primary" size="sm" leftSection={<IconCalendar size={18} />}>
            Primary
          </Button>
          <Button variant="primary" size="md" leftSection={<IconCalendar size={20} />}>
            Primary
          </Button>
          <Button variant="primary" size="xs" rightSection={<IconPhoto size={16} />}>
            Primary
          </Button>
          <Button variant="primary" size="sm" rightSection={<IconPhoto size={18} />}>
            Primary
          </Button>
          <Button variant="primary" size="md" rightSection={<IconPhoto size={20} />}>
            Primary
          </Button>
          <Button
            variant="primary"
            size="xs"
            leftSection={<IconCalendar size={16} />}
            rightSection={<IconPhoto size={16} />}
          >
            Primary
          </Button>
          <Button
            variant="primary"
            size="sm"
            leftSection={<IconCalendar size={18} />}
            rightSection={<IconPhoto size={18} />}
          >
            Primary
          </Button>
          <Button
            variant="primary"
            size="md"
            leftSection={<IconCalendar size={20} />}
            rightSection={<IconPhoto size={20} />}
          >
            Primary
          </Button>
        </Group>
        <Space h="md" />
        <Group justify="left" gap="xs" role="presentation">
          <Button variant="outline" size="xs">
            Secondary
          </Button>
          <Button variant="outline" size="sm">
            Secondary
          </Button>
          <Button variant="outline" size="md">
            Secondary
          </Button>
          <Button variant="outline" size="xs" leftSection={<IconCalendar size={16} />}>
            Secondary
          </Button>
          <Button variant="outline" size="sm" leftSection={<IconCalendar size={18} />}>
            Secondary
          </Button>
          <Button variant="outline" size="md" leftSection={<IconCalendar size={20} />}>
            Secondary
          </Button>
          <Button variant="outline" size="xs" rightSection={<IconPhoto size={16} />}>
            Secondary
          </Button>
          <Button variant="outline" size="sm" rightSection={<IconPhoto size={18} />}>
            Secondary
          </Button>
          <Button variant="outline" size="md" rightSection={<IconPhoto size={20} />}>
            Secondary
          </Button>
          <Button
            variant="outline"
            size="xs"
            leftSection={<IconCalendar size={16} />}
            rightSection={<IconPhoto size={16} />}
          >
            Secondary
          </Button>
          <Button
            variant="outline"
            size="sm"
            leftSection={<IconCalendar size={18} />}
            rightSection={<IconPhoto size={18} />}
          >
            Secondary
          </Button>
          <Button
            variant="outline"
            size="md"
            leftSection={<IconCalendar size={20} />}
            rightSection={<IconPhoto size={20} />}
          >
            Secondary
          </Button>
        </Group>
        <Space h="md" />
        <Group justify="left" gap="xs" role="presentation">
          <Button variant="default" size="xs">
            Basic
          </Button>
          <Button variant="default" size="sm">
            Basic
          </Button>
          <Button variant="default" size="md">
            Basic
          </Button>
          <Button variant="default" size="xs" leftSection={<IconCalendar size={16} />}>
            Basic
          </Button>
          <Button variant="default" size="sm" leftSection={<IconCalendar size={18} />}>
            Basic
          </Button>
          <Button variant="default" size="md" leftSection={<IconCalendar size={20} />}>
            Basic
          </Button>
          <Button variant="default" size="xs" rightSection={<IconPhoto size={16} />}>
            Basic
          </Button>
          <Button variant="default" size="sm" rightSection={<IconPhoto size={18} />}>
            Basic
          </Button>
          <Button variant="default" size="md" rightSection={<IconPhoto size={20} />}>
            Basic
          </Button>
          <Button
            variant="default"
            size="xs"
            leftSection={<IconCalendar size={16} />}
            rightSection={<IconPhoto size={16} />}
          >
            Basic
          </Button>
          <Button
            variant="default"
            size="sm"
            leftSection={<IconCalendar size={18} />}
            rightSection={<IconPhoto size={18} />}
          >
            Basic
          </Button>
          <Button
            variant="default"
            size="md"
            leftSection={<IconCalendar size={20} />}
            rightSection={<IconPhoto size={20} />}
          >
            Basic
          </Button>
        </Group>
        <Space h="md" />
        <Group justify="left" gap="xs" role="presentation">
          <Button variant="subtle" size="xs">
            Link
          </Button>
          <Button variant="subtle" size="sm">
            Link
          </Button>
          <Button variant="subtle" size="md">
            Link
          </Button>
          <Button variant="subtle" size="xs" leftSection={<IconCalendar size={16} />}>
            Link
          </Button>
          <Button variant="subtle" size="sm" leftSection={<IconCalendar size={18} />}>
            Link
          </Button>
          <Button variant="subtle" size="md" leftSection={<IconCalendar size={20} />}>
            Link
          </Button>
          <Button variant="subtle" size="xs" rightSection={<IconPhoto size={16} />}>
            Link
          </Button>
          <Button variant="subtle" size="sm" rightSection={<IconPhoto size={18} />}>
            Link
          </Button>
          <Button variant="subtle" size="md" rightSection={<IconPhoto size={20} />}>
            Link
          </Button>
          <Button
            variant="subtle"
            size="xs"
            leftSection={<IconCalendar size={16} />}
            rightSection={<IconPhoto size={16} />}
          >
            Link
          </Button>
          <Button
            variant="subtle"
            size="sm"
            leftSection={<IconCalendar size={18} />}
            rightSection={<IconPhoto size={18} />}
          >
            Link
          </Button>
          <Button
            variant="subtle"
            size="md"
            leftSection={<IconCalendar size={20} />}
            rightSection={<IconPhoto size={20} />}
          >
            Link
          </Button>
        </Group>
      </Box>
    </ComponentsDemoLayout>
  );
}

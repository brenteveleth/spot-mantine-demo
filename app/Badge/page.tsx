'use client';

import { IconCalendar } from '@tabler/icons-react';
import {
  Alert,
  Avatar,
  Box,
  Card,
  Divider,
  Flex,
  Group,
  Indicator,
  Space,
  Text,
  Title,
} from '@mantine/core';
import { Badge } from '../../components/Badge/Badge';
import ComponentsDemoLayout from '../components-demo-layout';

export default function BadgeDemo() {
  return (
    <ComponentsDemoLayout>
      <Title order={2}>Badge</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>

      <Divider my="lg" mb="xl" />
      <Box mt="md">
        <Group>
          <Badge role="primary" size="sm">
            2
          </Badge>
          <Badge role="primary" size="md">
            2
          </Badge>
          <Badge role="primary" size="lg">
            2
          </Badge>
          <Badge role="primary" size="sm">
            Done
          </Badge>
          <Badge role="primary" size="md">
            Done
          </Badge>
          <Badge role="primary" size="lg">
            Done
          </Badge>
          <Badge role="primary" size="sm" iconOnly leftSection={<IconCalendar size={12} />}></Badge>
          <Badge role="primary" size="md" iconOnly leftSection={<IconCalendar size={12} />}></Badge>
          <Badge role="primary" size="lg" iconOnly leftSection={<IconCalendar size={16} />}></Badge>
        </Group>
        <Space h="lg" />
        <Group>
          <Badge role="secondary" size="sm">
            2
          </Badge>
          <Badge role="secondary" size="md">
            2
          </Badge>
          <Badge role="secondary" size="lg">
            2
          </Badge>
          <Badge role="secondary" size="sm">
            Full
          </Badge>
          <Badge role="secondary" size="md">
            Full
          </Badge>
          <Badge role="secondary" size="lg">
            Full
          </Badge>

          <Badge
            role="secondary"
            size="sm"
            iconOnly
            leftSection={<IconCalendar size={12} />}
          ></Badge>
          <Badge
            role="secondary"
            size="md"
            iconOnly
            leftSection={<IconCalendar size={12} />}
          ></Badge>
          <Badge
            role="secondary"
            size="lg"
            iconOnly
            leftSection={<IconCalendar size={16} />}
          ></Badge>
        </Group>
        <Space h="lg" />
        <Group>
          <Badge role="positive" size="sm">
            2
          </Badge>
          <Badge role="positive" size="md">
            2
          </Badge>
          <Badge role="positive" size="lg">
            2
          </Badge>
          <Badge role="positive" size="sm">
            Sent
          </Badge>
          <Badge role="positive" size="md">
            Sent
          </Badge>
          <Badge role="positive" size="lg">
            Sent
          </Badge>

          <Badge
            role="positive"
            size="sm"
            iconOnly
            leftSection={<IconCalendar size={12} />}
          ></Badge>
          <Badge
            role="positive"
            size="md"
            iconOnly
            leftSection={<IconCalendar size={12} />}
          ></Badge>
          <Badge
            role="positive"
            size="lg"
            iconOnly
            leftSection={<IconCalendar size={16} />}
          ></Badge>
        </Group>
        <Space h="lg" />
        <Group>
          <Badge role="warning" size="sm">
            2
          </Badge>
          <Badge role="warning" size="md">
            2
          </Badge>
          <Badge role="warning" size="lg">
            2
          </Badge>
          <Badge role="warning" size="sm">
            Low
          </Badge>
          <Badge role="warning" size="md">
            Low
          </Badge>
          <Badge role="warning" size="lg">
            Low
          </Badge>

          <Badge role="warning" size="sm" iconOnly leftSection={<IconCalendar size={12} />}></Badge>
          <Badge role="warning" size="md" iconOnly leftSection={<IconCalendar size={12} />}></Badge>
          <Badge role="warning" size="lg" iconOnly leftSection={<IconCalendar size={16} />}></Badge>
        </Group>
        <Space h="lg" />
        <Group>
          <Badge role="info" size="sm">
            2
          </Badge>
          <Badge role="info" size="md">
            2
          </Badge>
          <Badge role="info" size="lg">
            2
          </Badge>
          <Badge role="info" size="sm">
            New
          </Badge>
          <Badge role="info" size="md">
            New
          </Badge>
          <Badge role="info" size="lg">
            New
          </Badge>

          <Badge role="info" size="sm" iconOnly leftSection={<IconCalendar size={12} />}></Badge>
          <Badge role="info" size="md" iconOnly leftSection={<IconCalendar size={12} />}></Badge>
          <Badge role="info" size="lg" iconOnly leftSection={<IconCalendar size={16} />}></Badge>
        </Group>
        <Space h="lg" />
        <Group>
          <Badge role="negative" size="sm">
            2
          </Badge>
          <Badge role="negative" size="md">
            2
          </Badge>
          <Badge role="negative" size="lg">
            2
          </Badge>
          <Badge role="negative" size="sm">
            Failed
          </Badge>
          <Badge role="negative" size="md">
            Failed
          </Badge>
          <Badge role="negative" size="lg">
            Failed
          </Badge>

          <Badge
            role="negative"
            size="sm"
            iconOnly
            leftSection={<IconCalendar size={12} />}
          ></Badge>
          <Badge
            role="negative"
            size="md"
            iconOnly
            leftSection={<IconCalendar size={12} />}
          ></Badge>
          <Badge
            role="negative"
            size="lg"
            iconOnly
            leftSection={<IconCalendar size={16} />}
          ></Badge>
        </Group>
        <Space h="lg" />
        <Group>
          <Box p="md">
            <Indicator size={12} withBorder position="bottom-end" offset={4}>
              <Avatar
                size="sm"
                radius="pill"
                src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
              />
            </Indicator>
          </Box>
          <Box p="md">
            <Indicator size={14} withBorder position="bottom-end" offset={6}>
              <Avatar
                size="md"
                radius="pill"
                src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
              />
            </Indicator>
          </Box>
          <Box p="md">
            <Indicator size={16} withBorder position="bottom-end" offset={8}>
              <Avatar
                size="lg"
                radius="pill"
                src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
              />
            </Indicator>
          </Box>
          <Card radius="md" withBorder shadow="md">
            <Indicator size={16} withBorder position="bottom-end" offset={4}>
              <Avatar
                size="sm"
                radius="pill"
                src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
              />
            </Indicator>
          </Card>
          <Card radius="md" withBorder shadow="md">
            <Indicator size={16} withBorder position="bottom-end" offset={6}>
              <Avatar
                size="md"
                radius="pill"
                src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
              />
            </Indicator>
          </Card>
          <Card p="md" radius="md" withBorder shadow="md">
            <Indicator size={16} withBorder position="bottom-end" offset={8}>
              <Avatar
                size="lg"
                radius="pill"
                src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
              />
            </Indicator>
          </Card>
        </Group>
      </Box>
      <Alert mt="xl" title="Note" color="orange">
        Indictor is a separate component; for simplicy, I'd suggest we keep it separate from Badge.
        Changing the border color of Indicator is proiving difficult.
      </Alert>
    </ComponentsDemoLayout>
  );
}

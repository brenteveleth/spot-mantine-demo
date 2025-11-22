'use client';

import { Box, Button, Divider, Popover, Text, TextInput, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ComponentsDemoLayout from '../components-demo-layout';

export default function PopoverDemo() {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <ComponentsDemoLayout>
      <Title order={2}>Popover</Title>
      <Text size="md" mt="xs" color="dimmed">
        Lorem ipsum
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="xl" style={{ display: 'flex', gap: 20 }}>
        <Popover width={200} position="top" withArrow shadow="md">
          <Popover.Target>
            <Button>Above</Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Text size="sm">This is uncontrolled popover, it is opened when button is clicked</Text>
          </Popover.Dropdown>
        </Popover>
        <Popover width={200} position="right" withArrow shadow="md">
          <Popover.Target>
            <Button>Right</Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Text size="sm">This is uncontrolled popover, it is opened when button is clicked</Text>
          </Popover.Dropdown>
        </Popover>
        <Popover width={200} position="bottom" withArrow shadow="md">
          <Popover.Target>
            <Button>Below</Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Text size="sm">This is uncontrolled popover, it is opened when button is clicked</Text>
          </Popover.Dropdown>
        </Popover>
        <Popover width={200} position="left" withArrow shadow="md">
          <Popover.Target>
            <Button>Left</Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Text size="sm">This is uncontrolled popover, it is opened when button is clicked</Text>
          </Popover.Dropdown>
        </Popover>
      </Box>
      <Box mt="xl" style={{ display: 'flex', gap: 20 }}>
        <Popover width={200} position="right" withArrow shadow="md" opened={opened}>
          <Popover.Target>
            <Button onMouseEnter={open} onMouseLeave={close}>
              Hover to see popover
            </Button>
          </Popover.Target>
          <Popover.Dropdown style={{ pointerEvents: 'none' }}>
            <Text size="sm">This popover is shown when user hovers the target element</Text>
          </Popover.Dropdown>
        </Popover>
        <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
          <Popover.Target>
            <Button>Popover with focus trap</Button>
          </Popover.Target>
          <Popover.Dropdown>
            <TextInput label="Name" placeholder="Name" size="xs" />
            <TextInput label="Email" placeholder="john@doe.com" size="xs" mt="xs" />
          </Popover.Dropdown>
        </Popover>
      </Box>
    </ComponentsDemoLayout>
  );
}

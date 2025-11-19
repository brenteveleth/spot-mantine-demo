import { Box, Divider, Group, Switch, SwitchGroup, Text, Title } from '@mantine/core';
import ComponentsDemoLayout from '../components-demo-layout';

export default function SwitchDemo() {
  return (
    <ComponentsDemoLayout>
      <Title order={2}>Switch</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="md">
        <SwitchGroup
          defaultValue={['react']}
          label="Turn on effects pedals"
          description="As long as it's one of these"
        >
          <Group mt="xs">
            <Switch label="Super Collider" value="super-collider" />
            <Switch label="Big Muff" value="big-muff" />
            <Switch label="M-13 Meathead" value="m-13-meathead" />
          </Group>
        </SwitchGroup>
      </Box>
    </ComponentsDemoLayout>
  );
}

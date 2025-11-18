import { Box, Text, Title } from '@mantine/core';
import ComponentsDemoLayout from '../components-demo-layout';

export default function BoxDemo() {
  return (
    <ComponentsDemoLayout>
      <Title order={2}>Box</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>
      <Box mt="md" />
    </ComponentsDemoLayout>
  );
}

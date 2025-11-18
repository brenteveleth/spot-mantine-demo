import { Box, Text, Title } from '@mantine/core';
import ComponentsDemoLayout from '../components-demo-layout';

export default function GridDemo() {
  return (
    <ComponentsDemoLayout>
      <Title order={2}>Grid</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>
      <Box mt="md"></Box>
    </ComponentsDemoLayout>
  );
}

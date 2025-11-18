import { Box, Text, Title } from '@mantine/core';
import ComponentsDemoLayout from '../components-demo-layout';

export default function CardDemo() {
  return (
    <ComponentsDemoLayout>
      <Title order={2}>Card</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>
      <Box mt="md"></Box>
    </ComponentsDemoLayout>
  );
}

import { Box, Divider, NumberInput, Text, Title } from '@mantine/core';
import ComponentsDemoLayout from '../components-demo-layout';

export default function NumberInputDemo() {
  return (
    <ComponentsDemoLayout>
      <Title order={2}>NumberInput</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="md">
        <NumberInput
          label="The Most Metal Number"
          description="Enter a number that rocks"
          defaultValue={666}
          mt="lg"
          w="240px"
        />
      </Box>
    </ComponentsDemoLayout>
  );
}

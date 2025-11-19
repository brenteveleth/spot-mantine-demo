import { Box, Divider, Text, Textarea, Title } from '@mantine/core';
import ComponentsDemoLayout from '../components-demo-layout';

export default function TextareaDemo() {
  return (
    <ComponentsDemoLayout>
      <Title order={2}>Textarea</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="md">
        <Textarea
          label="Message"
          description="Send a communication to the aliens"
          placeholder="Your message"
          minRows={3}
          mt="lg"
          resize="vertical"
          w="420px"
        />
      </Box>
    </ComponentsDemoLayout>
  );
}

import { Box, Divider, Space, Text, TextInput, Title } from '@mantine/core';
import ComponentsDemoLayout from '../components-demo-layout';

export default function TextInputDemo() {
  return (
    <ComponentsDemoLayout>
      <Title order={2}>TextInput</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="md">
        <TextInput label="First Name" placeholder="Your first name" required w="240px" />
        <Space h="md" />
        <TextInput label="Last Name" placeholder="Your last name" required w="240px" />
      </Box>
    </ComponentsDemoLayout>
  );
}

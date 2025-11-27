import { Alert, Box, Divider, PasswordInput, Text, Title } from '@mantine/core';
import ComponentsDemoLayout from '../components-demo-layout';

export default function PasswordInputDemo() {
  return (
    <ComponentsDemoLayout>
      <Title order={2}>PasswordInput</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="md">
        <PasswordInput
          label="Password"
          description="Keep it secret, keep it safe"
          placeholder="Enter your password"
          mt="lg"
          w="240px"
        />
        <Alert title="Note" color="orange" mt="lg">
          PasswordInput needs the Spot icon applied
        </Alert>
      </Box>
    </ComponentsDemoLayout>
  );
}

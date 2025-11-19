import { Box, Divider, Text, Title } from '@mantine/core';
import ComponentsDemoLayout from '../components-demo-layout';

export default function TitleDemo() {
  return (
    <ComponentsDemoLayout>
      <Title order={2}>Title</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="md">
        <Title order={1} mb="sm">
          H1 Heading
        </Title>
        <Title order={2} mb="sm">
          H2 Heading
        </Title>
        <Title order={3} mb="sm">
          H3 Heading
        </Title>
        <Title order={4} mb="sm">
          H4 Heading
        </Title>
        <Title order={5} mb="sm">
          H5 Heading
        </Title>
      </Box>
    </ComponentsDemoLayout>
  );
}

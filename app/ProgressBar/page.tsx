import { Alert, Box, Divider, Space, Text, Title } from '@mantine/core';
import { ProgressBar } from '@/components/Progress/ProgressBar';
import ComponentsDemoLayout from '../components-demo-layout';

export default function LoaderDemo() {
  return (
    <ComponentsDemoLayout>
      <Title order={2}>ProgressBar</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="md">
        <Space h="xl" />
        <ProgressBar value={0} />
        <Space h="xl" />
        <ProgressBar value={33} />
        <Space h="xl" />
        <ProgressBar value={66} />
        <Space h="xl" />
        <ProgressBar value={100} />
        <Alert title="Note" color="blue" mt="xl">
          The current Progress Bar wasn't meeting color contrast requirements for AA, so I made some
          color changes to accomodate
        </Alert>
      </Box>
    </ComponentsDemoLayout>
  );
}

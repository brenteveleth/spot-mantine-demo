import { Box, Button, Card, Center, Divider, Loader, Space, Text, Title } from '@mantine/core';
import { ProgressBar } from '@/components/Progress/ProgressBar';
import ComponentsDemoLayout from '../components-demo-layout';

export default function LoaderDemo() {
  return (
    <ComponentsDemoLayout>
      <Title order={2}>Loader</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="md">
        <Card>
          <Center>
            <Loader color="gray" size="xs" />
            <Space w="sm" />
            <Text c="dimmed" size="xs">
              Loading
            </Text>
          </Center>
          <Space h="lg" />
          <Center>
            <Loader color="gray" size="sm" />
            <Space w="sm" />
            <Text c="dimmed" size="sm">
              Loading
            </Text>
          </Center>
          <Space h="lg" />
          <Center>
            <Loader color="gray" />
            <Space w="sm" />
            <Text c="dimmed">Loading</Text>
          </Center>
          <Space h="lg" />
          <Center>
            <Button variant="primary" size="sm" loading w="100px">
              Primary
            </Button>
            <Space w="sm" />
            <Button variant="outline" size="sm" loading w="100px">
              Primary
            </Button>
            <Space w="sm" />
            <Button variant="default" size="sm" loading w="100px">
              Primary
            </Button>
          </Center>
        </Card>
      </Box>
    </ComponentsDemoLayout>
  );
}

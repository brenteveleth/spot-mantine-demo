import { Anchor, Box, Code, Divider, Text, Title } from '@mantine/core';
import ComponentsDemoLayout from '../components-demo-layout';

export default function AnchorDemo() {
  return (
    <ComponentsDemoLayout>
      <Title order={2}>Anchor</Title>
      <Text size="md" mt="xs" color="dimmed">
        Replaces <Code>{'<a href=""></a>'}</Code> in most instances
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="md">
        <Text mt="sm" c="dimmed" maw="480px">
          This template showcases the integration of{' '}
          <Anchor
            href="https://www.soundcloud.com/chanceswithwolves"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mantine UI components
          </Anchor>{' '}
          with Next.js, providing a solid foundation for building modern web applications. Explore
          the various components and features included in this template to kickstart your
          development process.
        </Text>
      </Box>
    </ComponentsDemoLayout>
  );
}

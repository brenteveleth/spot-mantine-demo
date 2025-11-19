import { Alert, Box, Divider, Text, Title } from '@mantine/core';
import ComponentsDemoLayout from '../components-demo-layout';

export default function TextDemo() {
  return (
    <ComponentsDemoLayout>
      <Title order={2}>Text</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="md">
        <>
          <Text size="xs">Extra small text</Text>
          <Text size="sm">Small text</Text>
          <Text size="md">Default text</Text>
          <Text size="lg">Large text</Text>
          <Text size="xl">Extra large text</Text>
          <Text fw={500}>Semibold</Text>
          <Text fw={700}>Bold</Text>
          <Text fs="italic">Italic</Text>
          <Text td="underline">Underlined</Text>
          <Text td="line-through">Strikethrough</Text>
          <Text c="dimmed">Dimmed text</Text>
          <Text c="blue">Blue text</Text>
          <Text c="teal.4">Teal 4 text</Text>
          <Text tt="uppercase">Uppercase</Text>
          <Text tt="capitalize">capitalized text</Text>
          <Text ta="center">Aligned to center</Text>
          <Text ta="right">Aligned to right</Text>
        </>
        <Alert title="Note" color="orange" mt="xl">
          A few updates to the Spot 2 type scale are needed
        </Alert>
      </Box>
    </ComponentsDemoLayout>
  );
}

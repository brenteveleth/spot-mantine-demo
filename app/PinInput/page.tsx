import { Box, Divider, Flex, PinInput, Text, Title } from '@mantine/core';
import ComponentsDemoLayout from '../components-demo-layout';

export default function PinInputDemo() {
  return (
    <ComponentsDemoLayout>
      <Title order={2}>PinInput</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="md">
        <Text mt="xl" ta="center" size="sm" c="dimmed">
          Enter the 6-digit code sent to your phone:
        </Text>
        <Flex justify="center">
          <PinInput length={6} mt="lg" oneTimeCode inputMode="numeric" />
        </Flex>
      </Box>
    </ComponentsDemoLayout>
  );
}

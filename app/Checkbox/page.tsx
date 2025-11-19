'use client';

import { Box, Checkbox, Divider, Stack, Text, Title } from '@mantine/core';
import ComponentsDemoLayout from '../components-demo-layout';

export default function CheckboxDemo() {
  return (
    <ComponentsDemoLayout>
      <Title order={2}>Checkbox</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="md">
        <Checkbox defaultChecked label="I agree to sell my privacy" />
        <Divider my="lg" mb="xl" w="25%" />
        <Stack>
          <Checkbox checked={false} onChange={() => {}} label="Default checkbox" />
          <Checkbox
            checked={false}
            onChange={() => {}}
            indeterminate
            label="Indeterminate checkbox"
          />
          <Checkbox checked onChange={() => {}} label="Checked checkbox" />
          <Checkbox
            checked
            variant="outline"
            onChange={() => {}}
            label="Outline checked checkbox"
          />
          <Checkbox
            variant="outline"
            onChange={() => {}}
            indeterminate
            label="Outline indeterminate checkbox"
          />
          <Checkbox disabled label="Disabled checkbox" />
          <Checkbox disabled checked onChange={() => {}} label="Disabled checked checkbox" />
          <Checkbox disabled indeterminate label="Disabled indeterminate checkbox" />
        </Stack>
      </Box>
    </ComponentsDemoLayout>
  );
}

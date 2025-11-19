import { Box, Divider, Group, Radio, RadioGroup, Text, Title } from '@mantine/core';
import ComponentsDemoLayout from '../components-demo-layout';

export default function RadioDemo() {
  return (
    <ComponentsDemoLayout>
      <Title order={2}>Radio</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>

      <Divider my="lg" mb="xl" />
      <Box mt="md">
        <RadioGroup
          name="favoriteBand"
          label="What's your favorite band?"
          description="This is anonymous"
          mt="lg"
          required
        >
          <Group mt="sm">
            <Radio value="Sleep" label="Sleep" />
            <Radio value="Melvins" label="Melvins" />
            <Radio value="Ministry" label="Ministry" />
            <Radio value="Fantomas" label="Fantomas" />
          </Group>
        </RadioGroup>
      </Box>
    </ComponentsDemoLayout>
  );
}

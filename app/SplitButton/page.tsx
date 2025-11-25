import { SP } from 'next/dist/shared/lib/utils';
import { IconBookmark, IconCalendar, IconChevronDown, IconTrash } from '@tabler/icons-react';
import {
  ActionIcon,
  Alert,
  Box,
  Button,
  Divider,
  Group,
  Menu,
  Space,
  Switch,
  SwitchGroup,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { SplitButton } from '../../components/SplitButton/SplitButton';
import ComponentsDemoLayout from '../components-demo-layout';

export default function SplitButtonDemo() {
  return (
    <ComponentsDemoLayout>
      <Title order={2}>SplitButton</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="md">
        {/* <SplitButton /> */}
        <SplitButton />
        <Space h="lg" />
        <Alert title="Note" color="orange">
          SplitButton needs to have props added and sort how to add menu items to the dropdown
          portion of the button. Also needs to have correct Button classes applied from theme.ts
        </Alert>
      </Box>
    </ComponentsDemoLayout>
  );
}

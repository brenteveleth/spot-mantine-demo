import {
  IconAdjustments,
  IconCalendar,
  IconMessageCircle,
  IconSettings,
} from '@tabler/icons-react';
import { Alert, Box, Divider, NavLink, Space, Stack, Text, Title } from '@mantine/core';
import ComponentsDemoLayout from '../components-demo-layout';

export default function NavLinkDemo() {
  return (
    <ComponentsDemoLayout>
      <Title order={2}>NavLink</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="md">
        <Stack gap="0" align="stretch">
          <NavLink label="User Actions" variant="section" />
          <NavLink
            label="Appointments"
            leftSection={<IconCalendar size={16} />}
            href="#required-for-focus"
            variant="light"
            active
          >
            <NavLink label="Upcoming" />
            <NavLink label="Past Appointments" />
            <NavLink label="Cancelled" />
          </NavLink>
          <NavLink label="Messages" leftSection={<IconMessageCircle size={16} />} weight="heavy">
            <NavLink label="Inbox" weight="heavy" />
            <NavLink label="Sent" />
            <NavLink label="Drafts" />
          </NavLink>

          <NavLink label="Account Settings" variant="section" />
          <NavLink label="Edit Profile" leftSection={<IconSettings size={16} />}>
            <NavLink label="Personal Info" weight="heavy" />
            <NavLink label="Profile Photo" />
            <NavLink label="Privacy Settings" />
          </NavLink>
          <NavLink label="Preferences" leftSection={<IconAdjustments size={16} />}>
            <NavLink label="Notifications" />
            <NavLink label="Display Settings" />
            <NavLink label="Language" />
          </NavLink>
        </Stack>
        <Space h="md" />
        <Alert title="Note" color="orange">
          Still need to finish extending NavLink: at the moment, the children are behind
          disclosures, which isn't how Spot 2 works
        </Alert>
      </Box>
    </ComponentsDemoLayout>
  );
}

'use client';

import { Box, Button, Divider, Drawer, Group, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ComponentsDemoLayout from '../components-demo-layout';

export default function DrawerDemo() {
  const [rightDrawerOpened, { open: openRightDrawer, close: closeRightDrawer }] =
    useDisclosure(false);
  const [bottomDrawerOpened, { open: openBottomDrawer, close: closeBottomDrawer }] =
    useDisclosure(false);
  const [leftDrawerOpened, { open: openLeftDrawer, close: closeLeftDrawer }] = useDisclosure(false);
  return (
    <ComponentsDemoLayout>
      <Title order={2}>Drawer</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="md">
        <Drawer position="right" opened={rightDrawerOpened} onClose={closeRightDrawer} size="240px">
          <Text p="16px">Right drawer content goes here</Text>
        </Drawer>
        <Drawer
          position="bottom"
          opened={bottomDrawerOpened}
          onClose={closeBottomDrawer}
          size="240px"
        >
          <Text p="16px">Bottom drawer content goes here</Text>
        </Drawer>
        <Drawer position="left" opened={leftDrawerOpened} onClose={closeLeftDrawer} size="240px">
          <Text p="16px">Left drawer content goes here</Text>
        </Drawer>
        <Group>
          <Button variant="default" onClick={openRightDrawer}>
            Open Right Drawer
          </Button>
          <Button variant="default" onClick={openBottomDrawer}>
            Open Bottom Drawer
          </Button>
          <Button variant="default" onClick={openLeftDrawer}>
            Open Left Drawer
          </Button>
        </Group>
      </Box>
    </ComponentsDemoLayout>
  );
}

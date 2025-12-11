'use client';

import { useState } from 'react';
import {
  IconCalendar,
  IconChevronRight,
  IconCirclePlus,
  IconCirclePlusFilled,
  IconClipboard,
  IconClock,
  IconDotsVertical,
  IconHomeFilled,
  IconInfoCircle,
  IconMapPin,
  IconSettings,
  IconStethoscope,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Group,
  Image,
  MantineColorsTuple,
  MantineProvider,
  Menu,
  mergeThemeOverrides,
  ScrollArea,
  Space,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { UVCTheme, VelloTheme, VPTheme } from '../../theme-merge';
import styles from './page.module.css';

// Mock data //
const mockData = {
  pets: [
    {
      id: 1,
      name: 'Bella',
      breed: 'Mixed Breed',
      image: '/images/pet-bella.jpg',
      complianceScore: 100,
      hasAlerts: true,
      alertCount: 2,
    },
    {
      id: 2,
      name: 'Poppy',
      breed: 'Domestic Shorthair',
      image: '/images/pet-poppy.png',
      complianceScore: 85,
      hasAlerts: false,
    },
  ],
  appointment: {
    title: 'Annual Wellness Visit',
    date: 'January 21, 2026',
    time: '3:00 PM',
    dayOfWeek: 'Wednesday',
    month: 'Jan',
    day: '21',
    clinic: 'New Moon Veterinary Clinic',
    get nextAppointment() {
      return `${this.time} | ${this.dayOfWeek}, ${this.date}`;
    },
  },
  practice: {
    name: 'New Moon Veterinary Clinic',
    address: '1 Idexx Dr, Westbrook, ME 04092',
  },
};

function POEHomePage() {
  // Theme switching //
  const themeMap: Record<ThemeName, any> = {
    Vello: VelloTheme,
    VetPartners: VPTheme,
    UnitedVeterinaryCare: UVCTheme,
  };

  const logos: Record<ThemeName, string> = {
    Vello: '/images/vello-logo.svg',
    VetPartners: '/images/vpuk_logo.svg',
    UnitedVeterinaryCare: '/images/uvc_logo_wh.png',
  };

  type ThemeName = 'Vello' | 'VetPartners' | 'UnitedVeterinaryCare';
  const [themeName, setThemeName] = useState<ThemeName>('Vello');

  // Page //
  return (
    <MantineProvider theme={themeMap[themeName]}>
      <Box className={styles.container}>
        {/* Header */}
        <Box className={styles.header}>
          <Container size="sm" p="md">
            <Group justify="space-between" align="center">
              <Image src={logos[themeName]} alt="Logo" h={40} w="auto" />
              <Menu shadow="md" width={200} position="bottom-end">
                <Menu.Target>
                  <ActionIcon
                    variant="transparent"
                    size="lg"
                    className={styles.themeSwitcher}
                    style={{ color: 'white' }}
                    onClick={() => console.log('Settings clicked')}
                  >
                    <IconSettings size={24} />
                  </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Label>Theme</Menu.Label>
                  <Menu.Item onClick={() => setThemeName('Vello')}>Vello</Menu.Item>
                  <Menu.Item onClick={() => setThemeName('VetPartners')}>VetPartners</Menu.Item>
                  <Menu.Item onClick={() => setThemeName('UnitedVeterinaryCare')}>
                    United Veterinary Care
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Container>
        </Box>
        {/* ...existing code... */}
        <Container className={styles.content}>
          <Stack gap="md">
            {/* My Pets Section */}
            <Box>
              <Title order={5} c="white" mb="md" pl="md">
                My Pets
              </Title>
              {/* Horizontal ScrollArea for pet cards */}
              <ScrollArea type="scroll" scrollbarSize={0} offsetScrollbars>
                <Group gap="md" align="stretch" wrap="nowrap" pl="md" w="448px">
                  {/*  Radius here  */}
                  {mockData.pets.map((pet) => (
                    <Card
                      key={pet.id}
                      p={0}
                      style={{
                        width: 200,
                        border: '1px solid white',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        flexShrink: 0,
                      }}
                      onClick={() => console.log(`Pet ${pet.name} clicked`)}
                    >
                      <Card.Section>
                        <Image src={pet.image} height={172} alt={pet.name} fit="cover" />
                      </Card.Section>
                      <Group justify="space-between" p="sm" align="flex-start">
                        <Box>
                          <Title order={4} size="h5">
                            {pet.name}
                          </Title>
                          <Text size="sm" c="dimmed">
                            {pet.breed}
                          </Text>
                        </Box>
                        {pet.complianceScore === 100 && (
                          <Image
                            src="/images/compliance-badge-100.svg"
                            alt="100 Care Score"
                            w={40}
                            h={53}
                          />
                        )}
                      </Group>
                    </Card>
                  ))}
                </Group>
              </ScrollArea>
            </Box>
          </Stack>
        </Container>
        <Space h="lg" />
        {/* Appointments & Practice Section */}
        <Box className={styles.lightSection}>
          <Container size="sm" p="md">
            <Stack gap="lg">
              {/* Next Appointment */}
              <Box>
                <Group justify="space-between" align="center" mb="md">
                  <Title order={5}>Next Appointment</Title>
                  <Button
                    variant="subtle"
                    size="sm"
                    fw="600"
                    leftSection={<IconCirclePlusFilled size={20} />}
                  >
                    Book
                  </Button>
                </Group>
                <Card p="md" withBorder>
                  {/* {' '} */}
                  {/*  Radius here  */}
                  <Stack gap="sm">
                    <Text fw={600} size="md">
                      {mockData.appointment.title}
                    </Text>
                    <Group gap="md" align="flex-start" wrap="nowrap">
                      {/* Calendar Icon */}
                      <Box className={styles.calendarBox}>
                        <Text size="xs" fw={700} c="white" ta="center">
                          {mockData.appointment.month}
                        </Text>
                        <Box w="100%" bdrs="sm" bg="white">
                          <Text size="xl" fw={500} ta="center" lh={1.3}>
                            {mockData.appointment.day}
                          </Text>
                        </Box>
                      </Box>
                      {/* Appointment Details */}
                      <Stack gap={6} style={{ flex: 1 }}>
                        <Group gap="xs" wrap="nowrap" align="top">
                          <IconClock size={20} color="var(--mantine-color-gray-3)" />
                          <Text size="sm" w="180px" style={{ lineHeight: 1.333 }}>
                            {mockData.appointment.nextAppointment}
                          </Text>
                        </Group>
                        <Group gap="xs" wrap="nowrap">
                          <IconMapPin size={20} color="var(--mantine-color-gray-3)" />
                          <Text size="sm">{mockData.appointment.clinic}</Text>
                        </Group>
                      </Stack>
                      <IconChevronRight
                        size={20}
                        color="var(--mantine-color-gray-3)"
                        style={{ flexShrink: 0 }}
                      />
                    </Group>
                    <Divider />
                    <Button
                      fullWidth
                      size="sm"
                      fw={600}
                      variant="subtle"
                      leftSection={<IconMapPin size={20} />}
                      onClick={() => console.log('Get directions clicked')}
                    >
                      Get Directions
                    </Button>
                  </Stack>
                </Card>
              </Box>
              {/* My Practice */}
              <Box>
                <Title order={5} mb="md">
                  My Practice
                </Title>
                {/*  Radius here  */}
                <Card
                  p="md"
                  withBorder
                  style={{ cursor: 'pointer' }}
                  onClick={() => console.log('Practice clicked')}
                >
                  <Group justify="space-between" wrap="nowrap">
                    <Group gap="sm" wrap="nowrap">
                      <Box
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          backgroundColor: 'var(--mantine-primary-color-1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <IconStethoscope size={24} color="var(--mantine-primary-color-6)" />
                      </Box>
                      <Box>
                        <Text fw={600} size="md">
                          {mockData.practice.name}
                        </Text>
                        <Text size="sm" c="dimmed">
                          {mockData.practice.address}
                        </Text>
                      </Box>
                    </Group>
                    <IconChevronRight size={20} color="#babdbf" style={{ flexShrink: 0 }} />
                  </Group>
                </Card>
              </Box>
              {/* Decorative illustration */}
              <Box style={{ textAlign: 'center', paddingTop: '1rem' }}>
                <Image
                  src="/images/pet-illustration.svg"
                  alt="Pet illustration"
                  w={61}
                  h={82}
                  style={{ margin: '0 auto' }}
                />
              </Box>
            </Stack>
          </Container>
        </Box>
        {/* Bottom Navigation */}
        <Box className={styles.bottomNav}>
          <Container size="sm" p={0}>
            <Group justify="space-around" gap={0}>
              <Box className={styles.navItem} onClick={() => console.log('Home clicked')}>
                <Stack gap={4} align="center">
                  <IconHomeFilled size={24} color="var(--mantine-color-dark-7)" />
                  <Text size="xs" c="var(--mantine-color-dark-7)">
                    Home
                  </Text>
                </Stack>
                <Box className={styles.activeIndicator} />
              </Box>
              <Box className={styles.navItem} onClick={() => console.log('Appointments clicked')}>
                <Stack gap={4} align="center">
                  <IconCalendar size={24} color="var(--mantine-color-dark-3)" />
                  <Text size="xs" c="var(--mantine-color-dark-3)">
                    Appointments
                  </Text>
                </Stack>
              </Box>
              <Box className={styles.navItem} onClick={() => console.log('Care clicked')}>
                <Stack gap={4} align="center">
                  <IconClipboard size={24} color="var(--mantine-color-dark-3)" />
                  <Text size="xs" c="var(--mantine-color-dark-3)">
                    Care
                  </Text>
                </Stack>
              </Box>
              <Box className={styles.navItem} onClick={() => console.log('More clicked')}>
                <Stack gap={4} align="center">
                  <IconDotsVertical size={24} color="var(--mantine-color-dark-3)" />
                  <Text size="xs" c="var(--mantine-color-dark-3)">
                    More
                  </Text>
                </Stack>
              </Box>
            </Group>
          </Container>
        </Box>
      </Box>
    </MantineProvider>
  );
}

export default POEHomePage;

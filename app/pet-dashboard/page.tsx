'use client';

import {
  IconCalendar,
  IconChevronRight,
  IconCirclePlus,
  IconCirclePlusFilled,
  IconClipboard,
  IconClock,
  IconHome,
  IconHomeFilled,
  IconInfoCircle,
  IconMapPin,
  IconMedicalCross,
  IconMenu2,
  IconPlus,
  IconSettings,
  IconStethoscope,
} from '@tabler/icons-react';
import { color } from 'storybook/theming';
import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Group,
  Image,
  ScrollArea,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import styles from './page.module.css';

// Mock data
const mockData = {
  pets: [
    {
      id: 1,
      name: 'Bella',
      breed: 'Labrador Retriever',
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
    date: 'September 21, 2025',
    time: '3:00 PM',
    dayOfWeek: 'Wednesday',
    month: 'Sep',
    day: '21',
    clinic: 'New Moon Veterinary Clinic',
  },
  practice: {
    name: 'New Moon Veterinary Clinic',
    address: '1 Idexx Dr, Westbrook, ME 04092',
  },
};

export default function PetDashboardPage() {
  return (
    <Box className={styles.container}>
      {/* Header */}
      <Box className={styles.header}>
        <Container size="sm" p="md">
          <Group justify="space-between" align="center">
            <Image src="/images/vello-logo.svg" alt="Vello by IDEXX" h={40} w="auto" />
            <ActionIcon variant="transparent" size="lg" style={{ color: 'white' }}>
              <IconSettings size={24} />
            </ActionIcon>
          </Group>
        </Container>
      </Box>

      {/* Main Content */}
      <Container size="sm" p="md" className={styles.content}>
        <Stack gap="lg">
          {/* My Pets Section */}
          <Box>
            <Title order={5} c="white" mb="md">
              My Pets
            </Title>
            {/* Horizontal ScrollArea for pet cards */}
            <ScrollArea type="scroll" scrollbarSize={8} offsetScrollbars>
              <Group gap="md" align="stretch" wrap="nowrap" style={{ minWidth: '100%' }}>
                {mockData.pets.map((pet) => (
                  <Card
                    key={pet.id}
                    radius="md"
                    p={0}
                    style={{
                      width: 340,
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
                          alt="100% Compliant"
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

                {/* <Group
                  gap={4}
                  style={{
                    cursor: 'pointer',
                    padding: '8px 12px',
                    borderRadius: '8px',
                  }}
                  onClick={() => console.log('Book clicked')}
                >
                  <IconPlus size={16} color="#095dbe" />
                  <Text size="sm" fw={600} c="#095dbe">
                    Book
                  </Text>
                </Group> */}
              </Group>

              <Card radius="md" p="md" withBorder>
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
                        <IconClock size={20} color="#97999b" />
                        <Text size="xs" style={{ lineHeight: 1.5 }}>
                          {mockData.appointment.time} | {mockData.appointment.dayOfWeek},{' '}
                          {mockData.appointment.date}
                        </Text>
                      </Group>
                      <Group gap="xs" wrap="nowrap">
                        <IconMapPin size={20} color="#97999b" />
                        <Text size="xs">{mockData.appointment.clinic}</Text>
                      </Group>
                    </Stack>

                    <IconChevronRight size={20} color="#babdbf" style={{ flexShrink: 0 }} />
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

                  {/* <Group
                    gap={4}
                    justify="center"
                    style={{ cursor: 'pointer' }}
                    onClick={() => console.log('Get Directions clicked')}
                  >
                    <IconMapPin size={16} color="#095dbe" />
                    <Text size="sm" fw={600} c="#095dbe">
                      Get Directions
                    </Text>
                  </Group> */}
                </Stack>
              </Card>
            </Box>

            {/* My Practice */}
            <Box>
              <Title order={5} mb="md">
                My Practice
              </Title>
              <Card
                radius="md"
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
                        backgroundColor: '#e7f9ff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <IconStethoscope size={24} color="#095dbe" />
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
                <IconHomeFilled size={24} />
                <Text size="xs">Home</Text>
              </Stack>
              <Box className={styles.activeIndicator} />
            </Box>

            <Box className={styles.navItem} onClick={() => console.log('Appointments clicked')}>
              <Stack gap={4} align="center">
                <IconCalendar size={24} color="#737578" />
                <Text size="xs" c="#797a7c">
                  Appointments
                </Text>
              </Stack>
            </Box>

            <Box className={styles.navItem} onClick={() => console.log('Care clicked')}>
              <Stack gap={4} align="center">
                <IconClipboard size={24} color="#737578" />
                <Text size="xs" c="#797a7c">
                  Care
                </Text>
              </Stack>
            </Box>

            <Box className={styles.navItem} onClick={() => console.log('More clicked')}>
              <Stack gap={4} align="center">
                <IconMenu2 size={24} color="#797a7c" />
                <Text size="xs" c="#797a7c">
                  More
                </Text>
              </Stack>
            </Box>
          </Group>
        </Container>
      </Box>
    </Box>
  );
}

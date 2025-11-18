'use client';

import { useState } from 'react';
import {
  IconAdjustments,
  IconCalendar,
  IconChevronLeft,
  IconEdit,
  IconMessageCircle,
  IconPhoto,
  IconSend2,
  IconSettings,
  IconTrash,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Anchor,
  AppShell,
  Box,
  Button,
  Card,
  Center,
  Checkbox,
  Drawer,
  Fieldset,
  Flex,
  Grid,
  Group,
  Image,
  Loader,
  NavLink,
  NumberInput,
  Pagination,
  Paper,
  PasswordInput,
  PinInput,
  Radio,
  Select,
  Space,
  Stack,
  Switch,
  Tabs,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { ActionToggle } from '../components/ActionToggle/ActionToggle';
import PhoneNumberInput from '../components/PhoneNumberInput/PhoneNumberInput';
import { ProgressBar } from '../components/Progress/ProgressBar';
import { SpotModal } from '../components/SpotModal/SpotModal';
import { Badge } from '../components/Badge/Badge';
import ButtonGroup from '../components/ButtonGroup/ButtonGroup';

const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

type FormValues = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  consent: boolean;
  message?: string;
  favoriteBand?: string;
};

export default function HomePage() {
    // ...existing code...
    const [singleValue, setSingleValue] = useState('edit');
    const [multiValue, setMultiValue] = useState<string[]>(['edit']);
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      consent: false,
    },

    validate: {
      firstName: (value: string) => (value.length < 2 ? 'First name must have at least 2 letters' : null),
      lastName: (value: string) => (value.length < 2 ? 'Last name must have at least 2 letters' : null),
      address: (value: string) => (value.length < 5 ? 'Address must have at least 5 characters' : null),
      state: (value: string) => (value === '' ? 'State is required' : null),
    },
  });

  // Capitalize first and last name on input
  const handleNameChange =
    (field: 'firstName' | 'lastName') => (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value.replace(/\b\w/g, (char) => char.toUpperCase());
      form.setFieldValue(field, value);
    };

  const handleSubmit = (values: typeof form.values) => {
    setSubmittedData(values);
  };

  const [opened, { open, close }] = useDisclosure(false);
  const [drawerOpened, { open: openDrawer, close: closeDrawer }] = useDisclosure(false);

  const limit = 10;
  const total = 145;
  const totalPages = Math.ceil(total / limit);
  const [page, setPage] = useState(1);
  const message = `Showing ${limit * (page - 1) + 1} – ${Math.min(total, limit * page)} of ${total}`;

  const [checked, setChecked] = useState(false);

  return (
    <AppShell
      header={{ height: 60 }}
      // navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !mobileOpened, desktop: !desktopOpened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Box>
            <Text variant="tertiary-eyebrow" mb={4}>
              Demo Form
            </Text>
            <Title order={4}>User Information Form</Title>
          </Box>
          <ActionToggle />
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Grid>
          <Grid.Col span={12} pl={240} pr={240}>
            <Text mt="sm" c="dimmed">
              This template showcases the integration of{' '}
              <Anchor href="https://www.soundcloud.com/chanceswithwolves" target="_blank" rel="noopener noreferrer">
                Mantine UI components
              </Anchor>{' '}
              with Next.js, providing a solid foundation for building modern web applications.
              Explore the various components and features included in this template to kickstart
              your development process.
            </Text>

            <Paper withBorder p="md" mt="lg" radius="md">
              <Title order={5} mb="md">
                Typography Styles
              </Title>
              <Stack gap="sm">
                <Box>
                  <Text variant="tertiary-eyebrow">Tertiary Eyebrow Style</Text>
                  <Text size="xs" c="dimmed">
                    12px/18px • Roboto Bold • Uppercase
                  </Text>
                </Box>
                <Box>
                  <Text variant="secondary">Secondary Text Style</Text>
                  <Text size="xs" c="dimmed">
                    13.5px/19px • Roboto Regular
                  </Text>
                </Box>
                <Box>
                  <Text variant="tertiary">Tertiary Text Style</Text>
                  <Text size="xs" c="dimmed">
                    12px/18px • Roboto Regular
                  </Text>
                </Box>
              </Stack>
            </Paper>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={6}>
            <Box m="xl">
              <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <Grid>
                  <Grid.Col span={6}>
                    <NumberInput
                      label="The Most Metal Number"
                      placeholder="666"
                      defaultValue={666}
                      mt="lg"
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <PasswordInput label="Password" placeholder="Enter your password" mt="lg" />
                  </Grid.Col>
                </Grid>
                <Text mt="xl" ta="center" size="sm" c="dimmed">
                  Enter the 6-digit code sent to your phone:
                </Text>
                <Flex justify="center">
                  <PinInput length={6} mt="lg" oneTimeCode inputMode="numeric" />
                </Flex>
                <Grid mt="xl">
                  <Grid.Col span={6}>
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                      <Card.Section>
                        <Image
                          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2886"
                          height={160}
                          alt="Black and White Cat"
                        />
                      </Card.Section>

                      <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500}>Lulu</Text>
                        <Badge role="info">
                          New Patient
                        </Badge>
                      </Group>

                      <Text size="sm" c="dimmed">
                        Cats are curious, playful companions who bring joy and comfort to any home.
                      </Text>

                      <Button variant="outline" fullWidth mt="md">
                        Schedule appointment
                      </Button>
                    </Card>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                      <Card.Section>
                        <Image
                          src="https://images.unsplash.com/photo-1491485880348-85d48a9e5312?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                          height={160}
                          alt="Maine Coon Cat"
                        />
                      </Card.Section>

                      <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500}>Scout</Text>
                        <Badge role="warning">
                          Overdue
                        </Badge>
                      </Group>

                      <Text size="sm" c="dimmed">
                        Maine Coon cats are known for their beautiful long coats and independent
                        personalities.
                      </Text>

                      <Button variant="outline" fullWidth mt="md">
                        Schedule appointment
                      </Button>
                    </Card>
                  </Grid.Col>
                </Grid>
                <Card p="md" mt="lg" withBorder shadow="false" radius="md">
                  <Switch.Group
                    defaultValue={['react']}
                    label="Turn on effects pedals"
                    description="As long as it's one of these"
                  >
                    <Group mt="xs">
                      <Switch label="Super Collider" value="super-collider" />
                      <Switch label="Big Muff" value="big-muff" />
                      <Switch label="M-13 Meathead" value="m-13-meathead" />
                    </Group>
                  </Switch.Group>
                </Card>
                <Space h="lg" />
                <Group>
                  <Badge role="primary" size="sm">
                    2
                  </Badge>
                  <Badge role="primary" size="md">
                    2
                  </Badge>
                  <Badge role="primary" size="lg">
                    2
                  </Badge>
                  <Badge role="primary" size="sm">
                    Done
                  </Badge>
                  <Badge role="primary" size="md">
                    Done
                  </Badge>
                  <Badge role="primary" size="lg">
                    Done
                  </Badge>
                  <Badge role="primary" size="sm" iconOnly leftSection={<IconCalendar size={12} />}></Badge>
                  <Badge role="primary" size="md" iconOnly leftSection={<IconCalendar size={12} />}></Badge>
                  <Badge role="primary" size="lg" iconOnly leftSection={<IconCalendar size={16} />}></Badge>
                </Group>
                <Space h="lg" />
                <Group>
                  <Badge role="secondary" size="sm">
                    2
                  </Badge>
                  <Badge role="secondary" size="md">
                    2
                  </Badge>
                  <Badge role="secondary" size="lg">
                    2
                  </Badge>
                  <Badge role="secondary" size="sm">
                    Full
                  </Badge>
                  <Badge role="secondary" size="md">
                    Full
                  </Badge>
                  <Badge role="secondary" size="lg">
                    Full 
                  </Badge>

                  <Badge role="secondary" size="sm" iconOnly leftSection={<IconCalendar size={12} />}></Badge>
                  <Badge role="secondary" size="md" iconOnly leftSection={<IconCalendar size={12} />}></Badge>
                  <Badge role="secondary" size="lg" iconOnly leftSection={<IconCalendar size={16} />}></Badge>
                </Group>
                <Space h="lg" />
                <Group>
                  <Badge role="positive" size="sm">
                    2
                  </Badge>
                  <Badge role="positive" size="md">
                    2
                  </Badge>
                  <Badge role="positive" size="lg">
                    2
                  </Badge>
                  <Badge role="positive" size="sm">
                    Sent
                  </Badge>
                  <Badge role="positive" size="md">
                    Sent
                  </Badge>
                  <Badge role="positive" size="lg">
                    Sent
                  </Badge>

                  <Badge role="positive" size="sm" iconOnly leftSection={<IconCalendar size={12} />}></Badge>
                  <Badge role="positive" size="md" iconOnly leftSection={<IconCalendar size={12} />}></Badge>
                  <Badge role="positive" size="lg" iconOnly leftSection={<IconCalendar size={16} />}></Badge>
                </Group>
                <Space h="lg" />
                <Group>
                  <Badge role="warning" size="sm">
                    2
                  </Badge>
                  <Badge role="warning" size="md">
                    2
                  </Badge>
                  <Badge role="warning" size="lg">
                    2
                  </Badge>
                  <Badge role="warning" size="sm">
                    Low
                  </Badge>
                  <Badge role="warning" size="md">
                    Low
                  </Badge>
                  <Badge role="warning" size="lg">
                    Low
                  </Badge>

                  <Badge role="warning" size="sm" iconOnly leftSection={<IconCalendar size={12} />}></Badge>
                  <Badge role="warning" size="md" iconOnly leftSection={<IconCalendar size={12} />}></Badge>
                  <Badge role="warning" size="lg" iconOnly leftSection={<IconCalendar size={16} />}></Badge>
                </Group>
                <Space h="lg" />
                <Group>
                  <Badge role="info" size="sm">
                    2
                  </Badge>
                  <Badge role="info" size="md">
                    2
                  </Badge>
                  <Badge role="info" size="lg">
                    2
                  </Badge>
                  <Badge role="info" size="sm">
                    New
                  </Badge>
                  <Badge role="info" size="md">
                    New
                  </Badge>
                  <Badge role="info" size="lg">
                    New
                  </Badge>

                  <Badge role="info" size="sm" iconOnly leftSection={<IconCalendar size={12} />}></Badge>
                  <Badge role="info" size="md" iconOnly leftSection={<IconCalendar size={12} />}></Badge>
                  <Badge role="info" size="lg" iconOnly leftSection={<IconCalendar size={16} />}></Badge>
                </Group>
                <Space h="lg" />
                <Group>
                  <Badge role="negative" size="sm">
                    2
                  </Badge>
                  <Badge role="negative" size="md">
                    2
                  </Badge>
                  <Badge role="negative" size="lg">
                    2
                  </Badge>
                  <Badge role="negative" size="sm">
                    Failed
                  </Badge>
                  <Badge role="negative" size="md">
                    Failed
                  </Badge>
                  <Badge role="negative" size="lg">
                    Failed
                  </Badge>

                  <Badge role="negative" size="sm" iconOnly leftSection={<IconCalendar size={12} />}></Badge>
                  <Badge role="negative" size="md" iconOnly leftSection={<IconCalendar size={12} />}></Badge>
                  <Badge role="negative" size="lg" iconOnly leftSection={<IconCalendar size={16} />}></Badge>
                </Group>
                <Space h="lg" />
              </Paper>

              {submittedData && (
                <Card withBorder p="md" mt="xl">
                  <Text>
                    Name: {submittedData.firstName} {submittedData.lastName}
                  </Text>
                  <Text>Address: {submittedData.address}</Text>
                  <Text>City: {submittedData.city}</Text>
                  <Text>State: {submittedData.state}</Text>
                  <Text>ZIP: {submittedData.zip}</Text>
                  <Text>Phone: {submittedData.phone}</Text>
                  <Text>Consent to contact: {submittedData.consent ? 'Yes' : 'No'}</Text>
                </Card>
              )}
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <Box m="xl">
              <Paper withBorder shadow="md" p="sm" pt="md" mt="xl" radius="md">
                <Fieldset mb="md" mt="xs" legend="Personal Information">
                  <form onSubmit={form.onSubmit(handleSubmit)}>
                    <Grid>
                      <Grid.Col span={6}>
                        <TextInput
                          label="First Name"
                          placeholder="Your first name"
                          required
                          value={form.values.firstName}
                          onChange={handleNameChange('firstName')}
                          onBlur={form.getInputProps('firstName').onBlur}
                          error={form.getInputProps('firstName').error}
                        />
                      </Grid.Col>
                      <Grid.Col span={6}>
                        <TextInput
                          label="Last Name"
                          placeholder="Your last name"
                          required
                          value={form.values.lastName}
                          onChange={handleNameChange('lastName')}
                          onBlur={form.getInputProps('lastName').onBlur}
                          error={form.getInputProps('lastName').error}
                        />
                      </Grid.Col>
                    </Grid>
                    <TextInput
                      label="Address"
                      placeholder="Your address"
                      required
                      mt="lg"
                      {...form.getInputProps('address')}
                    />
                    <TextInput
                      label="City"
                      placeholder="Your city"
                      required
                      mt="lg"
                      {...form.getInputProps('city')}
                    />
                    <Grid mt="lg">
                      <Grid.Col span={8}>
                        <Select
                          label="State"
                          placeholder="Your state"
                          data={states}
                          searchable
                          required
                          {...form.getInputProps('state')}
                        />
                      </Grid.Col>
                      <Grid.Col span={4}>
                        <TextInput
                          label="ZIP Code"
                          placeholder="ZIP"
                          required
                          value={form.values.zip}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 5);
                            form.setFieldValue('zip', value);
                          }}
                          onBlur={form.getInputProps('zip').onBlur}
                          error={form.getInputProps('zip').error}
                          maxLength={5}
                          inputMode="numeric"
                        />
                      </Grid.Col>
                    </Grid>

                    <PhoneNumberInput
                      label="Phone Number"
                      name="phone"
                      value={form.values.phone}
                      onChange={form.getInputProps('phone').onChange}
                      mt="lg"
                      size="sm"
                      placeholder="(___) ___-____"
                    />

                    <Checkbox
                      label="I consent to being contacted by text message."
                      mt="lg"
                      {...form.getInputProps('consent', { type: 'checkbox' })}
                    />

                    <Textarea
                      label="Message"
                      placeholder="Your message"
                      minRows={3}
                      mt="lg"
                      {...form.getInputProps('message')}
                      resize="vertical"
                    />

                    <Radio.Group
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
                    </Radio.Group>

                    <Group grow gap="md" mt="xl">
                      <Button variant="default" radius="xl" onClick={() => form.reset()}>
                        Cancel
                      </Button>
                      <Button variant="primary" type="submit" radius="xl">
                        Submit
                      </Button>
                    </Group>
                  </form>
                </Fieldset>
              </Paper>

              {submittedData && (
                <Card withBorder p="md" mt="xl">
                  <Text>
                    Name: {submittedData.firstName} {submittedData.lastName}
                  </Text>
                  <Text>Address: {submittedData.address}</Text>
                  <Text>City: {submittedData.city}</Text>
                  <Text>State: {submittedData.state}</Text>
                  <Text>ZIP: {submittedData.zip}</Text>
                  <Text>Phone: {submittedData.phone}</Text>
                  <Text>Consent to contact: {submittedData.consent ? 'Yes' : 'No'}</Text>
                </Card>
              )}
            </Box>
            <Box>
          <Grid.Col span={12}>
            <Paper withBorder p="md" mt="lg" radius="md">
              <Title order={5} mb="md">ButtonGroup Variants</Title>
              <Stack gap="xl">
                {/* Single Select (Radio) */}
                <Box>
                  <Text mb="xs" fw={700}>Single Select (Radio)</Text>
                  <ButtonGroup value={singleValue} onChange={val => setSingleValue(typeof val === 'string' ? val : '')} size="md" ariaLabel="Single select group">
                    <ButtonGroup.Button value="edit" leftSection={<IconEdit size={18} />}>Edit</ButtonGroup.Button>
                    <ButtonGroup.Button value="photo" leftSection={<IconPhoto size={18} />}>Photo</ButtonGroup.Button>
                    <ButtonGroup.Button value="delete" leftSection={<IconTrash size={18} />}>Delete</ButtonGroup.Button>
                  </ButtonGroup>
                </Box>
                {/* Multi Select (Checkbox) */}
                <Box>
                  <Text mb="xs" fw={700}>Multi Select (Checkbox)</Text>
                  <ButtonGroup value={multiValue} onChange={val => setMultiValue(Array.isArray(val) ? val : [])} multiSelect size="md" ariaLabel="Multi select group">
                    <ButtonGroup.Button value="edit" leftSection={<IconEdit size={18} />}>Edit</ButtonGroup.Button>
                    <ButtonGroup.Button value="photo" leftSection={<IconPhoto size={18} />}>Photo</ButtonGroup.Button>
                    <ButtonGroup.Button value="delete" leftSection={<IconTrash size={18} />}>Delete</ButtonGroup.Button>
                  </ButtonGroup>
                </Box>
                {/* Toolbar (no selection) */}
                <Box>
                  <Text mb="xs" fw={700}>Toolbar (No Selection)</Text>
                  <ButtonGroup toolbar size="md" ariaLabel="Toolbar group">
                    <ButtonGroup.Button value="edit" leftSection={<IconEdit size={18} />} onClick={() => alert('Edit clicked')}>Edit</ButtonGroup.Button>
                    <ButtonGroup.Button value="photo" leftSection={<IconPhoto size={18} />} onClick={() => alert('Photo clicked')}>Photo</ButtonGroup.Button>
                    <ButtonGroup.Button value="delete" leftSection={<IconTrash size={18} />} onClick={() => alert('Delete clicked')}>Delete</ButtonGroup.Button>
                  </ButtonGroup>
                </Box>
                {/* Icon Only */}
                <Box>
                  <Text mb="xs" fw={700}>Icon Only</Text>
                  <Stack gap="xs" align="start">
                    <ButtonGroup size="sm" ariaLabel="Icon only group small">
                      <ButtonGroup.Button value="edit" leftSection={<IconEdit size={16} />} iconOnly />
                      <ButtonGroup.Button value="photo" leftSection={<IconPhoto size={16} />} iconOnly />
                      <ButtonGroup.Button value="delete" leftSection={<IconTrash size={16} />} iconOnly />
                    </ButtonGroup>
                    <ButtonGroup size="md" ariaLabel="Icon only group medium">
                      <ButtonGroup.Button value="edit" leftSection={<IconEdit size={18} />} iconOnly />
                      <ButtonGroup.Button value="photo" leftSection={<IconPhoto size={18} />} iconOnly />
                      <ButtonGroup.Button value="delete" leftSection={<IconTrash size={18} />} iconOnly />
                    </ButtonGroup>
                    <ButtonGroup size="lg" ariaLabel="Icon only group large">
                      <ButtonGroup.Button value="edit" leftSection={<IconEdit size={20} />} iconOnly />
                      <ButtonGroup.Button value="photo" leftSection={<IconPhoto size={20} />} iconOnly />
                      <ButtonGroup.Button value="delete" leftSection={<IconTrash size={20} />} iconOnly />
                    </ButtonGroup>
                  </Stack>
                </Box>
                {/* Disabled State */}
                <Box>
                  <Text mb="xs" fw={700}>Disabled State</Text>
                  <ButtonGroup value={singleValue} onChange={val => setSingleValue(typeof val === 'string' ? val : '')} size="md" ariaLabel="Disabled group">
                    <ButtonGroup.Button value="edit" leftSection={<IconEdit size={18} />}>Edit</ButtonGroup.Button>
                    <ButtonGroup.Button value="photo" leftSection={<IconPhoto size={18} />}>Photo</ButtonGroup.Button>
                    <ButtonGroup.Button value="delete" leftSection={<IconTrash size={18} />} disabled>Delete</ButtonGroup.Button>
                  </ButtonGroup>
                </Box>
                {/* Small Size */}
                <Box>
                  <Text mb="xs" fw={700}>Small Size</Text>
                  <ButtonGroup value={singleValue} onChange={val => setSingleValue(typeof val === 'string' ? val : '')} size="sm" ariaLabel="Small size group">
                    <ButtonGroup.Button value="edit" leftSection={<IconEdit size={16} />}>Edit</ButtonGroup.Button>
                    <ButtonGroup.Button value="photo" leftSection={<IconPhoto size={16} />}>Photo</ButtonGroup.Button>
                    <ButtonGroup.Button value="delete" leftSection={<IconTrash size={16} />}>Delete</ButtonGroup.Button>
                  </ButtonGroup>
                </Box>
                {/* Large Size */}
                <Box>
                  <Text mb="xs" fw={700}>Large Size</Text>
                  <ButtonGroup value={singleValue} onChange={val => setSingleValue(typeof val === 'string' ? val : '')} size="lg" ariaLabel="Large size group">
                    <ButtonGroup.Button value="edit" leftSection={<IconEdit size={20} />}>Edit</ButtonGroup.Button>
                    <ButtonGroup.Button value="photo" leftSection={<IconPhoto size={20} />}>Photo</ButtonGroup.Button>
                    <ButtonGroup.Button value="delete" leftSection={<IconTrash size={20} />}>Delete</ButtonGroup.Button>
                  </ButtonGroup>
                </Box>
              </Stack>
            </Paper>
          </Grid.Col>
            </Box>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={6}>
            <Box m="xl">
              <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <Card>
                  <Center>
                    <Loader color="gray" />
                    <Space w="sm" />
                    <Text c="dimmed">Loading</Text>
                  </Center>
                </Card>
                <Space h="xl" />
                <ProgressBar value={66} />
                <Space h="xl" />
                <SpotModal
                  opened={opened}
                  onClose={close}
                  title="Authentication"
                  centered
                  showFooter={true}
                  showSubheader={true}
                  subheaderText="Please verify your identity below"
                  showPrevious={true}
                  previousLabel="Previous"
                >
                  <Fieldset mb="md" mt="xs" legend="Personal Information">
                    <form onSubmit={form.onSubmit(handleSubmit)}>
                      <Grid>
                        <Grid.Col span={6}>
                          <TextInput
                            label="First Name"
                            data-autofocus
                            placeholder="Your first name"
                            required
                            value={form.values.firstName}
                            onChange={handleNameChange('firstName')}
                            onBlur={form.getInputProps('firstName').onBlur}
                            error={form.getInputProps('firstName').error}
                          />
                        </Grid.Col>
                        <Grid.Col span={6}>
                          <TextInput
                            label="Last Name"
                            placeholder="Your last name"
                            required
                            value={form.values.lastName}
                            onChange={handleNameChange('lastName')}
                            onBlur={form.getInputProps('lastName').onBlur}
                            error={form.getInputProps('lastName').error}
                          />
                        </Grid.Col>
                      </Grid>
                      <TextInput
                        label="Address"
                        placeholder="Your address"
                        required
                        mt="lg"
                        {...form.getInputProps('address')}
                      />
                      <TextInput
                        label="City"
                        placeholder="Your city"
                        required
                        mt="lg"
                        {...form.getInputProps('city')}
                      />
                      <Grid mt="lg">
                        <Grid.Col span={8}>
                          <Select
                            label="State"
                            placeholder="Your state"
                            data={states}
                            searchable
                            required
                            {...form.getInputProps('state')}
                          />
                        </Grid.Col>
                        <Grid.Col span={4}>
                          <TextInput
                            label="ZIP Code"
                            placeholder="ZIP"
                            required
                            value={form.values.zip}
                            onChange={(e) => {
                              const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 5);
                              form.setFieldValue('zip', value);
                            }}
                            onBlur={form.getInputProps('zip').onBlur}
                            error={form.getInputProps('zip').error}
                            maxLength={5}
                            inputMode="numeric"
                          />
                        </Grid.Col>
                      </Grid>
                    </form>
                  </Fieldset>
                </SpotModal>

                <Button variant="outline" fullWidth onClick={open}>
                  Open centered Modal
                </Button>
                <Space h="xl" />
                <Button variant="outline" fullWidth onClick={open}>
                  Open Modal
                </Button>

                <Space h="xl" />
                <Center>
                  <Pagination total={10} mt="xl" />
                </Center>
                <Text mt="xl" c="dimmed" ta="center">
                  OR…
                </Text>
                <Group justify="flex-end">
                  <Text size="sm">{message}</Text>
                  <Pagination
                    total={totalPages}
                    value={page}
                    onChange={setPage}
                    withPages={false}
                  />
                </Group>
              </Paper>
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <Box m="xl">
              <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <Drawer opened={drawerOpened} onClose={closeDrawer} size="240px">
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
                    <NavLink
                      label="Messages"
                      leftSection={<IconMessageCircle size={16} />}
                      weight="heavy"
                    >
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
                </Drawer>

                <Button variant="default" onClick={openDrawer}>
                  Open Drawer
                </Button>
                <Space h="xl" />
                <Tabs radius="none" defaultValue="buttons">
                  <Tabs.List>
                    <Tabs.Tab value="buttons" leftSection={<IconPhoto size={12} />}>
                      Buttons
                    </Tabs.Tab>
                    <Tabs.Tab value="action-icons" leftSection={<IconMessageCircle size={12} />}>
                      Action Icons
                    </Tabs.Tab>
                    <Tabs.Tab value="headings" leftSection={<IconSettings size={12} />}>
                      Headings
                    </Tabs.Tab>
                  </Tabs.List>

                  <Tabs.Panel value="buttons">
                    <Space h="xl" />
                    <Group justify="left" gap="xs" role="presentation">
                      <Button variant="primary" size="xs">
                        Primary
                      </Button>
                      <Button variant="primary" size="sm">
                        Primary
                      </Button>
                      <Button variant="primary" size="md">
                        Primary
                      </Button>
                    </Group>
                    <Space h="md" />
                    <Group justify="left" gap="xs" role="presentation">
                      <Button variant="outline" size="xs">
                        Secondary
                      </Button>
                      <Button variant="outline" size="sm">
                        Secondary
                      </Button>
                      <Button variant="outline" size="md">
                        Secondary
                      </Button>
                    </Group>
                    <Space h="md" />
                    <Group justify="left" gap="xs" role="presentation">
                      <Button variant="default" size="xs">
                        Basic
                      </Button>
                      <Button variant="default" size="sm">
                        Basic
                      </Button>
                      <Button variant="default" size="md">
                        Basic
                      </Button>
                    </Group>
                    <Space h="md" />
                    <Group justify="left" gap="xs" role="presentation">
                      <Button variant="subtle" size="xs">
                        Link
                      </Button>
                      <Button variant="subtle" size="sm">
                        Link
                      </Button>
                      <Button variant="subtle" size="md">
                        Link
                      </Button>
                    </Group>
                  </Tabs.Panel>

                  <Tabs.Panel value="action-icons">
                    <Space h="xl" />
                    <Group justify="left" gap="xs" role="presentation">
                      <ActionIcon variant="filled" aria-label="Send" size="md">
                        <IconSend2 size={16} stroke={1.5} />
                      </ActionIcon>
                      <ActionIcon variant="filled" aria-label="Send" size="lg">
                        <IconSend2 size={20} stroke={1.5} />
                      </ActionIcon>
                      <ActionIcon variant="filled" aria-label="Send" size="xl">
                        <IconSend2 size={28} stroke={1.5} />
                      </ActionIcon>
                    </Group>
                    <Space h="md" />
                    <Group justify="left" gap="xs" role="presentation">
                      <ActionIcon variant="outline" aria-label="Adjustments" size="md">
                        <IconAdjustments size={16} stroke={1.5} />
                      </ActionIcon>
                      <ActionIcon variant="outline" aria-label="Adjustments" size="lg">
                        <IconAdjustments size={20} stroke={1.5} />
                      </ActionIcon>
                      <ActionIcon variant="outline" aria-label="Adjustments" size="xl">
                        <IconAdjustments size={28} stroke={1.5} />
                      </ActionIcon>
                    </Group>
                    <Space h="md" />
                    <Group justify="left" gap="xs" role="presentation">
                      <ActionIcon aria-label="Back" size="md">
                        <IconChevronLeft size={16} stroke={1.5} />
                      </ActionIcon>
                      <ActionIcon aria-label="Back" size="lg">
                        <IconChevronLeft size={20} stroke={1.5} />
                      </ActionIcon>
                      <ActionIcon aria-label="Back" size="xl">
                        <IconChevronLeft size={28} stroke={1.5} />
                      </ActionIcon>
                    </Group>
                    <Space h="md" />
                    <Group justify="left" gap="xs" role="presentation">
                      <ActionIcon variant="subtle" aria-label="Delete" size="md">
                        <IconTrash size={16} stroke={1.5} />
                      </ActionIcon>
                      <ActionIcon variant="subtle" aria-label="Delete" size="lg">
                        <IconTrash size={20} stroke={1.5} />
                      </ActionIcon>
                      <ActionIcon variant="subtle" aria-label="Delete" size="xl">
                        <IconTrash size={28} stroke={1.5} />
                      </ActionIcon>
                    </Group>
                  </Tabs.Panel>

                  <Tabs.Panel value="headings">
                    <Space h="xl" />
                    <Title order={1}>H1 Heading</Title>
                    <Title order={2}>H2 Heading</Title>
                    <Title order={3}>H3 Heading</Title>
                    <Title order={4}>H4 Heading</Title>
                    <Title order={5}>H5 Heading</Title>
                  </Tabs.Panel>
                </Tabs>
              </Paper>
            </Box>
          </Grid.Col>
        </Grid>
      </AppShell.Main>
    </AppShell>
  );
}

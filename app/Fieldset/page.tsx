'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Fieldset,
  Grid,
  Group,
  Notification,
  Select,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import PhoneNumberInput from '@/components/PhoneNumberInput/PhoneNumberInput';
import ComponentsDemoLayout from '../components-demo-layout';

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

export default function FieldsetDemo() {
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
      firstName: (value: string) =>
        value.length < 2 ? 'First name must have at least 2 letters' : null,
      lastName: (value: string) =>
        value.length < 2 ? 'Last name must have at least 2 letters' : null,
      address: (value: string) =>
        value.length < 5 ? 'Address must have at least 5 characters' : null,
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

  return (
    <ComponentsDemoLayout>
      <Title order={2}>Fieldset</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="md">
        <Notification title="New" color="blue" mb="xl" withBorder>
          We don't have a Fieldset today, but we could consider it
        </Notification>
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
      </Box>
    </ComponentsDemoLayout>
  );
}

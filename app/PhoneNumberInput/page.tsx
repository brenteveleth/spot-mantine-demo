import { Alert, Box, Divider, Text, Title } from '@mantine/core';
import PhoneNumberInput from '../../components/PhoneNumberInput/PhoneNumberInput';
import ComponentsDemoLayout from '../components-demo-layout';

export default function PhoneNumberInputDemo() {
  return (
    <ComponentsDemoLayout>
      <Title order={2}>PhoneNumberInput</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="md">
        <PhoneNumberInput
          label="Phone Number"
          placeholder="Enter your phone number"
          mt="lg"
          value={''}
          onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
            throw new Error('Function not implemented.');
          }}
          name={''}
        />
        <Alert title="Note" color="orange" mt="lg">
          PhoneNumberInput needs the Spot icon applied
        </Alert>
      </Box>
    </ComponentsDemoLayout>
  );
}

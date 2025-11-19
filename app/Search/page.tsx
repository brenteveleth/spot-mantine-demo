import { Alert, Box, Space, Text, TextInput, Title } from '@mantine/core';
import { Search } from '../../components/Search/Search';
import ComponentsDemoLayout from '../components-demo-layout';

export default function SearchDemo() {
  return (
    <ComponentsDemoLayout>
      <Title order={2}>Search</Title>
      <Box mt="md">
        <Search placeholder="Search..." w="240px" />
        <Space h="md" />
        <Alert title="Note" color="orange">
          Need more specs on Date Range to add to this component
        </Alert>
      </Box>
    </ComponentsDemoLayout>
  );
}

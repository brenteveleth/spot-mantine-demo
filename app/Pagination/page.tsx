'use client';

import { useState } from 'react';
import { Box, Center, Divider, Group, Pagination, Text, Title } from '@mantine/core';
import ComponentsDemoLayout from '../components-demo-layout';

export default function PaginationDemo() {
  const limit = 10;
  const total = 145;
  const totalPages = Math.ceil(total / limit);
  const [page, setPage] = useState(1);
  const message = `Showing ${limit * (page - 1) + 1} – ${Math.min(total, limit * page)} of ${total}`;
  const [checked, setChecked] = useState(false);

  return (
    <ComponentsDemoLayout>
      <Title order={2}>Pagination</Title>
      <Text size="md" mt="xs" color="dimmed">
        Description text goes here
      </Text>
      <Divider my="lg" mb="xl" />
      <Box mt="md">
        <Center>
          <Pagination total={10} mt="xl" />
        </Center>
        <Text mt="xl" c="dimmed" ta="center">
          OR…
        </Text>
        <Group justify="flex-end">
          <Text size="sm">{message}</Text>
          <Pagination total={totalPages} value={page} onChange={setPage} withPages={false} />
        </Group>
      </Box>
    </ComponentsDemoLayout>
  );
}

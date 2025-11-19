'use client';

import { useEffect, useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import { TextInput, TextInputProps, useMantineColorScheme, useMantineTheme } from '@mantine/core';

export function Search(props: TextInputProps) {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const [iconColor, setIconColor] = useState<string>('');

  useEffect(() => {
    const color =
      colorScheme === 'dark'
        ? theme.colors[theme.primaryColor][3]
        : theme.colors[theme.primaryColor][5];
    setIconColor(color);
  }, [colorScheme, theme]);

  return (
    <TextInput
      radius="pill"
      rightSection={<IconSearch size={18} style={{ color: iconColor || 'inherit' }} />}
      {...props}
    />
  );
}

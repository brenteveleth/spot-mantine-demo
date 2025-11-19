'use client';

import { useEffect, useState } from 'react';
import { Progress, useMantineColorScheme } from '@mantine/core';

export function ProgressBar(props: React.ComponentProps<typeof Progress>) {
  const { colorScheme } = useMantineColorScheme();
  const [barColor, setBarColor] = useState<string>('idexx-blue.6');

  useEffect(() => {
    setBarColor(colorScheme === 'dark' ? 'idexx-blue.4' : 'idexx-blue.6');
  }, [colorScheme]);

  return <Progress {...props} color={barColor} />;
}

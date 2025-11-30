import cx from 'clsx';
import { IconBrightness, IconMoon } from 'spot-icons-proto';
import { ActionIcon, Group, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { useState, useEffect } from 'react';
import classes from './ActionToggle.module.css';

export function ActionToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Group justify="center">
      <ActionIcon
        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
        variant="subtle"
        size="xl"
        radius="md"
        aria-label="Toggle color scheme"
      >
        {mounted &&
          (computedColorScheme === 'light' ? (
            <IconBrightness className={classes.icon} />
          ) : (
            <IconMoon className={classes.icon} />
          ))}
      </ActionIcon>
    </Group>
  );
}

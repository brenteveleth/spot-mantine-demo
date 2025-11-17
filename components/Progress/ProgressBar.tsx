import { Progress, useMantineColorScheme } from '@mantine/core';

export function ProgressBar(props: React.ComponentProps<typeof Progress>) {
  const { colorScheme } = useMantineColorScheme();
  const barColor = colorScheme === 'dark' ? 'idexx-blue.4' : 'idexx-blue.6';

  return <Progress {...props} color={barColor} />;
}
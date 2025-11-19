'use client';

import React from 'react';
import { IndicatorProps, Indicator as MantineIndicator } from '@mantine/core';
import styles from './Indicator.module.css';

type BgColor = 'primary' | 'secondary';

interface CustomIndicatorProps extends IndicatorProps {
  bgColor?: BgColor;
}

export const Indicator: React.FC<CustomIndicatorProps> = ({
  bgColor = 'primary',
  className,
  ...props
}) => {
  return (
    <MantineIndicator
      {...props}
      classNames={{ indicator: bgColor === 'secondary' ? styles.secondary : styles.primary }}
      className={className}
    />
  );
};

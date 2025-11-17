import React from 'react';
import { Badge as MantineBadge, type BadgeProps as MantineBadgeProps } from '@mantine/core';
import styles from './Badge.module.css';

export interface BadgeProps extends MantineBadgeProps {
  role?: 'primary' | 'secondary' | 'positive' | 'negative' | 'warning' | 'info';
  iconOnly?: boolean;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(({ role, iconOnly = false, children, ...props }, ref) => (
  <MantineBadge
    ref={ref}
    {...props}
    data-role={role}
    classNames={{
      root: iconOnly ? `${styles.root} ${styles.iconOnly}` : styles.root,
      label: styles.label,
      section: styles.section,
    }}
  >
    {!iconOnly && children}
  </MantineBadge>
));

Badge.displayName = 'Badge';

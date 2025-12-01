'use client';

import { useState } from 'react';
import { CardProps, CloseButton, Card as MantineCard } from '@mantine/core';

export interface DismissibleCardProps extends CardProps {
  dismissible?: boolean;
  onDismiss?: () => void;
}

export function Card({ children, dismissible = false, onDismiss, ...props }: DismissibleCardProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return (
    <MantineCard {...props} style={{ position: 'relative', ...props.style }}>
      {dismissible && (
        <CloseButton
          onClick={handleDismiss}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            zIndex: 10,
            backgroundColor: 'var(--mantine-color-white)',
            borderRadius: '50%',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        />
      )}
      {children}
    </MantineCard>
  );
}

export default Card;

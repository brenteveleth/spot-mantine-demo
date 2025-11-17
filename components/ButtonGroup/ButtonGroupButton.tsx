import React from 'react';
import { Button as MantineButton, ButtonProps as MantineButtonProps } from '@mantine/core';

export interface ButtonGroupButtonProps extends MantineButtonProps {
  value: string;
  iconOnly?: boolean;
  leftSection?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  /**
   * Indicates if the button is pressed (selected) for ARIA accessibility.
   */
  ariaPressed?: boolean; // Deprecated, use aria-pressed
  size?: 'sm' | 'md' | 'lg';
}

const ButtonGroupButton: React.FC<ButtonGroupButtonProps> = React.memo(({
  iconOnly = false,
  leftSection,
  children,
  className,
  onClick,
  ariaPressed,
  ...props
}) => {
  return (
    <MantineButton
      {...props}
      className={className}
      leftSection={iconOnly ? undefined : leftSection}
      type="button"
      onClick={onClick}
      aria-pressed={ariaPressed}
    >
      {iconOnly ? leftSection : children}
    </MantineButton>
  );
});

// For compositional API
export { ButtonGroupButton, ButtonGroupButton as Button };

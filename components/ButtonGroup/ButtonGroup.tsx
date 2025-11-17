import React, { useState } from 'react';
import styles from './ButtonGroup.module.css';
import { ButtonGroupButton } from './ButtonGroupButton';
import { Button } from './ButtonGroupButton';

export type ButtonConfig = {
  label?: string;
  value: string;
  leftSection?: React.ReactNode;
  iconOnly?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export type ButtonGroupProps = {
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (value: string | string[]) => void;
  multiSelect?: boolean;
  toolbar?: boolean;
  size?: 'sm' | 'md' | 'lg';
  ariaLabel?: string;
  className?: string;
  showDividers?: boolean;
  children: React.ReactNode;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  value,
  defaultValue,
  onChange,
  multiSelect = false,
  toolbar = false,
  size = 'md',
  ariaLabel,
  className,
  showDividers = true,
  children,
}) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<string | string[]>(defaultValue ?? (multiSelect ? [] : ''));
  const selected = isControlled ? value : internalValue;

  // ARIA role
  const role = toolbar ? 'toolbar' : multiSelect ? 'group' : 'radiogroup';

  // Compose children, inject selection logic
  const childArray = React.Children.toArray(children);
  return (
    <div
      className={`${styles.group} ${styles[size]}${className ? ' ' + className : ''}`}
      role={role}
      aria-label={ariaLabel}
    >
      {childArray.map((child, idx) => {
        if (!React.isValidElement(child)) return null;
        const element = child as React.ReactElement<any>;
        const valueProp = element.props.value;
        const isSelected = multiSelect
          ? Array.isArray(selected) && selected.includes(valueProp)
          : selected === valueProp;
        return React.cloneElement(element, {
          size,
          ariaPressed: isSelected,
          className: `${styles.button}${isSelected ? ' ' + styles.selected : ''}${element.props.iconOnly ? ' ' + styles.iconOnly : ''}`,
          onClick: () => {
            if (element.props.disabled) return;
            if (toolbar) {
              element.props.onClick?.();
              return;
            }
            let newValue;
            if (multiSelect) {
              const arr = Array.isArray(selected) ? [...selected] : [];
              if (arr.includes(valueProp)) {
                newValue = arr.filter(v => v !== valueProp);
              } else {
                newValue = [...arr, valueProp];
              }
            } else {
              newValue = valueProp;
            }
            if (!isControlled) setInternalValue(newValue);
            onChange?.(newValue);
          },
        });
      })}
    </div>
  );
};

const ExportedButtonGroup = Object.assign(ButtonGroup, { Button });
export default ExportedButtonGroup;
export { ExportedButtonGroup as ButtonGroup };

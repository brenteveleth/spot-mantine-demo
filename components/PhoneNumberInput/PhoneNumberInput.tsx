import { IMaskInput } from 'react-imask';
import { Input, MantineSpacing, InputProps } from '@mantine/core';
import styles from './PhoneNumberInput.module.css';

type PhoneNumberInputProps = {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  mt?: MantineSpacing;
  size?: InputProps['size'];
  radius?: InputProps['radius'];
  required?: boolean;
  error?: React.ReactNode;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
};

export default function PhoneNumberInput({
  label,
  value,
  onChange,
  name,
  mt,
  size = 'md',
  radius = 'md',
  required,
  error,
  onBlur,
  placeholder = 'Your phone number',
}: PhoneNumberInputProps) {
  const handleAccept = (val: string) => {
    const event = {
      currentTarget: {
        value: val,
        name,
      },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange(event);
  };

  return (
    <Input.Wrapper
      label={label}
      error={error}
      required={required}
      mt={mt}
      size={size}
      styles={{
        label: {
          fontSize: '0.875rem', // Mantine 'sm' size
        },
      }}
    >
      <Input
        component={IMaskInput}
        mask="(000) 000-0000"
        defaultValue={String(value ?? '')}
        name={name}
        size={size}
        radius="sm"
        onAccept={handleAccept}
        onBlur={onBlur}
        placeholder={placeholder}
        classNames={{ input: styles.phoneInput }}
      />
    </Input.Wrapper>
  );
}
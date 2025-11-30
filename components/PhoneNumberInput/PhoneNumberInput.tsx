import React, { forwardRef, useState } from 'react';
import { IMaskInput } from 'react-imask';
import { TextInput, TextInputProps } from '@mantine/core';

export interface PhoneNumberInputProps extends TextInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Create a wrapper component that integrates react-imask and forwards the ref.
const IMaskPhoneInput = forwardRef<HTMLInputElement, any>((props, ref) => {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      inputRef={ref}
      // onAccept is called when the value is changed.
      // We build a synthetic event object to match what Mantine's onChange expects.
      onAccept={(_value, mask) => onChange({ target: { value: mask.masked.value } })}
      mask="(000) 000-0000"
    />
  );
});

IMaskPhoneInput.displayName = 'IMaskPhoneInput';

export default function PhoneNumberInput({
  value,
  onChange,
  onBlur,
  ...props
}: PhoneNumberInputProps) {
  // Defensive check: If the parent component passed the whole event object as the value,
  // extract the actual string value from it.
  const stringValue =
    typeof value === 'object' && value !== null && (value as any).target
      ? (value as any).target.value
      : value;

  const [internalError, setInternalError] = useState<React.ReactNode | undefined>(undefined);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    // Validate on blur
    const unmasked = (event.currentTarget.value || '').replace(/\D/g, '');
    if (unmasked.length > 0 && unmasked.length < 10) {
      setInternalError('Enter a valid 10-digit phone number');
    } else {
      setInternalError(undefined);
    }
    // Forward the onBlur event if a handler is provided
    onBlur?.(event);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Clear the internal error state when the user types
    if (internalError) {
      setInternalError(undefined);
    }
    // Forward the onChange event
    onChange(event);
  };

  return (
    <TextInput
      {...props}
      value={stringValue as string}
      onChange={handleChange}
      onBlur={handleBlur}
      error={props.error ?? internalError}
      inputMode="numeric"
      aria-live="polite"
      component={IMaskPhoneInput}
    />
  );
}

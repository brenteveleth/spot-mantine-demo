'use client';

import { useEffect, useState } from 'react';
import { IconHide, IconShow } from 'spot-icons-proto';
import { PasswordInput } from '@mantine/core';

export default function PasswordInputComponent(props: React.ComponentProps<typeof PasswordInput>) {
  //   const [showIcon, setShowIcon] = useState<React.ReactNode>(<IconShow />);
  //   const [hideIcon, setHideIcon] = useState<React.ReactNode>(<IconHide />);

  //   useEffect(() => {
  //     setShowIcon(<IconShow />);
  //     setHideIcon(<IconHide />);
  //   }, []);
  const VisibilityToggleIcon = ({ reveal }: { reveal: boolean }) =>
    reveal ? (
      <IconHide style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
    ) : (
      <IconShow style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
    );

  return (
    <PasswordInput
      {...props}
      visibilityToggleIcon={VisibilityToggleIcon}
      //   visibilityToggleIcon={({ reveal }) => <VisibilityToggleIcon reveal={reveal} />}
    />
  );
}

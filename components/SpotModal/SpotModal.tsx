import React from 'react';
import { Button, Group, Modal, Text } from '@mantine/core';
import styles from './SpotModal.module.css';

export type SpotModalProps = React.ComponentProps<typeof Modal> & {
  showFooter?: boolean;
  onPrimary?: () => void;
  onSecondary?: () => void;
  submitLabel?: string;
  cancelLabel?: string;
  showSubheader?: boolean;
  subheaderText?: string;
  showPrevious?: boolean;
  previousLabel?: string;
  onPrevious?: () => void;
};

export function SpotModal({
  showFooter = false,
  onPrimary,
  onSecondary,
  submitLabel = 'Submit',
  cancelLabel = 'Cancel',
  showSubheader = false,
  subheaderText = '',
  showPrevious = false,
  previousLabel = 'Previous',
  onPrevious,
  children,
  ...modalProps
}: SpotModalProps) {
  return (
    <Modal {...modalProps}>
      {showSubheader && (
        <Text size="sm" fw={600} mb="xs" style={{ lineHeight: 1 }}>
          {subheaderText}
        </Text>
      )}
      {/* Modal title will be rendered by Mantine's Modal via modalProps.title */}
      <div className={showFooter ? styles.content : styles.contentNoFooter}>{children}</div>
      {showFooter && (
        <div className={styles.footer}>
          <div className={styles.left}>
            <Button variant="subtle" radius="xl" onClick={modalProps.onClose}>
              {cancelLabel}
            </Button>
          </div>
          <div className={styles.right}>
            {showPrevious && (
              <Button
                variant="outline"
                radius="xl"
                onClick={onPrevious}
                style={{ marginRight: 'var(--mantine-spacing-md)' }}
              >
                {previousLabel}
              </Button>
            )}
            <Button variant="primary" type="submit" radius="xl">
              {submitLabel}
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}

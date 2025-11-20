import '@mantine/core/styles.css';

import React, { useState } from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../theme'; // Adjust path if needed

export const decorators = [
  (Story: any, context: any) => {
    const scheme = (context.globals.theme || 'light') as 'light' | 'dark';
    return (
      <MantineProvider theme={theme} forceColorScheme={scheme}>
        <ColorSchemeScript />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
          }}
        >
          <Story />
        </div>
      </MantineProvider>
    );
  },
];

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Mantine color scheme',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
    },
  },
};

// --- CONTEXT ---
// Prototype for Spot Mantine Test. Defines a custom Mantine theme with specific colors, typography, and component styles.
// When styling components, prefer using Mantine's `extend` API to ensure consistency and maintainability.
// Theme should be modular and self-contained, built with dynamic theme switching and adaptability to light/dark modes in mind.// Avoid static overrides; use a resolver function to set CSS variables based on the current theme.

'use client';

import React from 'react';
import { IconShow, IconHide } from 'spot-icons-proto';
import { IconCircleFilled } from '@tabler/icons-react';
import {
  ActionIcon,
  Badge,
  Button,
  Checkbox,
  Chip,
  createTheme,
  Drawer,
  Input,
  MantineTheme,
  NavLink,
  Pagination,
  PasswordInput,
  Progress,
  Radio,
  SegmentedControl,
  Switch,
  Tabs,
  Text,
  Tooltip,
} from '@mantine/core';
import '@mantine/core/styles.css';
import ActionIconClasses from './components/ActionIcon/ActionIcon.module.css';
import badgeClasses from './components/Badge/Badge.module.css';
import buttonClasses from './components/Button/Button.module.css';
import chipClasses from './components/Chip/Chip.module.css';
import drawerClasses from './components/Drawer/Drawer.module.css';
import inputClasses from './components/Input.module.css';
import navLinkClasses from './components/NavLink.module.css';
import paginationClasses from './components/Pagination.module.css';
import progressClasses from './components/Progress/Progress.module.css';
import radioClasses from './components/Radio.module.css';
import tabsClasses from './components/Tabs.module.css';

declare module '@mantine/core' {
  export interface TextProps {
    variant?: 'tertiary-eyebrow' | 'secondary' | 'tertiary';
  }
  export interface NavLinkProps {
    variant?: 'light' | 'filled' | 'subtle' | 'section';
    weight?: 'default' | 'heavy';
  }
  export interface BadgeProps {
    type?: 'primary' | 'secondary' | 'positive' | 'negative' | 'warning' | 'info';
  }
}

export const theme = createTheme({

  // Colors
  primaryColor: 'idexx-blue',
  primaryShade: 6,
  white: '#fff',
  black: '#0F1114',
  colors: {
    'idexx-blue': [
      '#E2F5FF', // 0 Lightest
      '#CDEDFF', // 1
      '#9CDCFF', // 2
      '#62B3F9', // 3
      '#3E9AF5', // 4
      '#0b76f0', // 5
      '#0969D9', // 6
      '#075BC3', // 7
      '#0347A1', // 8
      '#00337f', // 9 Darkest
    ],
    cadet: [
      '#bccfe3', // 0 Lightest
      '#87acd3', // 1
      '#538ac4', // 2
      '#35679c', // 3
      '#284E76', // 4 Secondary hover
      '#224569', // 5 Primary hover
      '#173756', // 6
      '#0f2941', // 7
      '#071b2c', // 8
      '#010d18', // 9 Darkest
    ],
    dark: [
      '#D0D1D0', // 0 Lightest
      '#BCBDBC', // 1
      '#8E9093', // 2
      '#86898D', // 3
      '#717479', // 4
      '#5D6066', // 5
      '#3F434A', // 6
      '#31353D', // 7
      '#25282E', // 8
      '#0F1114', // 9 Darkest
    ],
    gray: [
      '#F5F5F5', // 0 Lightest
      '#F0F0F0', // 1
      '#E2E2E2', // 2
      '#D0D1D0', // 3
      '#BCBDBC', // 4
      '#A9AAAA', // 5
      '#9A9B9C', // 6
      '#5D6066', // 7
      '#3F434A', // 8
      '#31353D', // 9 Darkest
    ],
    yellow: [
      '#FEFBE6', // 0 Lightest
      '#FDF9D3', // 1
      '#FBF5BF', // 2
      '#FAF2A1', // 3
      '#F8ED81', // 4
      '#F6E962', // 5
      '#E7D235', // 6
      '#D5B910', // 7
      '#BD9700', // 8
      '#AD7900', // 9 Darkest
    ],
    green: [
      '#E9F7EA', // 0 Lightest
      '#DAEFDB', // 1
      '#C6E6C7', // 2
      '#A7D8A9', // 3
      '#81C784', // 4
      '#66BB6A', // 5
      '#43A047', // 6
      '#388E3C', // 7
      '#2E7D32', // 8
      '#156019', // 9 Darkest
    ],
    red: [
      '#FFF5F5', // 0 Lightest
      '#FEEEF0', // 1
      '#FCDEDD', // 2
      '#F8C7C6', // 3
      '#F4A9A7', // 4
      '#F5767D', // 5
      '#EA2839', // 6
      '#E31527', // 7
      '#D30E1F', // 8
      '#AE0C1A', // 9 Darkest
    ],
    blue: [
      '#E7F9FF', // 0 Lightest
      '#D8F5FF', // 1
      '#C5F0FF', // 2
      '#99E5FF', // 3
      '#5DDCFF', // 4
      '#03CEFF', // 5
      '#00B4E5', // 6
      '#0E97BF', // 7
      '#19617F', // 8
      '#0E455B', // 9 Darkest
    ],
  },


  // Radius //
  radius: {
    pill: '9999px',
  },


  // Typography //
  fontFamily: 'Roboto, sans-serif',
  fontSizes: {
    xs: '0.75rem',
    sm: '0.84375rem',
    md: '15px', // Set the base font size to 15px
    lg: '1.125rem',
    xl: '1.3125rem',
  },
  lineHeights: {
    xs: '1.5',
    sm: '1.4075',
    md: '1.6',
    lg: '1.5',
    xl: '1.3334',
  },
  headings: {
    fontFamily: 'Sora, sans-serif',
    sizes: {
      h1: { fontSize: '2.625rem', fontWeight: '300', lineHeight: '1.262' },
      h2: { fontSize: '2.125rem', fontWeight: '300', lineHeight: '1.353' },
      h3: { fontSize: '1.625rem', fontWeight: '400', lineHeight: '1.4615' },
      h4: { fontSize: '1.125rem', fontWeight: '700', lineHeight: '1.55556' },
      h5: { fontSize: '1.125rem', fontWeight: '400', lineHeight: '1.55556' },
    },
  },

  // Component styles
  components: {

    // ActionIcon component styles //
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        radius: 'pill',
      },
      classNames: {
        root: ActionIconClasses.actionIcon,
      },
    }),

    // Badge component styles //
    Badge: Badge.extend({
      defaultProps: {
        radius: 'sm',
      },
      classNames: {
        root: badgeClasses.root,
        label: badgeClasses.label,
        section: badgeClasses.section,
      },
    }),

    // Button component styles //
    Button: Button.extend({
      defaultProps: {
        radius: 'pill',
        variant: 'default',
        size: 'md',
      },
      styles: (theme, params) => ({
        root: {
          fontSize:
            params.size === 'xs'
              ? theme.fontSizes.xs
              : params.size === 'sm'
                ? theme.fontSizes.sm
                : params.size === 'md'
                  ? theme.fontSizes.md
                  : params.size === 'lg'
                    ? theme.fontSizes.lg
                    : theme.fontSizes.xl,
        },
      }),
      classNames: {
        root: buttonClasses.button,
      },
    }),

    //  Checkbox component styles //
    Checkbox: Checkbox.extend({
      defaultProps: {
        radius: 'xs',
      },
    }),

    // Chip component styles //
    Chip: Chip.extend({
      defaultProps: {
        radius: 'md',
      },
      classNames: {
        label: chipClasses.chipPoops,
        checkIcon: chipClasses.chipIcon,
      },
    }),

    // Drawer component styles //
    Drawer: Drawer.extend({
      classNames: {
        body: drawerClasses.body,
      },
    }),

    // Input component styles //
    Input: Input.extend({
      classNames: {
        input: inputClasses.input,
      },
    }),

    // NavLink component styles //
    NavLink: NavLink.extend({
      defaultProps: {
        variant: 'light',
      },
      classNames: {
        root: navLinkClasses.root,
        label: navLinkClasses.label,
        section: navLinkClasses.section,
      },
      styles: (theme, props) => {
        let styles: any = {};

        if (props.variant === 'section') {
          styles = {
            root: {
              cursor: 'default',
              pointerEvents: 'none',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            },
            label: {
              fontSize: '0.75rem', // 12px
              lineHeight: '1.5', // 18px line height
              fontWeight: 700,
              textTransform: 'uppercase',
              fontFamily: 'Roboto, sans-serif',
            },
          };
        }

        if (props.weight === 'heavy') {
          styles.label = {
            ...styles.label,
            fontWeight: 700,
            fontFamily: 'Roboto, sans-serif',
          };
        }

        return styles;
      },
    }),

    // Pagination component styles //
    Pagination: Pagination.extend({
      defaultProps: {
        radius: 'xl',
        size: 'md',
      },
      classNames: {
        control: paginationClasses.control,
        root: paginationClasses.root,
      },
    }),

    // PasswordInput component styles //
    PasswordInput: PasswordInput.extend({
      classNames: {
        innerInput: inputClasses.input,
      },
    }),

    // Progress component styles //
    Progress: Progress.extend({
      defaultProps: {
        radius: 'none',
        size: 'lg',
        color: 'violet',
      },
      classNames: {
        root: progressClasses.root,
      },
    }),

    // Radio component styles //
    Radio: Radio.extend({
      defaultProps: {
        variant: 'outline',
      },
      classNames: {
        icon: radioClasses.icon,
        radio: radioClasses.radio,
      },
    }),

    // SegmentedControl component styles //
    SegmentedControl: SegmentedControl.extend({
      defaultProps: {
        radius: 'pill',
        withItemsBorders: false,
        size: 'md',
      },
    }),

    // Switch component styles //
    Switch: Switch.extend({
      defaultProps: {
        color: 'green',
        thumbIcon: React.createElement(IconCircleFilled, {
          size: 12,
          color: 'var(--mantine-color-white)',
        }),
      },
    }),

    // Tabs component styles //
    Tabs: Tabs.extend({
      classNames: {
        tab: tabsClasses.tabsTab,
      },
    }),

    // Text component styles //
    Text: Text.extend({
      vars: (theme, props) => {
        if (props.variant === 'tertiary-eyebrow') {
          return {
            root: {
              '--text-fz': '0.75rem', // 12px
              '--text-lh': '1.5', // 18px line height (18/12 = 1.5)
            },
          };
        }
        if (props.variant === 'secondary') {
          return {
            root: {
              '--text-fz': '0.844rem', // 13.5px
              '--text-lh': '1.407', // 19px line height (19/13.5 = 1.407)
            },
          };
        }
        if (props.variant === 'tertiary') {
          return {
            root: {
              '--text-fz': '0.75rem', // 12px
              '--text-lh': '1.5', // 18px line height (18/12 = 1.5)
            },
          };
        }
        return {
          root: {},
        };
      },
      styles: (theme, props) => {
        if (props.variant === 'tertiary-eyebrow') {
          return {
            root: {
              fontWeight: 700,
              textTransform: 'uppercase',
              fontFamily: 'Roboto, sans-serif',
            },
          };
        }
        if (props.variant === 'secondary') {
          return {
            root: {
              fontFamily: 'Roboto, sans-serif',
            },
          };
        }
        if (props.variant === 'tertiary') {
          return {
            root: {
              fontFamily: 'Roboto, sans-serif',
            },
          };
        }
        return {};
      },
    }),

    // Tooltip component styles //
    Tooltip: Tooltip.extend({
      defaultProps: {
        radius: 'md',
        color: 'dark',
        withArrow: false,
      },
    }),
  },
});

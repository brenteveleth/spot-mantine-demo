'use client';
import React from 'react';

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

import {
  createTheme,
  MantineTheme,
  Pagination,
  PasswordInput,
  NavLink,
  Badge,
  Input,
  Radio,
  Button,
  Switch,
  Checkbox,
  Chip,
  Progress,
  ActionIcon,
  Tabs,
  Text,
  Drawer
} from '@mantine/core';
import inputClasses from './components/Input.module.css';
import buttonClasses from './components/Button.module.css';
import radioClasses from './components/Radio.module.css';
import paginationClasses from './components/Pagination.module.css';
import progressClasses from './components/Progress/Progress.module.css';
import actionIconClasses from './components/ActionIcon.module.css';
import tabsClasses from './components/Tabs.module.css';
import chipClasses from './components/Chip.module.css';
import navLinkClasses from './components/NavLink.module.css';
import badgeClasses from './components/Badge/Badge.module.css';
import drawerClasses from './components/Drawer.module.css';

import { IconCircleFilled } from '@tabler/icons-react';

export const theme = createTheme({
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
    'cadet': [
      '#bccfe3', // 0 Lightest
      '#87acd3', // 1
      '#538ac4', // 2
      '#35679c', // 3
      '#284E76', // 4 Secondary hover
      '#224569', // 5 Primary hover
      '#173756', // 6
      '#0f2941', // 7
      '#071b2c', // 8
      '#010d18'  // 9 Darkest
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

  radius: {
    pill: '9999',
  },

  fontFamily: 'Roboto, sans-serif',
  // scale: 1.06667,

  lineHeights: {
    xs: '1.5',
    sm: '1.4',
    md: '1.6',
  },

  headings: {
    fontFamily: 'Sora, sans-serif',
    sizes: {
      h1: { fontSize: '2.625rem', fontWeight: '300', lineHeight: '1.2' },
      h2: { fontSize: '2.125rem', fontWeight: '300', lineHeight: '1.25' },
      h3: { fontSize: '1.625rem', fontWeight: '400', lineHeight: '1.3' },
      h4: { fontSize: '1.125rem', fontWeight: '600', lineHeight: '1.35' },
      h5: { fontSize: '1.125rem', fontWeight: '400', lineHeight: '1.4' },
    },
  },

  components: {
    Drawer: Drawer.extend({
      classNames: {
        body: drawerClasses.body,
      },
    }),
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
    Input: Input.extend({
      classNames: {
        input: inputClasses.input,
      },
    }),
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        radius: 'xl',
        size: 'lg',
        variant: 'default',
      },
      classNames: {
        root: actionIconClasses.actionIcon,
      },
    }),
    PasswordInput: PasswordInput.extend({
      classNames: {
        innerInput: inputClasses.input,
      },
    }),
    Button: Button.extend({
      defaultProps: {
        radius: 'xl',
        variant: 'default',
      },
      classNames: {
        root: buttonClasses.button,
      },
    }),
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
    Chip: Chip.extend({
      defaultProps: {
        radius: 'md',
      },
      classNames: {
        label: chipClasses.chipPoops,
        checkIcon: chipClasses.chipIcon,
      },
    }),
    Radio: Radio.extend({
      defaultProps: {
        variant: 'outline',
      },
      classNames: {
        icon: radioClasses.icon,
        radio: radioClasses.radio,
      },
    }),
    Switch: Switch.extend({
      defaultProps: {
        color: 'green',
        thumbIcon: React.createElement(IconCircleFilled, { size: 12, color: "var(--mantine-color-white)" }),
      },
    }),
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
    Checkbox: Checkbox.extend({
      defaultProps: {
        radius: 'xs',
      },
    }),
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
    Tabs: Tabs.extend({
      classNames: {
        tab: tabsClasses.tabsTab,
      },
    }),
  },
});
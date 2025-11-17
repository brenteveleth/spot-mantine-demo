import React from 'react';
import { Tabs as MantineTabs, TabsProps } from '@mantine/core';

interface CustomTabsProps extends TabsProps {
  showBaseline?: boolean;
}

type TabsType = React.FC<CustomTabsProps> & {
  List: typeof MantineTabs.List;
  Tab: typeof MantineTabs.Tab;
  Panel: typeof MantineTabs.Panel;
};

const TabsComponent: TabsType = (({ showBaseline = true, children, ...props }) => {
  return (
    <div style={{ position: 'relative' }}>
      <MantineTabs {...props}>{children}</MantineTabs>
      {showBaseline && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 1,
            background: 'var(--mantine-color-border, #e9ecef)',
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}) as TabsType;

TabsComponent.List = MantineTabs.List;
TabsComponent.Tab = MantineTabs.Tab;
TabsComponent.Panel = MantineTabs.Panel;

export const Tabs = TabsComponent;

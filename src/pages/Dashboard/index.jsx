import * as React from 'react';
import { Tab } from '@alifd/next';
import ArrayItemsDemo from './components/ArrayItemsDemo';
import CustomArrayItemsDemo from './components/CustomArrayItemsDemo';


const Dashboard = () => {
  return (
    <Tab contentStyle={{ paddingTop: 30 }}>
      <Tab.Item key="ArrayItemsDemo" title="ArrayItemsDemo">
        <ArrayItemsDemo />
      </Tab.Item>
      <Tab.Item key="CustomArrayItemsDemo" title="CustomArrayItemsDemo">
        <CustomArrayItemsDemo />
      </Tab.Item>
    </Tab>
  );
};

export default Dashboard;

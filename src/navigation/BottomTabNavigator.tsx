import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';

import {TabsUi} from './BottomNavComponents/TabsUi';
import {Dashboard} from '../screens/dashboard/Dashboard';
import {Calendar} from '../screens/calendar/Calendar';
import {Panel} from '../screens/panel/Panel';
import {Chat} from '../screens/chat/Chat';
import {BottomTabRoutes} from './types';

const Tab = createBottomTabNavigator<BottomTabRoutes>();

const EmptyComponent = () => null;
const tabs = [
  {
    name: 'Dashboard',
  },
  {name: 'Calendar'},
  {name: 'RequestModal'},
  {name: 'Panel'},
  {name: 'Chat'},
];
export const BottomTabNavigator = () => (
  <>
    <SafeAreaView style={styles.container}>
      <Tab.Navigator tabBar={props => <TabsUi {...{tabs, ...props}} />}>
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="RequestModal" component={EmptyComponent} />
        <Tab.Screen name="Panel" component={Panel} />
        <Tab.Screen name="Chat" component={Chat} />
      </Tab.Navigator>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

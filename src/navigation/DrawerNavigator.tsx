import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {About} from '../screens/about/About';
import {Settings} from '../screens/settings/Settings';
import {DrawerRoutes} from './types';
import {CustomDrawerContent} from './CustomDrawerContent';
import {BottomTabNavigator as Home} from './BottomTabNavigator';

const Drawer = createDrawerNavigator<DrawerRoutes>();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} options={{title: 'Home'}} />
      <Drawer.Screen
        name="About"
        component={About}
        options={{title: 'About', swipeEnabled: false}}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{title: 'Settings', swipeEnabled: false}}
      />
    </Drawer.Navigator>
  );
};

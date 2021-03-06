import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {Box} from '../utils/theme';
import {RequestVacation} from '../screens/requestVacation/RequestVacation';
import {DrawerNavigator} from './DrawerNavigator';
import {ModalRoutes} from './types';

const AppStack = createStackNavigator<ModalRoutes>();

export const ModalNavigation = () => (
  <Box flex={1}>
    <AppStack.Navigator
      mode="modal"
      headerMode="none"
      initialRouteName="DrawerNavigator"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        animationEnabled: true,
      }}>
      <AppStack.Screen name="RequestVacation" component={RequestVacation} />
      <AppStack.Screen name="DrawerNavigator" component={DrawerNavigator} />
    </AppStack.Navigator>
  </Box>
);

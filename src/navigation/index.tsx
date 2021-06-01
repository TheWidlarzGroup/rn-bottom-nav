import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {ModalNavigation} from './ModalNavigation';

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <ModalNavigation />
    </NavigationContainer>
  );
};

import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import {Box, Text} from '../utils/theme';

export const CustomDrawerContent: FC<DrawerContentComponentProps> = props => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}>
      <Box>
        <DrawerItemList {...props} />
      </Box>

      <Box marginBottom="l">
        <TouchableOpacity>
          <Text>Logout</Text>
        </TouchableOpacity>
      </Box>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

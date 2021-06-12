import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import {Box, Text, theme} from '../utils/theme';

export const CustomDrawerContent: FC<DrawerContentComponentProps> = props => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}>
      <Box>
        <DrawerItemList {...props} />
      </Box>

      <Box marginBottom="l" marginHorizontal="xl">
        <TouchableOpacity style={styles.logoutButton}>
          <Text variant="buttonText1">Logout</Text>
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
  logoutButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.s,
    borderRadius: theme.borderRadii.xxl,
  },
});

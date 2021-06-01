import React, {FC, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

import {SafeAreaWrapper} from '../../components/SafeAreaWrapper';
import {DrawerNavigationType} from '../../navigation/types';
import {Box, Text} from '../../utils/theme';

export const Settings: FC = () => {
  const navigation = useNavigation<DrawerNavigationType<'Settings'>>();

  const handleGoBack = useCallback(() => {
    navigation.navigate('Home', {
      screen: 'Dashboard',
    });
  }, [navigation]);

  return (
    <SafeAreaWrapper>
      <TouchableOpacity onPress={handleGoBack} style={{marginLeft: 20}}>
        <Text>Go Back</Text>
      </TouchableOpacity>

      <Box margin="xl">
        <Text variant="title1">Welcome in Settings</Text>
      </Box>
    </SafeAreaWrapper>
  );
};

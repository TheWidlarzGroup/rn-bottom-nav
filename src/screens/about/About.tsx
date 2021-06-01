import React, {FC, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

import {Box, Text} from '../../utils/theme';
import {SafeAreaWrapper} from '../../components/SafeAreaWrapper';
import {AppNavigationType} from '../../navigation/types';

export const About: FC = () => {
  const navigation = useNavigation<AppNavigationType<'DrawerNavigator'>>();

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
        <Text variant="title1">Welcome in About</Text>
      </Box>
    </SafeAreaWrapper>
  );
};

import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {AddButton} from '../../components/AddButton';
import {Box, theme} from '../../utils/theme';
import {ModalNavigationType} from '../types';
import {BorderlessButton} from 'react-native-gesture-handler';
import {getBottomTabIcon} from '../../utils/getBottomTabIcon';

type TabsHandlerProps = {
  tabs: {
    name: string;
  }[];
  tabWidth: number;
  activeTabIndex: number;
};

export const TabsHandler: FC<TabsHandlerProps> = ({
  tabs,
  tabWidth,
  activeTabIndex,
}) => {
  const navigation = useNavigation<ModalNavigationType<'DrawerNavigator'>>();

  return (
    <Box flexDirection="row">
      {tabs.map((tab: any, key: number) => {
        const onPress = () => {
          if (tab.name === 'RequestModal') {
            navigation.navigate('RequestVacation');
          } else {
            navigation.navigate(tab.name);
          }
        };
        if (tab.name === 'RequestModal') {
          return (
            <Box key="logo" width={tabWidth} backgroundColor="transparent">
              <AddButton onPress={onPress} />
            </Box>
          );
        }

        return (
          <Box
            {...{key}}
            width={tabWidth}
            height={45}
            marginTop="lplus"
            alignItems="center"
            flexDirection="column"
            backgroundColor="white">
            <BorderlessButton onPress={onPress} style={styles.button}>
              {getBottomTabIcon(
                tab.name,
                tabs[activeTabIndex].name,
                theme.colors.black,
                theme.colors.bottomBarIcons,
              )}
            </BorderlessButton>
          </Box>
        );
      })}
    </Box>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingTop: theme.spacing.xm,
    paddingBottom: theme.spacing.s,
    paddingHorizontal: theme.spacing.m,
  },
});

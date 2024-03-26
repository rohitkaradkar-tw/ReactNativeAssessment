import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { useThemeContext } from '../theme/AppTheme';
import { StackScreens } from './Screens';
import { ScreenNavigator } from './ScreenNavigation';
import { InputNameScreen } from '../features/welcome/InputNameScreen';

const RootStack = createNativeStackNavigator();

export const RootNavigation = () => {
  const { theme } = useThemeContext();

  return (
    <NavigationContainer theme={theme}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name={StackScreens.WELCOME}
          component={InputNameScreen}
        />
        <RootStack.Screen
          name={StackScreens.CONTENT}
          component={ScreenNavigator}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

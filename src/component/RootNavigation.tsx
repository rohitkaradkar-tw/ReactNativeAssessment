import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../features/welcome/WelcomeScreen';
import InputNameScreen from '../features/welcome/InputNameScreen';
import Main from '../features/main/Main';
import { useThemeContext } from '../theme/AppTheme';

export type RootStackParamList = {
  InitialInputName: undefined;
  InputName: undefined;
  Welcome: { username: string };
  Loading: undefined;
  Main: undefined;
};

export const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const { theme } = useThemeContext();

  return (
    <NavigationContainer theme={theme}>
      <RootStack.Navigator>
        {/* <>
          {!props.state.userName ? (
            <>
              <RootStack.Screen
                name="InitialInputName"
                component={InputNameScreen}
                options={{ title: 'Login' }}
              />
              <RootStack.Screen name="Welcome" component={WelcomeScreen} />
            </>
          ) : (
            <RootStack.Screen
              name="Welcome"
              component={WelcomeScreen}
              initialParams={{ username: props.state.userName }}
              options={{ title: 'Welcome to Amazon' }}
            />
          )} */}
        <RootStack.Screen
          name="Main"
          component={Main}
          options={{ title: 'Amazon' }}
        />
        <RootStack.Screen
          name="InputName"
          component={InputNameScreen}
          options={{ title: 'Edit Name' }}
        />
        {/* </> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

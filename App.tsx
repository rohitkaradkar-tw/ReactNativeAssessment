import React from 'react'
import InputNameScreen from './src/features/welcome/InputNameScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/features/welcome/WelcomeScreen';

type RootStackParamList = {
  InputName: undefined,
  Welcome: { username: string }
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name='InputName' component={InputNameScreen} />
        <RootStack.Screen name='Welcome' component={WelcomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
export type { RootStackParamList }
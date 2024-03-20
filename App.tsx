import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputName from './src/features/welcome/InputName'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './src/features/welcome/Welcome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name='InputName' component={InputName}/>
        <Stack.Screen name='Welcome' component={Welcome}/>
      </Stack.Navigator>
     
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
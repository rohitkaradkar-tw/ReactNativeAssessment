import React, { useEffect } from 'react'
import InputNameScreen from './src/features/welcome/InputNameScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/features/welcome/WelcomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from './src/component/LoadingScreen';

type RootStackParamList = {
  InputName: undefined,
  Welcome: { username: string },
  Loading: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  // a state which has isLoading and userName properties

  const [state, setState] = React.useState({ isLoading: true, userName: '' })

  useEffect(() => {
    const getUsername = async () => await AsyncStorage.getItem('username')

    getUsername().then(username => {
      setState({ isLoading: false, userName: username || '' })
    })
  })

  if (state.isLoading) {
    return <LoadingScreen />
  }
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <>
          {
            state.userName == ''
              ? <>
                <RootStack.Screen name='InputName' component={InputNameScreen} />
                <RootStack.Screen name='Welcome' component={WelcomeScreen} />
              </>
              : <RootStack.Screen name='Welcome' component={WelcomeScreen} initialParams={{ username: state.userName }} />
          }
        </>
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
export type { RootStackParamList }
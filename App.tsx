import React, { createContext, useEffect } from 'react'
import InputNameScreen from './src/features/welcome/InputNameScreen'
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/features/welcome/WelcomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from './src/component/LoadingScreen';
import Main from './src/features/main/Main';


type RootStackParamList = {
  InitialInputName: undefined,
  InputName: undefined,
  Welcome: { username: string },
  Loading: undefined,
  Main: undefined,
}

export type ThemeMode = 'light' | 'dark' | 'auto';

interface ThemeModeContextProps {
  themeMode: ThemeMode;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
}

export const ThemeModeContext = createContext<ThemeModeContextProps>({
  themeMode: 'light',
  setThemeMode: () => { },
});

export const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [state, setState] = React.useState({ isLoading: true, userName: '' })
  const [themeMode, setThemeMode] = React.useState<ThemeMode>('dark');

  useEffect(() => {
    const getUsername = async () => await AsyncStorage.getItem('username')

    getUsername().then(username => {
      setState({ isLoading: false, userName: username || '' })
    })
  })

  const themeData = themeMode === 'dark' ? DarkTheme : DefaultTheme

  if (state.isLoading) {
    return (
      <ThemeModeContext.Provider value={{ themeMode: themeMode, setThemeMode: setThemeMode }}>
        <LoadingScreen />
      </ThemeModeContext.Provider>
    )
  }
  return (
    <ThemeModeContext.Provider value={{ themeMode: themeMode, setThemeMode: setThemeMode }}>
      <NavigationContainer theme={themeData}>
        <RootStack.Navigator>
          <>
            {
              state.userName == ''
                ? <>
                  <RootStack.Screen name='InitialInputName' component={InputNameScreen} options={{ title: 'Login' }} />
                  <RootStack.Screen name='Welcome' component={WelcomeScreen} />
                </>
                : <RootStack.Screen name='Welcome' component={WelcomeScreen} initialParams={{ username: state.userName }} options={{ title: 'Welcome to Amazon' }} />
            }
            <RootStack.Screen name='Main' component={Main} options={{ title: 'Amazon' }} />
            <RootStack.Screen name='InputName' component={InputNameScreen} options={{ title: 'Edit Name' }}/>
          </>
        </RootStack.Navigator>
      </NavigationContainer>
    </ThemeModeContext.Provider>
  )
}
export type { RootStackParamList }
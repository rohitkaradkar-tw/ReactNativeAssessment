import React, { useEffect, useState, createContext } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from './src/component/LoadingScreen';
import Navigation from './src/component/Navigation';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export type ThemeMode = 'light' | 'dark' | 'auto';

interface ThemeModeContextProps {
  themeMode: ThemeMode;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
}

export const ThemeModeContext = createContext<ThemeModeContextProps>({
  themeMode: 'light',
  setThemeMode: () => {}
});

export default function App() {
  const [state, setState] = useState({ isLoading: true, userName: '' });
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');

  useEffect(() => {
    const getUsername = async () => await AsyncStorage.getItem('username');

    getUsername().then(username => {
      setState({ isLoading: false, userName: username || '' });
    });
  });

  const themeData = themeMode === 'dark' ? DarkTheme : DefaultTheme;

  if (state.isLoading) {
    return (
      <ThemeModeContext.Provider
        value={{ themeMode: themeMode, setThemeMode: setThemeMode }}>
        <LoadingScreen />
      </ThemeModeContext.Provider>
    );
  }
  return (
    <>
      <ThemeModeContext.Provider
        value={{ themeMode: themeMode, setThemeMode: setThemeMode }}>
        <Navigation theme={themeData} state={state} />
      </ThemeModeContext.Provider>
    </>
  );
}

import React, { createContext, useEffect, useState } from 'react';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { getUserName } from './src/service/UserNameService';
import LoadingScreen from './src/component/LoadingScreen';
import Navigation from './src/component/Navigation';

export type ThemeMode = 'light' | 'dark' | 'auto';

interface ThemeModeContextProps {
  themeMode: ThemeMode;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
}

export const ThemeModeContext = createContext<ThemeModeContextProps>({
  themeMode: 'light',
  setThemeMode: () => {}
});

const App = () => {
  const [state, setState] = useState({ isLoading: true, userName: '' });
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');

  useEffect(() => {
    const getUsername = getUserName('username');

    getUsername.then(username => {
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
};

export default App;

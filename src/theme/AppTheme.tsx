import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import React, { createContext, useContext, useState } from 'react';

interface ThemeModeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeModeContext = createContext<ThemeModeContextProps>({
  theme: DefaultTheme,
  toggleTheme: () => {}
});

export const useThemeContext = () => {
  const themeContext = useContext(ThemeModeContext);
  if (!themeContext) {
    throw new Error('No theme context found');
  }

  return themeContext;
};

const AppTheme = ({ children }: any) => {
  const [theme, setTheme] = useState<Theme>(DefaultTheme);

  const toggleTheme = () => {
    if (theme === DefaultTheme) {
      setTheme(DarkTheme);
      return;
    }

    setTheme(DefaultTheme);
  };

  return (
    <ThemeModeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export default AppTheme;

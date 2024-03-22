import React, { createContext, useState } from 'react';
import { Appearance } from 'react-native';

// type Theme = 'light' | 'dark' | 'auto';

// interface ColorThemeContextProps {
//     theme: Theme;
//     setTheme: React.Dispatch<React.SetStateAction<Theme>>;
// }

// export const ColorThemeContext = createContext<ColorThemeContextProps>({
//     theme: 'light',
//     setTheme: () => { },
// });

// export const ColorThemeContext = createContext<Theme>('auto');

// export const ColorThemeProvider = (props: { children: React.ReactNode }) => {
//     const setColorTheme = (theme: Theme) => {
//         console.log('setColorTheme', theme);
//         Appearance.setColorScheme(theme === 'auto' ? null : theme);
//     }
//     const [theme, setTheme] = useState<Theme>(Appearance.getColorScheme() || 'auto');
//     // call setColorTheme when setTheme is called
//     React.useEffect(() => {
//         setColorTheme(theme);
//     }, [theme]);

//     return (
//         <ColorThemeContext.Provider value={{ theme, setTheme }}>
//             {props.children}
//         </ColorThemeContext.Provider>
//     );
// };
import React, {createContext, useState} from 'react';
import {ThemeProvider} from 'styled-components/native';
import Navigation from '@navigation';
import {theme as themeStyles} from '@theme/colors';
import {spacing} from './theme/spacing';

type Theme = 'light' | 'dark';
type ThemeContextType = {theme: Theme; toggleTheme: () => void};

// Create context for theme
const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

const App = () => {
  // theme state, default is light
  const [theme, setTheme] = useState<Theme>('light');

  // on toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // theme mode
  const themeMode = themeStyles[theme];

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <ThemeProvider theme={{...themeMode, ...spacing}}>
        {/* navigation */}
        <Navigation />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;

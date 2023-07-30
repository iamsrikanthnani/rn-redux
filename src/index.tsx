import React, {createContext, useState} from 'react';
import {ThemeProvider} from 'styled-components/native';
import Navigation from '@navigation';
import {theme as themeStyles} from '@theme/colors';
import {spacing} from './theme/spacing';
import {Provider} from 'react-redux';
import {store, persistor} from '@redux/store';
import {PersistGate} from 'redux-persist/integration/react';

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
        {/* redux-provider */}
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            {/* navigation */}
            <Navigation />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;

import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Retrieve the theme preference from localStorage or use default
    return localStorage.getItem('theme') || 'Light Mode';
  });

  useEffect(() => {
    // Store the theme preference in localStorage so it updates the stored preference, ensuring that it persists across page navigations. 
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

import React, { createContext, useState, useContext } from "react";

// Create context
const ToggleThemeContext = createContext();

// Custom hook to use the ToggleThemeContext
export const useToggleTheme = () => {
  return useContext(ToggleThemeContext);
};

// ToggleThemeProvider component
export const ToggleThemeProvider = ({ children }) => {
  // State to hold dark mode status
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ToggleThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ToggleThemeContext.Provider>
  );
};

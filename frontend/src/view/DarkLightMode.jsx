import { createContext, useContext, useState, useEffect } from "react";
import { PiSunDuotone, PiMoonDuotone  } from "react-icons/pi";

const ThemeContext = createContext();

export const DarkLightModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  return useContext(ThemeContext);
}

export const DarkLightMode = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <span className="d-flex align-items-center justify-content-center me-3" role="button" onClick={toggleDarkMode} title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
      {darkMode ? <PiSunDuotone size={25} /> : <PiMoonDuotone size={25} />}
    </span>
  );
};
import { createContext, useState } from "react";

const themeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const isDark = theme === "dark";
  return (
    <themeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
export { themeContext };

import { useContext } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import { themeContext } from "../../contexts/themeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(themeContext);

  const isDark = theme === "dark";

  const setTheme = () => {
    toggleTheme(isDark ? "light" : "dark");
  };

  return (
    <div
      onClick={setTheme}
      className={`w-12 h-6 md:w-14  flex relative items-center rounded-full p-1 cursor-pointer transition-all duration-300
      ${isDark ? "bg-gray-800" : "bg-gray-300"}`}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`h-full w-6  flex items-center justify-center rounded-full shadow-md
        ${isDark ? "bg-yellow-400 absolute left-0" : "bg-white absolute right-0"}`}
      >
        {isDark ? (
          <FaSun className="text-white text-xs md:text-sm" />
        ) : (
          <FaMoon className="text-gray-700 text-xs md:text-sm" />
        )}
      </motion.div>
    </div>
  );
}

export default ThemeToggle;

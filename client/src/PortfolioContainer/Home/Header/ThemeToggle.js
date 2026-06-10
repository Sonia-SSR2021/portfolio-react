import React from "react";
import { useTheme } from "../../../context/ThemeContext";

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={`theme-toggle-switch ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Activar modo claro" : "Activar modo oscuro"}
      title={isDarkMode ? "Modo claro" : "Modo oscuro"}
    >
      <div className="toggle-slider"></div>
    </button>
  );
}

export default ThemeToggle;

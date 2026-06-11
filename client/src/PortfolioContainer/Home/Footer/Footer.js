import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import './Footer.css?v=2';

export default function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <div className="footer-container">
      <div className="footer-parent">
        <div className="wave-shape">
          <img
            src={isDarkMode
              ? require("../../../assets/Home/shape-bg-black.png")
              : require("../../../assets/Home/shape-bg.png")}
            alt="Decoración de forma de onda"
          />
        </div>
      </div>
    </div>
  );
}
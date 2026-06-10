import React from "react";
import './Footer.css?v=2';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <div className="wave-shape">
          <img src={require("../../../assets/Home/shape-bg.png")} alt="Decoración de forma de onda" />
        </div>
      </div>
    </div>
  );
}
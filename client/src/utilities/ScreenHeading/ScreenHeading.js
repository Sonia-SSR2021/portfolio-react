import React from "react";
import "./ScreenHeading.css";

/**
 * Componente ScreenHeading: Componente reusable para encabezados de pantalla.
 * Renderiza un título principal, un subtítulo opcional y un separador visual.
 * Diseñado para mantener coherencia visual en los títulos de diferentes secciones de la aplicación.
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.title - El título principal a mostrar (requerido).
 * @param {string} [props.subHeading] - El subtítulo o descripción opcional.
 * @returns {JSX.Element} El componente ScreenHeading renderizado.
 */
export default function ScreenHeading(props) {
    return (
        <div className="heading-container">
            <div className="screen-heading">
                <span>{props.title}</span>
            </div>

            {
                (props.subHeading) ? (
                    <div className="screen-sub-heading">
                        <span>{props.subHeading}</span>
                    </div>
                ) : <div></div>
            }

            <div className="heading-separator">
                <div className="separator-line">
                    <div className="separator-blob">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
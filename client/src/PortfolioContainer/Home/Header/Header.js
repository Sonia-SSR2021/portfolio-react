import React,{useState} from "react";
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from "../../../utilities/commonUtils";
import ScrollService from "../../../utilities/ScrollService";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Header.css?v=2";

/**
 * Componente Header: Renderiza la barra de navegación superior del portfolio.
 * Incluye un logo (nombre), opciones de navegación y un menú hamburguesa para dispositivos móviles.
 * Maneja la navegación suave entre secciones y resalta la opción activa basada en el scroll.
 * @returns {JSX.Element} El componente Header renderizado.
 */
export default function Header() {
    /**
     * Estado para el índice de la pantalla seleccionada actualmente.
     * @type {[number, function]} selectedScreen - Índice de la pantalla activa, y función para actualizarlo.
     */
    const [selectedScreen, setSelectedScreen] = useState(0);

    /**
     * Estado para controlar la visibilidad del menú hamburguesa en móviles.
     * @type {[boolean, function]} showHeaderOptions - Booleano para mostrar/ocultar opciones, y función para alternarlo.
     */
    const [showHeaderOptions, setShowHeaderOptions] = useState(false);

    /**
     * Actualiza el estado de la pantalla seleccionada basado en el evento de ScrollService.
     * Se suscribe a currentScreenBroadcaster para detectar cambios en la vista.
     * @param {Object} currentScreen - Objeto con la pantalla actualmente en vista.
     * @param {string} currentScreen.screenInView - Nombre de la pantalla visible.
     */
    const updateCurrentScreen = (currentScreen) => {
        if (!currentScreen || !currentScreen.screenInView) return;
        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
        if (screenIndex < 0) return;
        setSelectedScreen(screenIndex);
    }

    /**
     * Suscripción al broadcaster de ScrollService para actualizar la pantalla activa.
     * @type {Subscription} currentScreenSubscription - Suscripción RxJS para eventos de scroll.
     */
    let currentScreenSubscription = ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);

    /**
     * Genera las opciones de navegación del header basadas en TOTAL_SCREENS.
     * Cada opción es un div con evento de clic para cambiar de pantalla.
     * @returns {JSX.Element[]} Array de elementos JSX para las opciones del header.
     */
    const getHeaderOptions = () => {
        return(
            TOTAL_SCREENS.map((screen, i) => (
                <div
                    key={screen.screen_name}
                    className={getHeaderOptionsClass(i)}
                    onClick={() => switchScreen(i, screen)}>
                    <span>{screen.screen_name}</span>
                </div>
            ))
        )
    }

    /**
     * Determina las clases CSS para una opción del header basada en su índice.
     * Agrega separadores y resalta la opción seleccionada.
     * @param {number} index - Índice de la opción en TOTAL_SCREENS.
     * @returns {string} Cadena de clases CSS para la opción.
     */
    const getHeaderOptionsClass = (index) => {
        let classes = "header-option";
        if (index < TOTAL_SCREENS.length - 1)
            classes += "header-option-separator";

        if (selectedScreen === index)
            classes += " selected-header-option";

        return classes;
    }

    /**
     * Cambia a la pantalla seleccionada haciendo scroll suave y actualizando el estado.
     * Oculta el menú hamburguesa después de la selección.
     * @param {number} index - Índice de la pantalla a seleccionar.
     * @param {Object} screen - Objeto de pantalla con screen_name.
     */
    const switchScreen = (index, screen) => {
        let screenComponent = document.getElementById(screen.screen_name);
        if (!screenComponent) return;
        screenComponent.scrollIntoView({ behavior: "smooth" });
        setSelectedScreen(index);
        setShowHeaderOptions(false);
    }


    return (
        <div>
            <div className="header-container" onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                <div className="header-parent">
                    <div className="header-hamburger" onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                        <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
                    </div>
                    <div className = "header-logo">
                        <span>Sonia~</span>
                    </div>
                    <div className={(showHeaderOptions) ? "header-options show-hamburger-options" : "header-options"}>
                        {getHeaderOptions()}
                    </div>
                </div>
            </div>
        </div>
    )
}
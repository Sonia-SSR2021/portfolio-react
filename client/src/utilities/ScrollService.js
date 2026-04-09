import {TOTAL_SCREENS} from "./commonUtils";
import {Subject} from "rxjs";

/**
 * Clase ScrollService: Maneja el scroll de la página y notifica cambios en las secciones visibles.
 * Utiliza RxJS para emitir eventos cuando una pantalla entra en vista o se hace visible completamente.
 * Esta clase es un singleton estático para gestionar el comportamiento de scroll en la aplicación.
 */
export default class ScrollService {
    static scrollHandler = new ScrollService();

    /**
     * Subject de RxJS que emite notificaciones cuando una pantalla está completamente visible.
     * Los suscriptores pueden reaccionar para actualizar el estado de la aplicación.
     * @type {Subject}
     */
    static currentScreenBroadcaster = new Subject();

    /**
     * Subject de RxJS que emite notificaciones cuando una pantalla comienza a aparecer (fade-in).
     * @type {Subject}
     */
    static currentScreenFadeIn = new Subject();

    /**
     * Constructor de la clase. Agrega un listener para el evento de scroll en la ventana.
     * Cada vez que el usuario hace scroll, verifica qué pantalla está en vista.
     */
    constructor() {
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
    }

    /**
     * Hace scroll suave hacia la sección "Contact Me" (Contrátame).
     */
    scrollToHireMe = () => {
        let contactMeScreen = document.getElementById("Contact Me");
        if (!contactMeScreen) return;
        contactMeScreen.scrollIntoView({behavior: "smooth"});
    }

    /**
     * Hace scroll suave hacia la sección "Home" (Inicio).
     */
    scrollToHome = () => {
        let HomeScreen = document.getElementById("Home");
        if (!HomeScreen) return;
        HomeScreen.scrollIntoView({behavior: "smooth"});
    }

    /**
     * Verifica si un elemento del DOM está visible en la ventana del navegador.
     * @param {HTMLElement} elem - El elemento DOM a verificar.
     * @param {string} type - Tipo de visibilidad: "partial" (parcial) o "complete" (completa).
     * @returns {boolean} True si el elemento cumple con el tipo de visibilidad especificado.
     */
    isElementInView = (elem, type) => {
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBottom = rec.bottom;

        let partiallyVisible = elementTop < window.innerHeight && elementBottom >= 0;
        let completelyVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

        switch (type) {
            case "partial":
                return partiallyVisible;
            case "complete":
                return completelyVisible;
            default:
                return false;
        }
    }

    /**
     * Verifica qué pantalla está actualmente bajo la vista del usuario durante el scroll.
     * Emite notificaciones a través de los Subjects de RxJS para fade-in o cambio de pantalla.
     * @param {Event} event - El evento de scroll (opcional, usado para validación).
     */
    checkCurrentScreenUnderViewport = (event) => {
        if (!event || Object.keys(event).length < 1) return;
        for (let screen of TOTAL_SCREENS) {
            let screenFromDOM = document.getElementById(screen.screen_name);
            if (!screenFromDOM) continue;

            let fullyVisible = this.isElementInView(screenFromDOM, "complete");
            let partiallyVisible = this.isElementInView(screenFromDOM, "partial");

            if (fullyVisible || partiallyVisible) {
                if (partiallyVisible && !screen.alreadyRendered) {
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name
                    });
                    screen['alreadyRendered'] = true;
                    break;
                }
                if(fullyVisible) {
                    ScrollService.currentScreenBroadcaster.next({
                        screenInView: screen.screen_name
                    });
                    break;
                }
            }
        }
    }

}
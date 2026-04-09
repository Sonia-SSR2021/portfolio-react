/**
 * Clase Animations: Maneja animaciones básicas para elementos de la interfaz.
 * Proporciona métodos para aplicar efectos visuales como fade-in a secciones de la página.
 * Esta clase es un singleton estático para gestionar animaciones de manera centralizada.
 */
export default class Animations {
    static animations = new Animations();

    /**
     * Aplica una animación de fade-in a una pantalla específica.
     * Cambia la opacidad y la transformación del elemento para crear un efecto de entrada.
     * @param {string} screen_name - El ID de la pantalla a animar.
     */
    fadeInScreen = (screen_name) => {
        let screen = document.getElementById(screen_name);
        if (!screen_name || !screen) return;

        screen.style.opacity = "5";
        screen.style.transform = "translateY(1px)";
    }
}
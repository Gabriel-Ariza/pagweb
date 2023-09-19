const icono = document.getElementById("miIcono");
const barra = document.getElementById("barrita");

let estaRotado = false;
let animacionEjecutada = false;

function toggleRotacion() {
    icono.classList.toggle("rotado");
    estaRotado = !estaRotado;


    barra.classList.toggle("menu_desplegado", estaRotado);
    barra.classList.toggle("color_menu", !estaRotado);

    if (!estaRotado) {
        // Si el menú no está desplegado, ejecuta la animación "rubberBand" solo si no se ha ejecutado antes
        if (!animacionEjecutada) {
            icono.classList.add("rubberBand");
            animacionEjecutada = true;

            // Eliminar la clase "rubberBand" después de la animación
            icono.addEventListener("animationend", () => {
                icono.classList.remove("rubberBand");
            });
        }
    }
}

function contraerMenu() {
    const botonMenu = document.querySelector('[data-bs-target="#navbar-start"]');
    if (botonMenu.getAttribute('aria-expanded') === 'true') {
        botonMenu.click();
    }
}

icono.addEventListener("mouseenter", () => {
    // Cuando el cursor entra en el icono, ejecuta la animación "rubberBand" si el menú no está desplegado
    if (!estaRotado) {
        icono.classList.add("rubberBand");
        animacionEjecutada = true;

        // Eliminar la clase "rubberBand" después de la animación
        icono.addEventListener("animationend", () => {
            icono.classList.remove("rubberBand");
        });
    }
});

icono.addEventListener("click", () => {
    toggleRotacion();
});

barra.addEventListener("mouseleave", () => {
    if (estaRotado) {
        toggleRotacion();
    }
    contraerMenu();
});

barra.addEventListener("mouseenter", () => {
    // Reiniciar la animación si el menú se vuelve a desplegar
    if (estaRotado && animacionEjecutada) {
        icono.classList.remove("rubberBand");
        animacionEjecutada = false;
    }
});

/* const enlacesMenu = document.querySelectorAll("listado");

enlacesMenu.forEach((enlace) => {
    enlace.addEventListener("mouseenter", () => {
        // Aplica una transformación cuando el mouse se acerca al enlace
        enlace.style.transform = "translateY(100px)"; // Cambia la distancia según tus preferencias
    });

    enlace.addEventListener("mouseleave", () => {
        // Restaura la posición original cuando el mouse sale del enlace
        enlace.style.transform = "translateY(0)";
    });
}); */
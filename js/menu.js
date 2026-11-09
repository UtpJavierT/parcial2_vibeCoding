function alternarMenu() {
    const menu = document.getElementById("menu");
    const boton = document.getElementById("menu-boton");

    menu.classList.toggle("abierto");

    if (menu.classList.contains("abierto")) {
        boton.setAttribute("aria-expanded", "true");
        boton.textContent = "✕ Cerrar";
    } else {
        boton.setAttribute("aria-expanded", "false");
        boton.textContent = "☰ Menú";
    }
}

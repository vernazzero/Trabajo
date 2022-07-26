const menu = document.getElementById("menu");

const mostrarMenu = document.querySelector(".contenedorMenu");

menu.addEventListener("click", () => {

    mostrarMenu.classList.toggle("menuShow");

})
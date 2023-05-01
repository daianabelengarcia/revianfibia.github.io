$(document).ready(() => {

    const mostrar = document.querySelector("#vermas");
    const ocultar = document.querySelector("#vermenos");

    mostrar.addEventListener("click", mostrarTodo);
    ocultar.addEventListener("click", ocultarTodo);


})


function mostrarTodo() {

    $('docente-desplegable').removeClass("oculto");
    $('docente-desplegable').addClass("docente-desplegado");
    $('vermas').addClass("oculto");
}

function ocultarTodo() {
    $('docente-desplegable').removeClass("docente-desplegado");
    $('docente-desplegable').addClass("oculto");
    $('vermas').removeClass("oculto");
}


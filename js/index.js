$(document).ready(() => {

    let mostrar = document.getElementById("vermas");
    let ocultar = document.getElementById("vermenos");

    mostrar.addEventListener("click", mostrarTodo);
    ocultar.addEventListener("click", ocultarTodo);


})


function mostrarTodo() {

    $("#docente-desplegable").removeClass("oculto");
    $("#docente-desplegable").addClass("docente-desplegado");
    $("#vermas").addClass("oculto");
}

function ocultarTodo() {
    $("#docente-desplegable").removeClass("docente-desplegado");
    $("#docente-desplegable").addClass("oculto");
    $("#vermas").removeClass("oculto");
}


$(document).ready(() => {

    let mostrar = document.getElementById("vermas");
    let ocultar = document.getElementById("vermenos");
    let yearSelect = document.getElementById("year");

    mostrar.addEventListener("click", mostrarTodo);
    ocultar.addEventListener("click", ocultarTodo);
    yearSelect.addEventListener ("click", populateYears);

window.sr = ScrollReveal();

sr.reveal('#section-1', {
duration: 3000;
origin: left;
distance: 6rem;
});
})


function mostrarTodo() {

    $("#docente-desplegable").removeClass("oculto");
    $("#docente-desplegable").addClass("docente-desplegado");
    $(".linea").removeClass ("oculto");
    $("#cta-docente").removeClass("visible");
    $("#cta-docente").addClass ("oculto");
    $("#cta-desplegado").removeClass("oculto");
    $("#cta-desplegado").addClass("visible");
    $("#vermas").addClass("oculto");
}

function ocultarTodo() {
    $("#docente-desplegable").removeClass("docente-desplegado");
    $("#docente-desplegable").addClass("oculto");
    $(".linea").addClass ("oculto");
    $("#vermas").removeClass("oculto");
    $("#cta-docente").removeClass("oculto");
    $("#cta-docente").addClass("visible");
    $("#cta-desplegado").removeClass("visible");
    $("#cta-desplegado").addClass("oculto");
}

$(document).ready(() => {

    let mostrar = document.getElementById("vermas");
    let ocultar = document.getElementById("vermenos");
    let yearSelect = document.getElementById("year");

    mostrar.addEventListener("click", mostrarTodo);
    ocultar.addEventListener("click", ocultarTodo);
    yearSelect.addEventListener ("click", populateYears);


})


function mostrarTodo() {

    $("#docente-desplegable").removeClass("oculto");
    $(".linea").removeClass ("oculto");
    $("#docente-cta").addClass ("oculto");
    $("#docente-desplegable").addClass("docente-desplegado");
    $("#vermas").addClass("oculto");
    $("#cta-desplegado").removeClass("oculto");
}

function ocultarTodo() {
    $("#docente-desplegable").removeClass("docente-desplegado");
    $(".linea").addClass ("oculto");
    $("#docente-desplegable").addClass("oculto");
    $("#vermas").removeClass("oculto");
    $("#docente-cta").removeClass("oculto");
    $("#cta-desplegado").addClass("oculto");
}

function populateYears () {
    // Hacer que este año y los cien años anteriores estén en el <select>
    for (let i = 0; i <= 100; i++) {
      let option = document.createElement("option");
      option.textContent = 2023 - i;
      yearSelect.appendChild(option);
    }
  }

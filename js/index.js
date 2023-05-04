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
    $("#docente-desplegable").addClass("docente-desplegado");
    $("#vermas").addClass("oculto");
}

function ocultarTodo() {
    $("#docente-desplegable").removeClass("docente-desplegado");
    $(".linea").addClass ("oculto");
    $("#docente-desplegable").addClass("oculto");
    $("#vermas").removeClass("oculto");
}

function populateYears () {
    // Hacer que este año y los cien años anteriores estén en el <select>
    for (var i = 0; i <= 100; i++) {
      let option = document.createElement("option");
      option.textContent = 2023 - i;
      yearSelect.appendChild(option);
    }
  }

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

function populateYears () {
    // Hacer que este año y los cien años anteriores estén en el <select>
    for (let i = 0; i <= 100; i++) {
      let option = document.createElement("option");
      option.textContent = "2023" - i;
      yearSelect.appendChild(option);
    }
  }

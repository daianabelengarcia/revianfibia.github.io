$(document).ready(() => {
  let mostrar = document.getElementById("vermas");
  let ocultar = document.getElementById("vermenos");

  mostrar.addEventListener("click", mostrarTodo);
  ocultar.addEventListener("click", ocultarTodo);
  

  window.sr = ScrollReveal();

  sr.reveal(".descripcion-1", {
    duration: 4000,
    origin: "left",
    distance: "6rem",
  });
  sr.reveal(".cursada-texto-1", {
    duration: 4000,
    origin: "left",
    distance: "6rem",
  });
  sr.reveal(".cursada-texto-2", {
    duration: 4000,
    origin: "left",
    distance: "6rem",
  });
  sr.reveal(".descripcion-2", {
    duration: 4000,
    origin: "right",
    distance: "6rem",
  });
  sr.reveal(".cursada-img", {
    duration: 4000,
    origin: "right",
    distance: "6rem",
  });
  sr.reveal(".recuadros", {
    duration: 3000,
    origin: "top",
    distance: "6rem",
  });
});
function mostrarTodo() {
  $("#docente-desplegable").removeClass("oculto");
  $("#docente-desplegable").addClass("docente-desplegado");
  $(".linea").removeClass("oculto");
  $("#cta-docente").removeClass("visible");
  $("#cta-docente").addClass("oculto");
  $("#cta-desplegado").removeClass("oculto");
  $("#cta-desplegado").addClass("visible");
  $("#vermas").addClass("oculto");
}

function ocultarTodo() {
  $("#docente-desplegable").removeClass("docente-desplegado");
  $("#docente-desplegable").addClass("oculto");
  $(".linea").addClass("oculto");
  $("#vermas").removeClass("oculto");
  $("#cta-docente").removeClass("oculto");
  $("#cta-docente").addClass("visible");
  $("#cta-desplegado").removeClass("visible");
  $("#cta-desplegado").addClass("oculto");
}

$(document).ready(() => { 
  $("#vermas").click(() => {
    mostrarTodo();
  })
  $("#vermenos").click(() => {
    ocultarTodo();
  })
  $("#cerrar").click(() => {
    cerrarPopup();
  });
  $("#formulario").on("submit", (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el form
    abrirPopup();
    datosFeedback();
  });

  window.sr = ScrollReveal(); //Movimiento de secciones

//Sección 1
  sr.reveal("#section-1", {
    duration: 3000,
    origin: "top",
    distance: "6rem",
  });

  //Sección 2
  sr.reveal("#section-2", {
    duration: 3000,
    origin: "top",
    distance: "6rem",
  });

  //Sección 3
  sr.reveal("#section-3", {
    duration: 3000,
    origin: "top",
    distance: "6rem",
  });
  
  //Sección 4
  sr.reveal("#section-4", {
    duration: 3000,
    origin: "top",
    distance: "6rem",
  });

  //Sección 5
  sr.reveal("#section-5", {
    duration: 3000,
    origin: "top",
    distance: "6rem",
  });

   //Form
   sr.reveal("#formulario", {
    duration: 3000,
    origin: "top",
    distance: "6rem",
  });

  // Smooth scrolling con JQ
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  //Función ver más 
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
  //Función ver menos
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
  //Función mostrar feedback - form enviado
  function abrirPopup() { 
    $("#popup").removeClass("oculto");
    $("#popup").addClass("popup-visible");
  }
  //Función cerrar feedback
  function cerrarPopup() {
    $("#popup").removeClass("popup-visible");
    $("#popup").addClass("oculto");
  }
  //Función trasladar datos del formulario
  function datosFeedback() {
    const inputNombre = $("#nombre");
    const inputCorreo = $("#correo");
  
    const nombre = inputNombre.val();
    const correo = inputCorreo.val();
  
    const spanNombre = $("#dato-nombre");
    const spanCorreo = $("#dato-email");
  
    spanNombre.html(nombre);
    spanCorreo.html(correo);
  }
});

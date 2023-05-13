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
  sr.reveal(".descripcion-1", {
    duration: 4000,
    origin: "left",
    distance: "6rem",
  });
  sr.reveal(".descripcion-2", {
    duration: 4000,
    origin: "right",
    distance: "6rem",
  });

  //Sección 2
  sr.reveal(".recuadros", {
    duration: 3000,
    origin: "top",
    distance: "6rem",
  });

  //Sección 4
  sr.reveal(".cursada-texto-1", {
    duration: 4000,
    origin: "right",
    distance: "6rem",
  });
  sr.reveal(".cursada-texto-2", {
    duration: 4000,
    origin: "right",
    distance: "6rem",
  });
  sr.reveal(".cursada-img", {
    duration: 4000,
    origin: "left",
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
  }
  //Función cerrar feedback
  function cerrarPopup() {
    $("#popup").addClass("oculto");
  }
  //Función trasladar datos del formulario
  function datosFeedback() {
    const inputNombre = $("#nombre");
    const inputEmail = $("#email");
  
    const nombre = inputNombre.val();
    const email = inputEmail.val();
  
    const spanNombre = $("#dato-nombre");
    const spanEmail = $("#dato-email");
  
    spanNombre.html(nombre);
    spanEmail.html(email);
  }
});

$(document).ready(() => {

    $(".ver-mas").click(() => {
        vermas(id);
    });
    $(".ver-menos").click(() => {
        vermenos(id);
    });

    function vermas(id) {
        if (id == "ver-mas") {
            $(".docente-desplegable oculto").removeClass("oculto");
            $(".docente-desplegable").addClass ("docente-ver-mas");
            $(".ver-mas").addClass("oculto");
        }

    }
    function vermenos(id) {
        if (id == "ver-menos") {
            $(".docente-desplegable docente-ver-mas").removeClass ("docente-ver-mas");
            $(".docente-desplegable").addClass("oculto");
            $(".ver-mas").removeClass("oculto");
        }
    }
})

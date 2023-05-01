$(document).ready(() => {

    $("#ver-mas").click(() => {
        vermas();
    });
    $("#ver-menos").click(() => {
        vermenos();
    });

    function vermas(id) {
        if (id == "ver-mas") {
            $(".docente-ver-mas oculto").removeClass("oculto");
            $(".ver-mas").addClass("oculto");
        }

    }
    function vermenos(id) {
        if (id == "ver-menos") {
            $(".docente-ver-mas").addClass("oculto");
            $(".ver-mas").removeClass("oculto");
        }
    }
})
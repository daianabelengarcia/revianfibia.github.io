$(document).ready(() => {

    $("#ver-mas").click(() => {
        vermas();
    });
    $("#ver-menos").click(() => {
        vermenos();
    });
});
//Desplegable

function vermas(id) {
    if (id == "ver-mas") {
        document.getElementById("desplegable").removeClass ("oculto");
        document.getElementById("ver-mas").addClass ("oculto");
    }
}

function vermenos(id) {
    if (id == "ver-menos") {
        document.getElementById("desplegar").addClass ("oculto");
        document.getElementById("ver-mas").removeClass ("oculto");
    }
}
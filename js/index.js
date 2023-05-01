$(document).ready(() => {
    console.log ("jquery cargado");

    $("#ver-mas").click(() => {
        vermas();
        console.log ("ver mas");
    });
    $("#ver-menos").click(() => {
        vermenos();
        console.log ("ver menos");
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
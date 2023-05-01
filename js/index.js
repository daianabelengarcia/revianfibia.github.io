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
        document.getElementById("desplegar").style.display = "block";
        document.getElementById("ver-mas").style.display = "none";
    }
}

function vermenos(id) {
    if (id == "ver-menos") {
        document.getElementById("desplegar").style.display = "none";
        document.getElementById("ver-mas").style.display = "inline";
    }
}
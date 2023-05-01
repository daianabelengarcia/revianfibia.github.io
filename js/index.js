$(document).ready(() => {
    
vermas (id);

})

function vermas (id) {
    if (id == 'ver-mas') {
        document.getElementsById('desplegable').removeClass("oculto");
        document.getElementsById('desplegable').addClass("docente-ver-mas");
        document.getElementsById('ver-mas').addClass("oculto");
    } else if (id == 'ver-menos') {
        document.getElementsByClassName("docente-desplegable").removeClass("docente-ver-mas");
        document.getElementsByClassName("docente-desplegable").addClass("oculto");
        document.getElementsByClassName("ver-mas").removeClass("oculto");
    }
}
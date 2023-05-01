$(document).ready(() => {
    
    document.getElementById('ver-mas').onclick (() => {
        vermas();
    })

    document.getElementById('ver-menos').onclick (() => {
        document.getElementsByClassName("docente-desplegable").removeClass("docente-ver-mas");
        document.getElementsByClassName("docente-desplegable").addClass("oculto");
        document.getElementsByClassName("ver-mas").removeClass("oculto");
    })

})

function vermas (id) {
    if (id == 'ver-mas') {
        document.getElementsById('desplegable').removeClass("oculto");
        document.getElementsById('desplegable').addClass("docente-ver-mas");
        document.getElementsById('ver-mas').addClass("oculto");
    }
}
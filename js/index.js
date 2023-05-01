$(document).ready(() => {
    
    document.getElementById('ver-mas').onclick (() => {
        document.getElementsByClassName("docente-desplegable").removeClass("oculto");
        document.getElementsByClassName("docente-desplegable").addClass("docente-ver-mas");
        document.getElementsByClassName("ver-mas").addClass("oculto");
    })

    document.getElementById('ver-menos').onclick (() => {
        document.getElementsByClassName("docente-desplegable").removeClass("docente-ver-mas");
        document.getElementsByClassName("docente-desplegable").addClass("oculto");
        document.getElementsByClassName("ver-mas").removeClass("oculto");
    })

})
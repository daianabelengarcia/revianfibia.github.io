$(document).ready(() => {
    
    document.getElementById('ver-mas').onclick = function () {
        document.getElementsByClassName("docente-desplegable oculto").removeClass("oculto");
        document.getElementsByClassName("docente-desplegable").addClass("docente-ver-mas");
        document.getElementsByClassName("ver-mas").addClass("oculto");
    }

    document.getElementById('ver-menos').onclick = function () {
        document.getElementsByClassName("docente-desplegable docente-ver-mas").removeClass("docente-ver-mas");
        document.getElementsByClassName("docente-desplegable").addClass("oculto");
        document.getElementsByClassName("ver-mas oculto").removeClass("oculto");
    }

})
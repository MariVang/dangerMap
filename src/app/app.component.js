function busqueda(){
    document.getElementById("menu1").style.display = "none";
    document.getElementById("menu2").style.display = "block";
}

function reporte(){
    document.getElementById("menu1").style.display = "none";
    document.getElementById("menu3").style.display = "block";
}

function regresar(){
    document.getElementById("menu1").style.display = "block";
    document.getElementById("menu2").style.display = "none";
    document.getElementById("menu3").style.display = "none";
    document.getElementById("menu4").style.display = "none";
}

function enviar(){
    document.getElementById("menu3").style.display = "none";
    document.getElementById("menu4").style.display = "block";
}
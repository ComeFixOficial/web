//PARTE DE NAVBAR
let ubicacionPrincipal '0' = window.pageYOffset;
window.onscroll = function() {
    let Desplazamineto_Actual = window.pageYOffset;
    if (ubicacionPrincipal >= Desplazamineto_Actual){
        document.getElementById('header')style.stop = '0';
    }
    else{
        document.getElementById('header')style.stop = '-20px'; 
    }
    ubicacionPrincipal = Desplazamineto_Actual;
}
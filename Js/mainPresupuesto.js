const DatoNombre = document.querySelector('#DatoNombre');
const DatoModelo = document.querySelector('#DatoModelo');
const DatoFalla = document.querySelector('#DatoFalla');
const DatoDescripcion = document.querySelector('#DatoDescripcion');
const DatoTelefono = document.querySelector('#DatoTelefono');     
const btonEnviar = document.querySelector('#btonEnviar');

var mensaje;

function enviar(){
    mensaje = `https://api.whatsapp.com/send?phone=543541609532&text=*Nombre:*%20${DatoNombre.value}%0A*Modelo del dispositivo:*%20${DatoModelo.value}%0A*¿Que falla tiene?:*%20${DatoFalla.value}%0A*Descripcion del dispositivo:*%20${DatoDescripcion.value}%0A*Localidad:*%20${DatoTelefono.value} `;
    btonEnviar.href = mensaje;
}
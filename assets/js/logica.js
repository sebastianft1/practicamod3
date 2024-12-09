function asignarEventos(){
    let elBoton = document.getElementById('btnEnviar');
    elBoton.addEventListener('click', enviarMensaje);

    let contenedorHoraActual = document.getElementById('horaActual');
    let laHoraActual = mostrarHoraActual();

    let hora = laHoraActual.getHours();
    let minutos = laHoraActual.getMinutes();
    let segundos = laHoraActual.getSeconds();
    let horaCompleta = `${hora}:${minutos}:${segundos}`;


    contenedorHoraActual.innerHTML = horaCompleta;
}

function mostrarHoraActual(){
    var currentTime = new Date();
    return currentTime;
}

function enviarMensaje(){
    // identificamos y mostramos el contenedor
    let elContenedor = document.getElementById('contenedorMensajeEnviado');
    elContenedor.style.display = 'block';
    // extraemos el mensaje digitado en la caja de texto
    let laCajaTexto = document.getElementById('txtMensaje');
    // enviamos el mensaje al parrafo adecuado
    let elParrafo = document.getElementById('parrafoMensajeEnviado');
    elParrafo.innerHTML = laCajaTexto.value;
}
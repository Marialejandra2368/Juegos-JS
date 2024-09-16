// Inicializamos una variable contador para llevar un registro de la imagen actual
var contador = 1;

// Variable para almacenar el identificador del temporizador
var temporizador;

// Función para iniciar la rotación de imágenes
function iniciar() {
    // Solo iniciamos un nuevo temporizador si no hay uno en ejecución
    if (!temporizador) {
        // Establecemos un intervalo que llama a rotarImagenes cada 3000 ms (3 segundos)
        temporizador = setInterval(rotarImagenes, 3000);
    }
}

// Función para detener la rotación de imágenes
function parar() {
    // Limpiamos el intervalo actual para detener la rotación
    clearInterval(temporizador);
    // Reiniciamos la variable del temporizador a null para indicar que no hay temporizador activo
    temporizador = null;
}

// Función que cambia la imagen mostrada
function rotarImagenes() {
    // Si el contador llega a 10, lo reiniciamos a 0 (para ciclar entre 1 y 10)
    if (contador >= 10) {
        contador = 0;
    }
    // Obtenemos el elemento de imagen por su ID
    var img = document.getElementById("imgSlide");
    // Actualizamos la fuente de la imagen para mostrar la siguiente en la secuencia
    img.src = '/images/img' + ++contador + '.jpg';
}
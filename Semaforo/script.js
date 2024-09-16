// Esta función cambia el color de los elementos del semáforo
function cambiarColor(color) {
    // Cambia el color del elemento con id "rojo" a rojo si el parámetro es 'rojo', de lo contrario, lo pone en gris
    document.getElementById("rojo").style.backgroundColor = color === 'rojo' ? 'red' : 'grey';
    // Cambia el color del elemento con id "amarillo" a amarillo si el parámetro es 'amarillo', de lo contrario, lo pone en gris
    document.getElementById("amarillo").style.backgroundColor = color === 'amarillo' ? 'yellow' : 'grey';
    // Cambia el color del elemento con id "verde" a verde si el parámetro es 'verde', de lo contrario, lo pone en gris
    document.getElementById("verde").style.backgroundColor = color === 'verde' ? 'green' : 'grey';
}

// Esta función inicia el ciclo del semáforo
function iniciarSemaforo() {
    // Cambia el color a rojo inmediatamente (0 ms de retraso)
    setTimeout(() => cambiarColor('rojo'), 0);
    // Cambia el color a amarillo después de 3000 ms (3 segundos)
    setTimeout(() => cambiarColor('amarillo'), 3000);
    // Cambia el color a verde después de 6000 ms (6 segundos)
    setTimeout(() => cambiarColor('verde'), 6000);
    // Llama a la función iniciarSemaforo nuevamente después de 9000 ms (9 segundos) para reiniciar el ciclo
    setTimeout(iniciarSemaforo, 9000);
}
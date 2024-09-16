// Genera un número secreto aleatorio entre 1 y 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
// Inicializa el contador de intentos en 0
let intentos = 0;

// Función que se llama cuando el usuario hace un intento
function adivinar() {
    // Obtiene el valor ingresado por el usuario en el campo de texto con id "numero"
    let intento = document.getElementById("numero").value;
    // Incrementa el contador de intentos
    intentos++;

    // Compara el intento del usuario con el número secreto
    if (intento == numeroSecreto) {
        // Si el intento es correcto, muestra un mensaje de éxito con el número de intentos realizados
        document.getElementById("resultado").innerText = "!Correcto! Adivinaste en " + intentos + " intentos.";
    } else if (intento < numeroSecreto) {
        // Si el intento es menor que el número secreto, indica que el número es mayor
        document.getElementById("resultado").innerText = "El numero es mayor. Intentalo de nuevo.";
    } else {
        // Si el intento es mayor que el número secreto, indica que el número es menor
        document.getElementById("resultado").innerText = "El numero es menor. Intentalo de nuevo.";
    }
}
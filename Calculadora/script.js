function calcular() {
    // Obtiene el valor del primer número y lo convierte a un número de punto flotante
    let num1 = parseFloat(document.getElementById("num1").value);
    
    // Obtiene el valor del segundo número y lo convierte a un número de punto flotante
    let num2 = parseFloat(document.getElementById("num2").value);
    
    // Obtiene el valor de la operación seleccionada
    let operacion = document.getElementById("operacion").value;
    
    // Variable para almacenar el resultado de la operación
    let resultado;

    // Utiliza un switch para determinar qué operación realizar
    switch(operacion) {
        case "+":
            // Suma los dos números
            resultado = num1 + num2;
            break;

        case "-":
            // Resta el segundo número del primero
            resultado = num1 - num2;
            break;
        
        case "*":
            // Multiplica los dos números
            resultado = num1 * num2;
            break;
        
        case "/":
            // Divide el primer número por el segundo
            // Aquí se podría agregar manejo de errores para la división por cero
            if (num2 === 0) {
                resultado = "Error: División por cero";
            } else {
                resultado = num1 / num2;
            }
            break;
        
        default:
            // Maneja el caso en el que la operación no es válida
            resultado = "Operación no válida";
    }

    // Muestra el resultado en el elemento con el id "resultado"
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
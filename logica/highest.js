let mayor = null;

for (let i = 1; i <= 10; i++) {
    let entrada = prompt(`Ingresa el número ${i}:`);
    let numero = Number(entrada);

    // Validar si es un número válido
    if (isNaN(numero)) {
        alert("Por favor, ingresa un número válido.");
        i--; // Repetir esta iteración
        continue;
    }

    // Lógica para determinar el mayor
    if (mayor === null || numero > mayor) {
        mayor = numero;
    }
}

alert("El número mayor es: " + mayor);
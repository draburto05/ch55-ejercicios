// Solicitar al usuario la entrada
const input = prompt("Introduzca un número entero:");
const n = parseInt(input, 10);

// Función recursiva para calcular la suma de 1 a n
function recursiveSum(n) {
    if (n <= 1) {
        return 1;
    }
    return n + recursiveSum(n - 1);
}

if (isNaN(n) || n < 1) {
    alert("Introduzca un entero válido mayor o igual a 1.");
} else {
    const result = recursiveSum(n);
    alert(`La suma de 1 a ${n} es ${result}`);
}
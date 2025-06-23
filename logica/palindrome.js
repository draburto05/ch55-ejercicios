// Solicitar al usuario la entrada
const input = prompt("Introduzca una palabra o frase:");

// Normalizar la cadena: eliminar los caracteres no alfanuméricos y convertirlos a minúsculas
const cleaned = input.replace(/[^a-z0-9]/gi, '').toLowerCase();

// Invertir la cadena limpia
const reversed = cleaned.split('').reverse().join('');

// Comprobar si es un palíndromo
if (cleaned === reversed) {
    alert("¡Sí, es un palíndromo!");
} else {
    alert("No, no es un palíndromo.");
}
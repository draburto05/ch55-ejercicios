const seconds = parseInt(prompt("Introducir el número en segundos:"), 10);
const message = prompt("Mensaje para la alamar");

if (isNaN(seconds) || seconds < 0) {
    alert("Por favor ingresa un numero valido");
} else {
    alert(`Alarma activada ${seconds} seconds.`);

    setTimeout(() => {
        alert(`${message} despues ${seconds} segundos`);
    }, seconds * 1000);
}
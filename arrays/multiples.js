function arrayMultiplos(number, length) {
    const result = [];
    for (let i = 1; i <= length; i++) {
        result.push(number * i);
    }
    return result;
}

// Ejemplo:
console.log(arrayMultiplos(2, 10));
console.log(arrayMultiplos(17, 6));

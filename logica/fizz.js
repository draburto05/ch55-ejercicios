/**
 * Reto de Programación: FizzBuzz
Descripción:
Escribe un programa que recorra los números del 1 al 100 y aplique las siguientes reglas:
Si el número es múltiplo de 3, imprime "Fizz".
Si el número es múltiplo de 5, imprime "Buzz".
Si el número es múltiplo de 3 y 5, imprime "FizzBuzz".
Si no es múltiplo de ninguno, imprime el número tal cual

1-{ 100 numero}
2.- Crear un bucle que recorra 100 numeros
3.-Si el número es multiplico de 2, impre "Fizz"
    3.1 ocupar la expresion numero % 3
    3.2 es verdad si el modulo es = 0
4.-Si el numero es multiplico de 5, imprimre "Buzz"
    4.1 ocupar la expresion numero % 5
    4.2 es verdadero si el modeulo es = 0
5.-Si el numero es multiplo de 3 y 5 impres "FizzBuzz"
    5.1 ocupar la expresion numero % 3 y numero % 5
    5.2 es verdadero solo y solo ambas expresion son = 0
6.-En caso dde no ser multiplico de ninguno imptr rl numero
 * 
 * 
 */
let counter = 1;
do {
    if (counter % 3 === 0 && counter % 5 === 0) {
        console.log(`El número ${counter} es FizzBuzz`);
    }
    else if (counter % 3 === 0) {
        console.log(`El número ${counter} es Fizz`);
    }
    else if (counter % 5 === 0) {
        console.log(`El número ${counter} es Buzz`);
    } else {
        console.log(counter);
    }
    counter++;
} while (counter <= 100)
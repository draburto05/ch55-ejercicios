
//firma de la funcion
const fizzbuzz = (counterNumber) => {
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
    } while (counter <= counterNumber)
};

console.log("50 veces")
console.log(fizzbuzz(50));
console.log("200 veces");
console.log(fizzbuzz(200));

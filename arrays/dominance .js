function postivioDo(arr) {
    let positivo = 0;

    for (let num of arr) {
        if (num > 0) {
            positivo++;
        }
    }

    return positivo > arr.length / 2;
}

console.log(postivioDo([-1, -3, -5, 4, 6767]));

//Дан массив с числами. Найдите сумму квадратов элементов этого массива.
export function getSumSquareNumbers(arr) {
    
    if (!Array.isArray(arr)) {
        console.log('Введен не верный тип данных');
        return undefined;
    }

    let sumSquare = 0;
    for (let num of arr) {
        sumSquare += num * num;
    }

    return sumSquare;
}

//Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
export function getSqrtNumbers(arr) {
    
    if (!Array.isArray(arr)) {
        console.log('Введен не верный тип данных');
        return undefined;
    }

    let sumSquare = 0;
    for (let num of arr) {
        sumSquare += Math.sqrt(num);
    }

    return sumSquare;
}

//Дан массив с числами. Найдите сумму положительных элементов этого массива.
export function getSumPositiveNumbers(arr) {

    if (!Array.isArray(arr)) {
        console.log('Введен не верный тип данных');
        return undefined;
    }

    let positiveSum = 0;
    for (let num of arr) {
        if (num >= 0) {
            positiveSum += num;
        }
    }

    return positiveSum;
}

//Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
export function getSumOfNumbers(arr) {

    if (!Array.isArray(arr)) {
        console.log('Введен не верный тип данных');
        return undefined;
    }

    let sum = 0;
    for (let num of arr) {
        if (num > 0 && num < 10) {
            sum += num;
        }
    }

    return sum;
}
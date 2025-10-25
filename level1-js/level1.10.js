
//Заполните массив случайными числами из промежутка от 1 до 100.
export function getNewRandomArr(size) {

    /* const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1);
    }
    return arr; */

    return Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
}

//Дано некоторое число: 12345. Выведите в консоль все его символы с конца.
export function getRevesedNumfromSymbol(num) {

    if (typeof num !== 'number') {
        console.log('Введите число');
        return undefined;
    }

    const reveredStr = num.toString().split('').reverse();
    return reveredStr;
}

/* Дан некоторый массив, например, вот такой:
[1, 2, 3, 4, 5, 6]
По очереди выведите в консоль подмассивы из двух элементов нашего массива:
[1, 2]
[3, 4]
[5, 6] */
export function getSliceArray(arr, chunkSize) {

    if (!Array.isArray(arr)) {
        console.log('Введён неверный тип данных');
        return undefined;
    }

    let result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        result.push(arr.slice(i, i + chunkSize));
    }

    return result;
}

/* Даны два массива:

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
Слейте эти массивы в новый массив:

[1, 2, 3, 4, 5, 6] */
export function getConcatArrays(arr1, arr2) {

    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        console.log('Введён неверный тип данных');
        return undefined;
    }

    for (let element of arr2 ) {
        arr1.push(element)
    }
    
    return arr1;

    /* const combinedArray = arr1.concat(arr2);
    return combinedArray; */
}
//Дана некоторая строка. Найдите позицию первого нуля в строке.
export function getFirstZeroIndex(str) {

    let index = 0;

    if (typeof str !== 'string') {
        console.log('Введён неверный тип данных');
        return undefined;
    }

    if (str.indexOf('0') !== -1) {
        index = str.indexOf('0');
    }
    else {
        console.log('В строке нет 0')
    }
    return index;
}

//Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
export function getNumbersWithDigitSumFive() {

    for (let i = 10; i <= 100; i++) {
        let str = i.toString();
        let firstDigit = parseInt(str[0]);
        let secondDigit = parseInt(str[1]);
        if (firstDigit + secondDigit === 5) {
            console.log(i);
        }
    }
}

//Дан массив. Удалите из него элементы с заданным значением.
export function removeElements(arr, value) {

    let newArr = arr.filter(element => element !== value);
    return newArr;
}

//Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]. Найдите сумму первой половины элементов этого массива.

export function getSumHalfArrElements(arr) {

    if (!Array.isArray(arr)) {
        console.log('Введён неверный тип данных');
        return undefined;
    }

    let sum = 0;
    let halfLength = Math.floor(arr.length / 2);

    for (let i = 0; i < halfLength; i++) {
        sum += arr[i];
    }
    return sum;
}
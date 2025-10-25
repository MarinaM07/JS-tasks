//Дана строка:'abcde'. Получите массив букв этой строки.
export function getArrFromStr(str) {

    if (typeof str !== 'string') {
        console.log('Введите строку');
        return undefined;
    }

    let arr = str.split('');
    return arr;   
}

//Дано некоторое число:12345. Получите массив цифр этого числа.
export function getArrFromNum(num) {

    if (typeof num !== 'number') {
        console.log('Введите число');
        return undefined;
    }

    return num.toString().split('').map(Number);     
}

//Дано некоторое число: 12345. Переверните его: 54321.
export function getReverseNum(num) {

    if (typeof num !== 'number') {
        console.log('Введите число');
        return undefined;
    }

    const reveredStr = num.toString().split('').reverse().join('');
    return parseInt(reveredStr);    
}

//Дано некоторое число:12345. Найдите сумму цифр этого числа.
export function getSumNum(num) {

    if (typeof num !== 'number') {
        console.log('Введите число');
        return undefined;
    }

    const arr = num.toString().split('').map(Number);
    let sum = 0;
    for (let num of arr ) {
        sum += num++;
    }
    
    return sum;
}
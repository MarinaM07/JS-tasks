//Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.
export function getPositionStrElements(str) {

    if (typeof str !== 'string') {
        console.log('Введён неверный тип данных');
        return false
    }

    if (str.length < 1) {
        console.log('Пустая строка');
        return false;
    }

    let newStr = str.split('');

    let positions = [];

    for (let i = 0; i < newStr.length; i++) {
        if (/\d/.test(newStr[i])) {  // Проверяем, является ли символ цифрой
            positions.push(i);
        }
    }

    return positions;
}

/* Дан массив с некоторыми числами, например, вот такой: [123, 456, 789].
Напишите код, который перевернет числа в этом массиве по следующему принципу: [321, 654, 987]. */
export function reverseElements(arr) {

    if (!Array.isArray(arr)) {
        console.log('Введён неверный тип данных');
        return false
    }

    if (arr.length === 0) {
        console.log('Массив пуст');
        return 0;
    }

    const newArr = arr.map(item => item.toString().split('').reverse().join(''));

    return newArr
}

/* Дана некоторая строка с числом:'1234567'.
Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:'1 234 567'. */
export function separationIntoThree(str) {

    if (typeof str !== 'string') {
        console.log('Введён неверный тип данных');
        return false
    }

    if (str.length < 1) {
        console.log('Пустая строка');
        return false;
    }

    let result = '';
    let count = 0;

    for (let i = str.length - 1; i >= 0; i--) {
        result = str[i] + result;
        count++;
        console.log(result);

        if (count % 3 === 0 && i > 0) {
            result = ' ' + result;
        }
    }

    return result;
}

/* Дана некоторая строка:'AbCdE'.
Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее:
'aBcDe'. */
export function replaceUpperCase(str) {

    if (typeof str !== 'string') {
        console.log('Введён неверный тип данных');
        return false
    }

    if (str.length < 2) {
        console.log('Недостаточно символов в строке');
        return false;
    }

    let newStr = '';
    let checkUpper = false;

    for (let i = 0; i < str.length; i++) {

        if (/[a-zA-Z]/.test(str[i]) && str[i] === str[i].toUpperCase()) {
            checkUpper = true;
            break
        }
    }

    if (!checkUpper) {
        console.log('В строке нет верхнего регистра');
        return false;
    }

    for (let i = 0; i < str.length; i++) {

        if (str[i] === str[i].toUpperCase()) {
            newStr += str[i].toLowerCase();
        }
        else {
            newStr += str[i].toUpperCase();
        }
    }

    return newStr;
}

/* Дан некоторый массив с числами, например, вот такой:[1, 2, 3, 4, 5, 6]. Слейте пары элементов вместе:[12, 34, 56]. */
export function getMergerTwo(arr) {

    if (!Array.isArray(arr)) {
        console.log('Введен неверный тип данных');
        return false;
    }

    if (arr.length < 1) {
        console.log('Массив пуст');
        return false;
    }

    if (!arr.every(item => typeof item === 'number')) {
        console.log('Массив должен содержать только числа');
        return false;
    }

    let newArr = [];

    for (let i = 0; i < arr.length; i += 2) {
        if (i + 1 < arr.length) {
            let pair = arr[i] * 10 + arr[i + 1];
            newArr.push(pair);
        } else {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

/* Дана некоторая строка со словами: 'aaa bbb ccc eee fff'.
Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее:'aaa Bbb ccc Eee fff'. */
export function getUpperCaseSecondWord(str) {

    if (typeof str !== 'string') {
        console.log('Введён неверный тип данных');
        return false
    }

    let words = str.split(' ');
    

    for (let i = 1; i < words.length; i += 2) {

        if (words[i].length > 0) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
    }

    return words.join(' ')
}
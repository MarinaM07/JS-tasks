//Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.
export function isNoMoreThanTwoUpperCase(str) {

    if (typeof str !== 'string') {
        console.log('Введите строку');
        return false
    }

    let count = 0;

    for (let i = 0; i < str.length; i++) {

        if (str[i] !== str[i].toLowerCase() && str[i] === str[i].toUpperCase()) {
            count++;
        }
    }

    if (count > 2) {
        console.log('в строке более двух заглавных букв');
        return false;
    }
    else if (count === 0) {
        console.log('в строке нет заглавных букв');
        return false;
    } else {
        console.log('в строке не более двух заглавных букв');
        return true;
    }

}

/* Дана некоторая строка:'1 22 333 4444 22 5555 1'.
Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее:
'1 22 333 22 1'. */
export function isNoMoreThanTwoSymbols(str) {

    if (typeof str !== 'string') {
        console.log('Введите верный тип данных ');
        return false;
    }

    let newStr = str.split(' ').filter(item => item.length <= 3).join(' ');

    return newStr
}

/* Даны два массива:
let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];

Слейте эти массивы в новый массив следующим образом:
[1, 2, 'a', 'b', 'c', 3] */

export function isMergerTwoArr(arr1, arr2) {

    if (!Array.isArray(arr1) && !Array.isArray(arr1)) {
        console.log('Введите верный тип данных');
        return false;
    }

    let newArr = arr1.slice(0, 2).concat(arr2, arr1.slice(2));
    return newArr;
}
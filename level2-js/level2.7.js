/* Дана некоторая строка:'a bc def ghij'.
Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:
'A BC DEF ghij'. */
export function getUpperCaseWord(str) {

    if (typeof str !== 'string') {
        console.log('Введён неверный тип данных');
        return false
    }

    let words = str.split(' ');

    let newStr = words.map(word => {
        if (word.length <= 3) {
            return word.toUpperCase() //word.slice(1) — это метод массива/строки, который возвращает подстроку, начиная с индекса 1 
        }
        return word;
    });

    return newStr.join(' ');
}

//Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
export function isUpperCaseSymbol(str) {

    if (typeof str !== 'string') {
        console.log('Введён неверный тип данных');
        return false
    }

    if (str.length > 1) {
        console.log('Введено больше одного символа');
        return false;
    }

    if (str === str.toLocaleUpperCase()) {
        console.log('Символ в верхнем регистре');
    }
    else {
        console.log('Символ в нижнем регистре');
    }

}

/* Дано некоторое число, например, такое: 123789.
Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат: 28. */
export function deleteAllEvenNum(num) {

    if (typeof num !== 'number') {
        console.log('Введите число');
        return false;
    }

    let str = num.toString();
    let hasEven = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] % 2 === 0) {
            hasEven = true;
            break
        }
    }

    if (!hasEven) {
        console.log('Нет четных чисел');
        return false;
    }

    let newNum = str.split('').filter(item => item % 2 !== 0).join('')

    return Number(newNum);
}
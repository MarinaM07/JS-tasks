/* Дано некоторое число:
123456
Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:
12 + 34 + 56 */
export function getSumPairElements(num) {
    
    const str = num.toString();

    if (typeof num !== 'number'|| !Number.isInteger(num) || num < 0) {
        console.log('Введен неверный тип данных');
        return false;
    }

    if (str.length % 2 !== 0) {
        return "Число должно иметь чётное количество цифр!";
    }
    
    let sum = 0;

    for (let i = 0; i < str.length; i += 2) {
        // Берём пару и преобразуем в число
        const pair = parseInt(str.slice(i, i + 2));
        sum += pair;
    }

    return sum;
}

/* Дан массив с числами:
[1, 2, 3, 4, 5]
Выведите в консоль элементы этого массива в обратном порядке. */
export function getreversedArr (arr) {

     if (!Array.isArray(arr)) {
        console.log('Введите верный тип данных');
        return false;
    }

    let newArr = arr.reverse();
    return newArr;
}
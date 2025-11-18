//Дана некоторая строка, например, вот такая:'023m0df0dfg0'. Получите массив позиций всех нулей в этой в строке.
export function getPositionsZero(str) {

    if (typeof str !== 'string') {
        console.log('Введён неверный тип данных');
        return false
    }

    if (str.length < 1) {
        console.log('Пустая строка');
        return false;
    }

    let positions = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            positions.push(i);
        }
    }

    return positions;
}

// Дана некоторая строка:'abcdefg'. Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:'abdeg'.
export function removeEveryThirdElements(str) {

    if (typeof str !== 'string') {
        console.log('Введён неверный тип данных');
        return false
    }

    if (str.length < 3) {
        console.log('Меньше трёх символов');
        return false;
    }

    let arr = [];

    for (let i = 0; i < str.length; i++) {
        if ((i + 1) % 3 !== 0) {
            arr.push(str[i]);
        }
    }

    return arr.join('');
}

/* Дан некоторый массив, например, вот такой:[1, 2, 3, 4, 5, 6]
Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях. */
export function getquotientSum(arr) {

    if (!Array.isArray(arr)) {
        console.log('Введён неверный тип данных');
        return false
    }

    if (arr.length === 0) {
        console.log('Массив пуст');
        return 0;
    }

    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            sum1 += arr[i];            
        }
        else {
            sum2 = arr[i];            
        }
    }

    if (sum2 === 0) {
        console.log('Деление на ноль невозможно');
        return false;
    }

    const quotient = sum1/sum2;

    return quotient
}
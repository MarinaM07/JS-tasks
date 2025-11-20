//Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв
export function getNoMoreThreeLetters(str) {

    if (typeof str !== 'string') {
        console.log('Введен неверный тип данных');
        return false;
    }

    const regex = /^[A-Za-zА-Яа-яЁё]+$/;
    let count = 0;

    for (let i = 0; i < str.length; i++) {

        if (regex.test(str[i])) {
            count++;
        }
    }

    if (count <= 3) {
        console.log('В строке не более трёх букв');
        return true;
    }
    else {
        console.log('В строке более трёх букв');
        return false;
    }
}

//Дано число. Получите первую четную цифру с конца этого числа.
export function getFirstEvenNumberFromTheEnd(num) {

    if (typeof num !== 'number') {
        console.log('Введён неверный тип данных');
        return false;
    }

    let str = num.toString();
    let even = '';

    for (let i = str.length - 1; i >= 0; i--) {

        if (str[i] % 2 === 0) {
            even += str[i];
            break;
        }
    }

    if (even === '') {
        console.log('В строке нет четных чисел');
        return null;
    }

    return Number(even);
}

/* Дана некоторая строка:
'abcde abcde abcde'
Замените в ней первый символ каждого слова на '!':
'!bcde !bcde !bcde' */
export function replacingFirstCharacter(str) {    


}
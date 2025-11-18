//Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
export function getFirstNum(str) {

    let index = 0;


    for (let i = 0; i <= str.length; i++) {
        if (/[0-9]/.test(str[i])) { //Метод test в JavaScript — это метод объекта RegExp (регулярного выражения). Он проверяет, соответствует ли заданная строка регулярному выражению
            index = i;
            break
        }
        else {
            console.log('в строке нет цыфр');
            return false;
        }
    }
    return index;
}

//Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
export function splitObject(obj) {
    const keysArray = Object.keys(obj);    // Массив ключей
    const valuesArray = Object.values(obj); // Массив значений

    return {
        keys: keysArray,
        values: valuesArray
    };
}

//Дано число. Выведите в консоль количество четных цифр в этом числе.
export function getEvenNumber(num) {

    let arr = num.toString().split('');
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

/* Дана некоторая строка:'abcde'. 
Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее: 'AbCdE'. */
export function getUpperCase(str) {

    if (typeof str !== 'string') {
        console.log('Введён неверный тип данных');
        return false
    }

    let arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            arr[i] = arr[i].toUpperCase();
        }
    }

    return arr.join('')
}

/* Дана некоторая строка со словами:'aaa bbb ccc'. Сделайте заглавным первый символ каждого слова в этой строке. 
В нашем случае должно получится следующее:'Aaa Bbb Ccc */
export function getFirstLetterUpperCase (str) {

    if (typeof str !== 'string') {
        console.log('Введён неверный тип данных');
        return false
    }

    let words = str.split(' ')

    let newStr = words.map(word => {
        if (word.length > 0) {
            return word[0].toUpperCase() + word.slice(1); //word.slice(1) — это метод массива/строки, который возвращает подстроку, начиная с индекса 1 
        }
        return word;
    });

    return newStr.join(' ')

}
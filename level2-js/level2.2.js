//Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
export function getQuantityNegativeElements(arr) {

    if (!Array.isArray(arr)) {
        console.log('Введен неверный тип данных');
        return undefined;
    }

    /* let quantity = 0;

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i]<0) {
            quantity += 1;
        }
    }
    return quantity; */

    return arr.reduce((acc, x) => (x < 0 ? acc + 1 : acc), 0);
}

//Дан массив с числами. Оставьте в нем только положительные числа.
export function getPositiveElements(arr) {

    if (!Array.isArray(arr)) {
        console.log('Введен неверный тип данных');
        return undefined;
    }

    //return arr.filter((x) => x > 0);

    for (let i = arr.length - 1; i >= 0; i--) { //Метод splice изменяет длину массива, сдвигая элементы после удалённого. Если бы цикл шёл с начала (i = 0 до arr.length), удаление элемента на индексе i могло бы "сдвинуть" остальные элементы, и ты мог бы пропустить некоторые из них или выйти за границы массива. Обратный порядок решает эту проблему, потому что изменения не влияют на уже обработанные индексы.
        if (arr[i] <= 0) {
            arr.splice(i, 1);
        }
    }

    return arr;
}

//Дана строка. Удалите предпоследний символ из этой строки.
export function getPenultElement(str) {

    if (typeof str !== 'string') {
        console.log('Введён неверный тип данных');
        return undefined;
    }

    if (str.length < 2) {
        console.log('Строка слишком короткая для удаления предпоследнего символа');
        return undefined;
    }

    let newStr = str.slice(0, -2) + str.slice(-1);
    return newStr;
}

//Дан некоторый массив, например, вот такой:[1, 2, 3, 4, 5, 6]. Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.
export function gerSumHalfsArr(arr) {

    if (!Array.isArray(arr)) {
        console.log('Введён неверный тип данных');
        return undefined;
    }

    if (arr.length < 2) {
        console.log('Массив слишком короткий');
        return undefined;
    }

    const half = Math.floor(arr.length / 2);

    const firstHalf = arr.slice(0, half);
    const secondHalf = arr.slice(half);

    const firstSum = firstHalf.reduce((acc, num) => acc + num, 0)
    const secondSum = secondHalf.reduce((acc, num) => acc + num, 0)

    const privateSumHalfs = firstSum/secondSum;

    return privateSumHalfs;
}
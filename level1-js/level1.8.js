//Заполните массив целыми числами от 1 до 10.
export function getArr() {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
        arr.push(i);
    }
    return arr;
}

//Заполните массив четными числами из промежутка от 1 до 100.
export function getArr2() {
    let arr = [];
    for (let i = 1; i <= 100; i++) {
        arr.push(i);
    }
    return arr;
}

//Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34]. Округлите эти дроби до одного знака в дробной части.
export function isRoundingArrElements(arr) {
    if (!Array.isArray(arr)) {
        console.log('Введён неверный тип данных');
        return undefined;
    }

    /* return arr.map((x) => Number(x.toFixed(1))); */

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        const rounded = Number(arr[i].toFixed(1));
        newArr.push(rounded);
    }

    return newArr;
}
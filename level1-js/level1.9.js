//Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
export function isFilterStartsWith(arr) {

    if (!Array.isArray(arr)) {
        console.log('Введён неверный тип данных');
        return undefined;
    }

    const newArr = arr.filter(item => typeof item === 'string' && item.startsWith("http://"));

    return newArr;

    /* let newArr = [];
    
    for (let i=0; i< arr.length; i++) {

        if(arr[i].startsWith("http://")) {
            newArr.push(arr[i]);
        }
    }

    return newArr; */
}

//Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на.html.
export function isFilterEndswith(arr) {

    if (!Array.isArray(arr)) {
        console.log('Введён неверный тип данных');
        return undefined;
    }

    const newArr = arr.filter(item => typeof item === 'string' && item.startsWith(".html"));

    return newArr;
}

//Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
export function getIncreaseArr(arr) {

    if (!Array.isArray(arr)) {
        console.log('Введён неверный тип данных');
        return undefined;
    }

    /* const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let newNum = Number((arr[i]*1.1).toFixed(1));
        newArr.push(newNum);
    }
    return newArr; */

    return arr.map((x) => Number((x * 1.1).toFixed(2)));
}
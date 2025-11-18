//Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
export function getСoincidenceLetter(str1, str2) {

    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        console.log('Введён неверный тип данных')
        return undefined
    }

    if (str1.length < 2 || str2.length < 2) {
        console.log('Слова короче двух букв');
        return undefined;
    }

    const firstIndex = str1[str1.length - 1].toLocaleLowerCase();
    const secodIndex = str2[0].toLocaleLowerCase();

    if (firstIndex === secodIndex) {
        console.log('Последняя буква первого слова совпадает с первой буквой второго слова');
        return true;
    }
    else {
        console.log('Последняя буква первого слова не совпадает с первой буквой второго слова');
        return false;
    }
}

//Дана некоторая строка. Найдите позицию третьего нуля в строке.
export function getThirdZero(str) {

    if (typeof str !== 'string') {
        console.log('Введён неверный тип данных')
        return undefined
    }

    if (str.length < 3) {
        console.log('В строке меньше трёх символов');
    }

    let count = 0;

    for (let i = 0; i <= str.length; i++) {
        if (str[i] === '0') {
            count++;
            if (count === 3) {
                return i;
            }
        }
    }

    if (count < 3) {
        console.log('Нулей меньше трёх');
        return false;
    }
}

//Даны числа, разделенные запятыми:'12,34,56'. Найдите сумму этих чисел.
export function getSum(str) {

    if (typeof str !== 'string') {
        console.log('Введён неверный тип данных')
        return undefined
    }

    if (str.trim() === '') {
        console.log('Строка пустая');
        return false;
    }

    const parts = str.split(',').map(part => part.trim());

    let sum = 0;
    let hasInvalid = false;

    for (const part of parts) {
        const num = Number(part);
        if (isNaN(num)) {
            console.log(`Часть "${part}" не является числом, пропускаем`);
            hasInvalid = true;
            continue;
        }
        sum += num;
    }

    if (hasInvalid && sum === 0) {
        console.log('В строке нет валидных чисел');
        return 0;
    }

    return sum;
}

/*Дана дата в следующем формате:'2025-12-31'. Преобразуйте эту дату в следующий объект:
{
	year: '2025',
	month: '12',
	day: '31',
} */
export function parseDate(dateString) {
    const parts = dateString.split('-');
    return {
        year: parts[0],
        month: parts[1],
        day: parts[2]
    };
}

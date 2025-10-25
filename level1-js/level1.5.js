//Найдите сумму всех целых чисел от 1 до 100.
export function getSum() {

  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }

  return sum;
}

//Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
export function getSum2() {

  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}

//Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
export function getSum3() {

  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }

  return sum;
}

//Даны два целых числа. Найдите остаток от деления первого числа на второе.
export function getSum4(num1, num2) {

  let remainder = 0;

  if (typeof num1 !== 'number' || isNaN(num1) || typeof num2 !== 'number' || isNaN(num2)) {
    return undefined;
  }

  if (num1 % 2 !== 0 || num1 % 2 !== 0) {
    console.log('введенные вами числа не четные');
    return undefined
  }
  else {
    remainder += num1 / num2;
  }

  return remainder;
}

//Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
export function isReverseStr(string) {

  if (typeof string !== 'string') {
    console.log('Введена не строка');
    return;
  }

  let reversedArray = string.split('').reverse();
  /* for (let char of reversedArray) {
    console.log(char);
  } */

  return reversedArray;
}
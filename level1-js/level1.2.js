//Дано число. Выведите в консоль первую цифру этого числа.
export function getFirstNumber(number) {
  if (typeof number !== 'number' || isNaN(number)) {
    return undefined;
  }

  const numStr = Math.abs(number).toString();

  return numStr[0];
}

//Дано число. Выведите в консоль последнюю цифру этого числа.
export function getLastNumber(number) {
  if (typeof number !== 'number' || isNaN(number)) {
    return undefined;
  }

  const numStr = Math.abs(number).toString();

  return numStr[numStr.length - 1];
}

//Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
export function getSumNumber(number) {
  if (typeof number !== 'number' || isNaN(number)) {
    return undefined;
  }

  const numStr = Math.abs(number).toString();

  const sum = parseInt(numStr[0]) + parseInt(numStr[numStr.length - 1]);

  return sum;
}

//Дано число. Выведите количество цифр в этом числе.
export function getDigitCount(number) {
  if (typeof number !== 'number' || isNaN(number)) {
    return undefined;
  }

  const numStr = Math.abs(number).toString();
  const digitCount = numStr.length;

  return digitCount;
}

//Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
export function isSameNum(num1, num2) {
  if (typeof num1 !== 'number' || isNaN(num1) || typeof num2 !== 'number' || isNaN(num2)) {
    return undefined;
  }

  const num1Str = Math.abs(num1).toString();
  const num2Str = Math.abs(num2).toString();

  return num1Str[0] === num2Str[0];
}
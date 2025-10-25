//Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
export function getPenultElement(string) {
  if (typeof string !== "string") {
    console.log("Не является строкой");
  }
  else if (string.length > 1) {
    return string[string.length - 2];
  }
}

//Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

export function isDivisibleBy(num1, num2) {
  if (typeof num1 !== 'number' || isNaN(num1) || typeof num2 !== 'number' || isNaN(num2)) {
    return undefined;
  }

  if (num2 === 0) {
    console.log("Деление на ноль невозможно");
    return false;
  }

  if (num1 % num2 === 0) {
    console.log("Первое число без остатка делится на второе");
    return true;
  }
  else {
    console.log("Первое число без остатка не делится на второе");
    return false;
  }
}
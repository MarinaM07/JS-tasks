// Дано число. Проверить отрицательное оно или нет.
function isNegative(number) {
  if (typeof number !== 'number' || isNaN(number)) {
    return false;
  }
  return number < 0;
}

//Дана строка. Выведите в консоль длину этой строки

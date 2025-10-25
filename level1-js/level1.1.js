//Дано число. Проверить отрицательное оно или нет.
export function isNegative(number) {
  if (typeof number !== 'number' || isNaN(number)) {
    return false;
  }
  return number < 0;
}

//Дана строка. Выведите в консоль длину этой строки
export function isLenghtStr(string) {
  if (typeof string === 'string') {
    console.log(string.length)
  }
  else {
    console.log('аргумент не является строкой')
  }
}

//Дана строка. Выведите в консоль последний символ строки
export function isLastChar(str) {
  if (typeof str === 'string' && str.length > 0) {
    console.log(str[str.length - 1]);
  } else if (typeof str === 'string' && str.length === 0) {
    console.log("Строка пуста");
  } else {
    console.log("Аргумент не является строкой");
  }
}

//Дано число. Проверьте, четное оно или нет. 
export const isEven = (number) => number % 2 === 0;

//Даны два слова. Проверьте, что первые буквы этих слов совпадают.
export function isFirstLetterSame(firstWord, secondWord) {
  if (typeof firstWord === 'string' || typeof secondWord === 'string') {
    return firstWord[0].toLocaleLowerCase === secondWord[0].toLocaleLowerCase;
  }
  else if (typeof firstWord !== 'string' || typeof secondWord !== 'string' || firstWord.length === 0 || secondWord.length === 0) {
    console.log("Строка пустая или аргумент не является словом");
  }
}

//Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
export function getLastLetter(word) {
  if (typeof word !== 'string' || word.length === 0) {
    return undefined;
  }

  const lastChar = word[word.length - 1];

  if (lastChar === 'ь') {
    if (word.length > 1) {
      return word[word.length - 2];
    }
    else {
      return undefined;
    }
  }
  else {
    return lastChar;
  }
}

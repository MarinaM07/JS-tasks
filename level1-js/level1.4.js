//Выведите в консоль все целые числа от 1 до 100.
export function getIntegers() {

  const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

  return numbers;
}

//Выведите в консоль все целые числа от -100 до 0.
export function getIntegers2() {

  const arr = [];

  for (let i = -100; i <= 0; i++) {
    arr.push(i)
  }

  return arr;

  //const numbers = Array.from({ length: 101 }, (_, i) => -100 + i);

  //return numbers;  
}


//Выведите в консоль все целые числа от 100 до 1.
export function getIntegers3() {
  /* const arr = [];

  for (let i = 1; i <= 100; i++) {
    arr.push(i)
  }

  return arr; */

  const numbers = Array.from({ length: 100 }, (_, i) => 100 - i);

  return numbers;
}

//Выведите в консоль все четные числа из промежутка от 1 до 100. 
export function getIntegers4() {
  const arr = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
}

//Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
export function getIntegers5() {
  const arr = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      arr.push(i);
    }
  }
  return arr;
}

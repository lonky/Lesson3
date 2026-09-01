const startNum: number = 1;
const endNum: number = 20;

let result: string = "0";

//Написать программу, которая выводит сумму всех чисел от 1 до 20

for (let counter = startNum; endNum >= counter; counter++) {
  result = (parseInt(result, 10) + counter).toString();
  //   result += counter;
}
console.log(result);

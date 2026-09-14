let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];
let total = 10;
let espectedSum = 0;
let actualSum = 0;
for (let number = 0; number <= total; number++) {
  espectedSum = espectedSum + number;
}
for (let number of numbers) {
  actualSum = actualSum + number;
}
let missingNumber = espectedSum - actualSum;
console.log("The missing number is: ", missingNumber);

let numbers = [1, 2, 3, 4, 6, 7, 8, 9, 10];
let total = 10;
let expectedSum = 0;
let actualSum = 0;
for (let number = 1; number <= total; number++) {
  expectedSum = expectedSum + number;
}
for (let number of numbers) {
  actualSum = actualSum + number;
}
let missingNumber = expectedSum - actualSum;
console.log("The missing number is: ", missingNumber);

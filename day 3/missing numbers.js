let numbers = Array.from({ length: 100 }, (_, index) => index + 1).filter(
  (number) => number !== 57,
);
let total = 100;
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

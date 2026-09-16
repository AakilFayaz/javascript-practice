let numbers = [8, 3, 15, 1, 9, 6];
let smallest = numbers[0];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  console.log("Checking:", numbers[i]);
  if (numbers[i] < smallest) {
    smallest = numbers[i];
    console.log("New smallest found:", smallest);
  }
  if (numbers[i] > largest) {
    largest = numbers[i];
    console.log("New largest found:", largest);
  }
}
console.log("Smallest number is:", smallest);
console.log("Largest number is:", largest);

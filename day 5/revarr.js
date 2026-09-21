let numbers = [1, 2, 3, 4, 5];

let left = 0;
let right = numbers.length - 1;

while (left < right) {
  let temporary = numbers[left];

  numbers[left] = numbers[right];
  numbers[right] = temporary;

  left++;
  right--;
}

console.log(numbers);

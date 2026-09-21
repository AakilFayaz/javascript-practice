let word = "madam";

let start = 0;
let end = word.length - 1;

while (start < end) {
  console.log("Compare:", word[start], "and", word[end]);

  if (word[start] !== word[end]) {
    console.log("Not same, so it is not a palindrome");
    break;
  }
  start++;
  end--;
}
console.log("Finished checking,it is palindrome");
// let numbers = [1, 2, 3, 4, 5];

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

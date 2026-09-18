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

let word = "fazil";
let firstnonrepeatedchar = "";
for (let i = 0; i < word.length; i++) {
  let count = 0;

  for (let j = 0; j < word.length; j++) {
    if (word[i] === word[j]) {
      count++;
    }
  }
  if (count === 1) {
    firstnonrepeatedchar = word[i];
    break;
  }
}

console.log(firstnonrepeatedchar);
// it only prints first non repeated character in the string

let sentence = "I love JavaScript";
let word = "";
let reversed = "";

for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === " ") {
    reversed = word + " " + reversed;
    word = "";
  } else {
    word = word + sentence[i];
  }
}

reversed = word + " " + reversed;
console.log(reversed);

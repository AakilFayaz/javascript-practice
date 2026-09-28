let text = "fazil aakkil";
let vowel = 0;
let consonant = 0;
for (i = 0; i < text.length; i++) {
  let character = text[i].toLowerCase();
  if ("aeiou".includes(character)) {
    vowel++;
  } else if (character >= "a" && character <= "z") {
    consonant++;
  }
}
console.log("Vowel count: ", vowel);
console.log("Consonant count: ", consonant);

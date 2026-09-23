let Firstword = "listen";
let Secondword = "silent";

let word1 = Firstword.split("").sort().join("");
let word2 = Secondword.split("").sort().join("");

if (word1 === word2) {
  console.log("the string are anagram");
} else {
  console.log("the string are not anagram");
}

let text = "fazilaakkil";
let character = "a";
let count = 0;
for (let i = 0; i < text.length; i++) {
  if (text[i] === character) {
    count++;
  }
}
console.log("the chatracter appears " + count + " times in the text");

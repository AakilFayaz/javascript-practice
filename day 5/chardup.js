let text = "programming";
for (i = 0; i < text.length; i++) {
  if (text.indexOf(text[i], i + 1) !== -1) {
    console.log(text[i]);
  }
}
// indexOf indirectly check text[i and i+1 are equal]

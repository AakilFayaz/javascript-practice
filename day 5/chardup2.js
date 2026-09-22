let text = "programming";
for (i = 0; i < text.length; i++) {
  for (j = i + 1; j < text.length; j++) {
    if (text[i] === text[j]) {
      console.log(text[i]);
    }
  }
}

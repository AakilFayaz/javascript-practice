function containsOnlyDigits(text) {
  if (text === "") {
    return false;
  }

  for (let i = 0; i < text.length; i++) {
    if (text[i] < "0" || text[i] > "9") {
      return false;
    }
  }

  return true;
}

console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("123a5"));
console.log(containsOnlyDigits("12 34"));

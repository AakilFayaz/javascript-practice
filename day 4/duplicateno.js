var numbers = [1, 2, 3, 2, 4, 5, 3, 5, 5];

for (var i = 0; i < numbers.length; i++) {
  for (var j = i + 1; j < numbers.length; j++) {
    if (numbers[i] === numbers[j]) {
      console.log("Duplicate number:", numbers[i]);
      break;
    }
  }
}

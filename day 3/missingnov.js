var arr = [];
for (i = 0; i <= 100; i++) {
  if (arr[i] + 1 == arr[i + 1]) {
    continue;
  } else {
    console.log("The missing number is: ", arr[i] + 1);
    break;
  }
}

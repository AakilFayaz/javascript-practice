let arr = [1, 2, 3, 4, 5, 6, 7];
let target = 9;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
      console.log("The pair is:", arr[i], "+", arr[j], "=", target);
    }
  }
}
// it checks pairs of arr is equal to target

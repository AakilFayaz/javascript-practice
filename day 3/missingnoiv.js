var arr = [];
for (var i = 1; i <= 100; i++) {
  if (i == 57) {
    continue;
  } else {
    arr.push(i);
  }
}
console.log(arr.length);

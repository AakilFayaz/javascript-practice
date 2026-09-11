var arr = [];
for (var i = 1; i <= 100; i++) {
  if (i == 57) {
    continue;
  } else {
    arr.push(i);
  }
}
console.log(arr);
//it prints all values except 57 from 1 to 100

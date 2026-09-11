var arr = [];
for (var i = 1; i <= 100; i++) {
  if (i == 57) {
    continue;
  } else {
    arr.push(i);
  }
}
console.log(arr.length);
for (i=0;i<=100;i++){
  if (arr[i]+1==arr[i+1]){
    continue;
  }
else{
    console.log("The missing number is: ",arr[i]+1);
    break;
           
  }
}

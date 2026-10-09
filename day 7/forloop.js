var arr = [
  {
    name: "fazil",
    age: 20,
    address: {
      city: "coimbatore",
      state: "tamilnadu",
      pin: 641008,
    },
  },
  {
    name: "aakkil",
    age: 21,
    address: {
      city: "coimbatore",
      state: "tamilnadu",
      pin: 641008,
    },
  },
];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i].name);
  console.log(arr[i].age);
  console.log(arr[i].address.city);
  console.log(arr[i].address.state);
  console.log(arr[i].address.pin);
}

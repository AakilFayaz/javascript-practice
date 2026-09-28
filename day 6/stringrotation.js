let string1 = "ABCD";
let string2 = "CDAB";
if (
  string1.length === string2.length &&
  (string1 + string1).includes(string2)
) {
  console.log("String 2 is a rotation of String 1");
} else {
  console.log("String 2 is not a rotation of String 1");
}

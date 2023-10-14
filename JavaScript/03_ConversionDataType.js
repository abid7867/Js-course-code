console.log("conversion of dataType")

let num = 33
let num2 = "33"
let num3 = "33absd"
let num4 = "Abid"

console.table([num , num2 , num3, num4]);
console.table(typeof num);
console.table(typeof num2);
console.table(typeof num3);
console.table(typeof num4);

let numTOString = String(num);
console.log(numTOString);
console.log(typeof numTOString);

let islogged = "Abid"
let booleanislogged = Boolean(islogged);
console.log(booleanislogged);
console.log(typeof booleanislogged);

let NaNnumber = "3343absd"
let changeNum = Number(NaNnumber);
console.log(changeNum)
console.log(typeof changeNum);

let Numundefined = undefined
console.log(Numundefined);
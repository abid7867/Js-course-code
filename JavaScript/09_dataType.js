// # Primitive Data Type
//    7 Datatype --> String , Number , Boolean , Null , undefined , Symbol (it is used make unique) , BigInt 

const score = 100;             //number typeValue -->  number
const newScore = 232.43        //number typeValue -->  number

const isLoggedIn = false ;      //Boolean typeValue -->  boolean
const outSideTemp = null        //Null typeValue -->  "Obejct"

let userEmail = undefined      //Undefined typeValue -->  undefined
const id = Symbol('123')          //(It is used to make Unique)
const anotherId = Symbol('123');    //Symbol typeValue -->  symbol

console.log(id === anotherId);    //print      //Output--> false

const bigNumber = 3435445646n     //bigInt typeValue -->bigint        (represent *n* for bigInt)


// **************************Non-Primitive(reference value)******************

// Array , function and Object

//Array 

const heros = ["SuperMan" ,"Batman" , "SpiderMan"];   // it is a reference type value 

console.log(typeof heros);       //Object typeValue -->  Object 

//Object

let myObj = {
    name : " Abid " , 
    age :  22
}
console.log(typeof myObj);       //Object typeValue --> Object

//function

const myFun = function(){
    console.log("Hello world..");
}
console.log(typeof myFun);       //function typeValue -->  function

// *******************Memory--> Stack & Heap ***********************

console.log("Memory Stack & Heap ");
// Stack (Primitive)      ---> it get copy value 
//Heap (Non-Primitive)    ---> it get reference (original value ) & it can changed

// let myName = "Abid "
// let anotherName = myName

// console.log(anotherName);           //  o/p--> Abid

console.log("Stack memory")
let myName = "Abid "
let anotherName = myName
anotherName = "Hussain"

console.log(myName)
console.log(anotherName);

console.log("Heap Memory");

let userOne = {
    email : "User@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne;

userTwo.email = "abid@gmail.com"

console.log(userOne.email);             // o/p --> abid@gamil.com
console.log(userTwo.email);            // o/p --> abid@gamil.com


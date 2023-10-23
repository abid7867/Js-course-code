//****************STRING******************* */
//  (IT is denoted as " " or ' ')
// ("Hello" + 'world')

const name = "Abid"
const repoCount = 30

console.log(name + repoCount + "Hussain");    // outdated syntax to delcare String concatinated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //Modern way to declare String concate

const gameName = new String('hussain');

// using Method

console.log(gameName[0]);
//Access to protoTypes
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString1 = gameName.substring(0 , 4);     // it is not take nagative value 
const newString2 = gameName.slice(-7 , 0);        // but it takes neagtive value 

// trim
const newString3 = "      Abid       ";       
console.log(newString3);                      // without trim
console.log(newString3.trim());               // with trim

//replace 
const url = "https://abid.com/abid%20hussain";
console.log(url.replace('%20' , "-"));

//includes
console.log(url.includes('abid'));
console.log(url.includes('isPresent'));

//split
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
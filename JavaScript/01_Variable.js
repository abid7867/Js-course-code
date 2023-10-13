const accountId = 55
let accountEmail = "abid@gmail.com"
var accountPassword = "@123"
accountCity = "Gaya"
let accountState;

// accountId = 2  not-allowed
accountEmail = "mansur@gmail"
accountPassword = "123123"
accountCity = "Araria"

/*
  prefer not to use //VAR beacause of issues in block scope and functional Scope
*/

console.log(accountId);
console.table([accountId ,accountEmail, accountPassword, accountCity , accountState])
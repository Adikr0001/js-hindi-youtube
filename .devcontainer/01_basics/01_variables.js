const accountId = 144553
let accountEmail = "adityalsarai@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" //dont use like this its not save 
let accountState; // will be undefined
// accountId = 2 //not allowed

// curly braces are "SCOPE"
// let doesn't have scope issue (var does)

accountEmail ="hc@.com"
accountPassword ="21212121"
accountCity = "Bengaluru"


console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId , accountEmail , accountPassword , accountCity , accountState])
//opeartors - ka kaam hai mathematical. operations ko ilzaam dena 

// arthematic, comparison, logical , assignment, unary ternary 


// + - * / % ** - arthematic operators 
// = - assignment operator 
//  == === - comparison operators 
// < > <= >= ! != !==  - comparison operators 
// && || - logical operators 
// ?: - ternary operator



// typeof 

console.log(typeof(12)) 

// condition ? true hui toh : false hui toh 

12>13 ? console.log(true) : console.log(false)


//yaad rkho quirkcs 
//===========================+Quirks===================================================
typeof null -object //galat btata hai
typeof [] -object // galat btata hai
typeof NaN - number //galat batata hai 





//========================To handle this=============================

// we use ============instanceof=====================

a = []
console.log(a instanceof Array) //true
b = {}
console.log(b instanceof Object) //true
console.log(b instanceof Array )//false

// but - 
let a = 12;

console.log(a instanceof Number) //false
//because instance hmesha REFERNCE KE SATH USE HOTA HAI 



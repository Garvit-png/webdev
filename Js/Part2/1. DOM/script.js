// Document Object Model  

// body ke andr jo bhi likho ge , voh DOM hai 

// html se element select krna
// text badalna 
// html badalna 
// css badalna 
// attribute 
// event listeneres 

// ==================================================================
//                      Selecting an Element 
//===================================================================

let abcd = document.getElementById("abcd")
console.dir(abcd) // dir opening format mein de deta hai 

let abcde = document.getElementsByClassName("abcde")
console.dir(abcde)


let query = document.querySelector("h1") // pehla element select hoga, body ka pehla h1
console.dir(query)

let queryNew = document.querySelectorAll("h1");



// ==================================================================
//                      Text Manupluation
// ==================================================================

let h1 = document.querySelector("h1");

// h1.textContent = "hello garvit kaise ho";

h1.innerHTML = "<i>hey</i>" // yeh html daalne ke liye use hota hai 
h1.hidden = true   // inspect kholke html kholo  


// console.dir(h1) -> this is used to check the property 



// ==================================================================
//                      Attribute Manuplation
// ==================================================================

// attribute - jaise <a href = -> here 'a' is tag and 'href' is attribute


// ==================================================================

let a = document.querySelector("a")
// console.dir(a)

// a.href = "https://www.google.com"; // 1st method 

a.setAttribute("href","https://www.google.com"); //another method 
// var, let, const - line by line comparison

// declaration and initialization

var a; //declare karna
var a = 12; //declared and initialized dono hai

// window mein add krta hai 
// function scoped hota hai (matlab ye function mein use ho skta hai kahi pe bhi)
// aap firse declare kar sakte ho same name se  and error nahi aayega  - bad thing

var a = 13; // koi error nahi aayega


// agr let use krte 2 baar, toh error dikhega, isiliye hm let use krte hai 

//=============================const===============================

const dulha = "laba"
const dulhan = "labby"


//=======================let====================================

//window mein nahi add hota 



//=====================Scope( global, block, functional)

var a = 12; //gloabally scopped

{
    var a = 12; //block scoped  but var functional scopped hai , lekin function toh bna hi nahi, toh yeh abhi bhi gloablly kahi bhi use ho skta hai that will crate error, bcz after whole code, JS ek function mein run hota hai , so USE LET 
}

{
    let a = 12;

}

function abcd(){
    if (true){
        var c = 12; // functional scoped
    }
}


//=======================Temporal Dead Zone============================
// utna area jitne mein js ko pata hai ki variable exist karta hai par wo aapko value nahi de skta

console.log(naam)

let naam = "garvit"

//=========================Hoisting impact per type=============================

//hoisting - variable ko jab js mein banate hai to wo variable do hisos mein toot jata hai and uska declare part upr chala jaata and uska intialization part neeche reh jata hai 

var a = 12;

var a = undefined; //upr
a=12; //niche

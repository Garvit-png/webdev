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


//var -> hoist -> undefined
//let -> hoist -> x
//const -> hoist -> x



//=========================Types of data types==========================

//primitive - jisme bracket nahi aati           //reference - jisme bracket aati hai


//===Data ke types

// 12 true harsh [] {} () null undefined Nan Symbol bigInt


// primities -> jo bne bnaye aate hai and hm unhe copy kr skte hai , and copy krne pe ek real copy mil jaaye



// refernce - inko copy karne pr ral copy nahi milegi but aapko refernce milega parent ka

let a = 12; //primitive 
let b = a; // copy hai lekin a mein jo change kro , b mein nahi hega, a ki mummy ne 12 ko ps5 dilaya, lekin b ke 12 ko thodi dilagya, 

//=====now take a look on reference types

let array1=[1,2,3]; 
let array2 = array1; //yaha pe array copy nahi hogi , refernce milega, ab agar aap array1 mein ek bhi element change kro , toh array2 mein bhi change ho jayega bcz dono same memory address pe  

// meri gaadi aaj se tumhari bhi hai, tumne khud ki gaadi tod di, meri bhi toh todi - reference types example   





// '' - single quotes
// "" - double quotes
// `` - backticks 


// null ka matlab hai aapne jaan boojh kr koi value nahi di

let selectedStudents = null; //agr aage jaake koi valude dunga, lekin abhi value nahi de paunga toh maine ise null mein inititialise krdiya

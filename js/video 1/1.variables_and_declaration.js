//Words or keywords mein difference
// Js mein agr kisi bhi words ka koi kaam ho ya voh function krta ho, voh keyword hota hai 



// ****** var let const line by line comparison ******

//we create variable so that programm ko yaad rahe cheeze, like atm , jab maine card dala, atm machine should know me, for that he uses variable, ki thorughout the work, voh mujhe rakhega

//declaration and initialization

// var a = 13; //declare
// let a = 12; // declared and initialized

//var -
// 1. window mein add hota hai
// 2. function scoped hota hai -> function mein use ho skta hai 
// 3. aap firse declare kr sakte ho same name se and error nahi aayega


//why we are not using var - so that hme errors mile and hum sahi direction mein move kre 

const dulha = "Rohit"; // declared and initialized
const dulhan = "Priyanka"; // declared and initialized

// they need not be changed




// ************* scrope (loabal,block,function) ***************

//global scope - jab variable ko bahr declare kro toh poore code mein use ho skta hai 
//functional scope - jab varible ko function ke andar declare kro toh voh sirf usi function ke andar use ho skta hai
//block scope - jab variable ko block ke andar declare kro toh voh sirf usi block ke andar use ho skta hai, block matlab {} ke andar - ise {} block kehte hai 

//important - var block ko respect nahi krta, voh block ke bahar bhi use ho skta hai, let and const block ko respect krte hai, voh block ke andar hi use ho skta hai



//Reassignment and redeclaration *********

var a = 10;
a = 20; // reassignment - var mein aap variable ki value ko change kr skte ho

var a = 20; // redeclaration - var mein aap same name se variable ko firse declare kr skte ho, aur error nahi aayega, aur value change ho jayegi

// let a = 10;
a = 20; // reassignment - let mein bhi aap variable ki value ko change kr skte ho

// let a = 49; // redeclaration - let mein aap same name se variable ko firse declare krne ki koshish kroge toh error aayega, kyunki let mein aap same name se variable ko firse declare nahi kr skte ho

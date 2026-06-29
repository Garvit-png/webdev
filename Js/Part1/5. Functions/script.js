function dance(){
    console.log("dance")
    console.log("dance")



}
dance()

// another method

let fnc = function(){ // function expression
    console.log("dance")
    console.log("dance")
}
fnc()

// fat arrow func

let futc = ()=>{        //() fat        // => arrow
    console.log("dance")
    console.log("dance")
}
futc()




function nchwao(name){
    console.log(name + " naach raha hai")
}
nchwao(prompt("enter a name"))




// function hello(v1,v2){
//     console.log(v1,v2) // agr v1+v2 krdo toh NaN dedega , kyunki undefiend ko joda nahi jaa skta 
// }
// hello()


function hellow(b1=1,b2=1){ // default parameters
    console.log(b1+b2)
}

hellow() 
// hellow(3,43)



// jab arguemnts kai sare ho to humein utne hi parameter banane padege, issey bache ke liye, hun rest ka use karte hai agr ... function ke parameter space mein lage toh wo rest hai and agr ... arrays and objects mein likhe toh vo spread 

function abcd(...val){ // also abcd(a,b,c,....val)
    console.log(val)

}

abcd(1,2,3,4,5,6,7,8,9,10)




//============return matlab jaha se aaye ho vahi daal denge

function abcde(v){
    return 12 + v;
}



let aankda = abcde(43)

console.log(aankda)




//===============================First class functions=============================

// functions ko value ki tarah treat kar sakte hai - bs concept hai 


//===================high order fnc - voh function hota hai jo return kare function ya fir accept kre function apne parameter mein

// function abcd(val){              //- this


// }

// abcd(function(){

// })




//==== or ===

function helloww(){
    return function(){

    }
}

helloww()()



//=======pure vs impure function ========

// aisa fnc jo ki baahr ki value ko na badle - pure function 
// aisa fnc jo ki baahr ki value ko bdlde - impure function 


//========== pure function --

function abcdef(){
    console.log("hello") // yeh koi fvalue nahi bdl raha 
}


//========== impure function --

let a = 14
function abcdefg(){
    console.log(a)
    a++ // yeh value badal raha hai 
}


// closures and lexical scoping 

// closures - ek function jo return kare ek aur function aur return hone wala function humesha use krega parent function ka koi variable

function abcdefgh(){
    let a = 12;
    return function(){
        console.log(a);

    }
}

// lexical scoping


function abcdefghi(){
    let a = 12; // ab poore abcdefghi function mein a ko access kar sakte hai , bahr ni kr sakte
    function defg(){ // sirf defh ke niche niche use kr sakte hai na uppr, na bahr , 
        let b = 13;
        function ghif(){ //same with this
            let c = 14;
        }
    }
}





// IIFE (immediately Invoked Function Expressions)

(function (){

})

()



// ab aata hai concept Hoising kaa - you have created a function , but you have called it before its code, so unlike the other languanges it iwll not give an error , but execute it 


garvit();

function garvit(){ // function statements
    console.log("hello world")
}

// but agr aap FUNCTION EXPRESSION BNA DOGE JAISE


GarvitGandhi(); //yeh aapko error de dega

let GarvitGandhi= function(){
    console.log("hey")
}



// what isthe differnce between function declaration and expression in terms of hoisting 





// use rest parameter to accept any number of scores and return the total 

function getScore(...scores){
    let total = 0
    scores.forEach(function(val){
        total+=scores;

    });
    return total

}



console.log(getScore(10,20,304,40,60,70,40,20,20,20))




// Early return Function 


function checkAge(age){
    if (age<18) return "too young";
    return "Allowed";}


console.log(checkAge(23))


// what do you mean by functions are fierst class citizens 

// functions ko variables ki tarah use kr sakte hai 

// what is the higher order function





//===================BMI Calculator=========================

function BMI_Calc(weight,height){
    return (weight/(height*height))
}

console.log(BMI_Calc(prompt("enter your weight"),prompt("enter your height")))



//===========+Create a resuable discount calculator(HOF)==========================

//HOF_esa function jo ek or function return kre



function discountCalculator(discount){
    return function(price){
        return price - price * (discount/100);



    }

}

let ten = discountCalculator(10);
let twenty = discountCalculator(20);





let marks = [10,40,54,32,75]

console.log(marks[2])

marks[2]=100;


let array=[1,2,3,4,5];
//========push
array.push(7000); // array ke piche add krdega 
console.log(array)

//========pop

array.pop(); // array ke piche se value hta dega
console.log(array)

//=======shift

array.shift() // shuru se value hta deta hai 
console.log(array)

//======unshift 

array.unshift("pehli value")
console.log(array)

//=====splice 

array.splice(2,1) // 2 index se leke kitni value htani hai 

//======slice 

let newArray= array.slice(0,3) // yeh new variable mein dega value 
console.log(newArray)

//===reverse

array.reverse() //copy nahi bnata, main array ko change krdega


//====sort

let sr = array.sort(function(a,b){
    return a-b;
})

console.log(sr)

// ===========================
let rs = array.sort(function(a,b){
    return b-a; //syntax hai , ese hi yaad rkhna hoga 
})

console.log(rs)




//======================forEach=====================

let arr1 = [11,62,3,4,25];

arr1.forEach(function(val){ // arr1 ke hr ek element pe chlega ye , 11 aayega val ki jagah isi tareeke se chlega yeh

    console.log(val+5) // sari values ek ek krke print krdega
    

})


//====================map=======

//Mpa sirf tab use krna hai jab aapko ek naya array banana hai picchle array ke data ke basis par

// map dikhte saath hi ek black array bna liya kro 

let MapArr = arr1.map(function(val){
    return 12;
})


console.log(MapArr)


//jab bhi aapko aisa koi case dikh jaaye jaha pr ek array se naya array banega and vo naya rray kuch values ko rakhega tab map lgega



//================Filter========

let arr2 = [1,2,3,4,5,6,7,8,9,];

arr1.filter(function(val){ //yeh filter ho ho ke new array mein jayegi
    return true;
})




//==========+Reduce======

let arr3= [1,2,3,4,6,7,8,5,3,2,2,1]


arr3.reduce(function(accumlator,val){ //accumalator bar bar apni value ko yaad rkhta hai 
    return accumlator + val;

},0) // badi array ko ek choti mein rkhna


//===================+Find

let arr4 = [1,2,3,4,5,6,7,8,9];

let va = arr1.find(function(){
    return val === 1;
})




let arr5 = [
    { id : 1, key : 1},
    { id : 2, key : 2},
    { id : 3, key : 1},
]

let vay = arr5.find(function(val){
    return val.key===1;
})

console.log(vay)



//============some===========

let arr6 = [10,20,30,40,50,60,70,80,90];

let hushiyar = arr6.some(function(val){
    return val>60;

})

console.log(hushiyar)


//============every==========

let arr7 = [10,23,23,53];

let eve = arr7.every(function(val){
    return val>8
})

console.log(eve)


//==================Destructuring=============

let arr9=[1,2,3,4,5];


let [a,b, ,d] = arr9; // vohi values aayengi ab 



//======spread operator=====

let arr10 = [1,2,3,4,5,6,7,8,9];

let arr11= [...arr10]; // yaha pe referce gya hai ,original nahi gyi

// jab aap ise function mein use krte ho, vaha pe yeh rest bn jata hai 
// jab aap array mein use krte ho , vaha pe yeh spread bn jata hai 



// questions =======

// create an array with 3 fruits and print the second fruit.

let fruits = ["apple, banana, dragonfruit"]

console.log(fruits[1])


// add mango at the end and pineapple at the beginnning of the array.

fruits.unshift("Pineapple")
fruits.push("Mango")

console.log(fruits)


// Replace "banana" with "kiwi" in the array alone.

fruits[1] = "kiwi" ;

// splice sirf htane ke liye nahi, balki add ke liye bhi use hota hai 


// use .map() to square each number.

let arr12 = [1, 2, 3, 4];

let arr13 = arr12.map(function(val){
    return val*val
})

